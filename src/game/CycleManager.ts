/**
 * ROO GANG - Cycle Manager
 * Orchestrates game loop: SYNC -> CHOOSE OP -> ESCALATION -> BRRR -> HANDOFF -> DECISION
 */

import { GameState, OperationType } from './GameState';
import { StatSystem, StatName } from './StatSystem';
import { UIManager } from '../ui/UIManager';
import { InkLoader, InkTag } from './InkLoader';

// Import Ink stories as raw text
import infraSurvivalBrrr from '../narrative/infra_survival_brrr.ink?raw';
import techProofBrrr from '../narrative/tech_proof_brrr.ink?raw';
import coverStoryBrrr from '../narrative/cover_story_brrr.ink?raw';
import cleanTrailBrrr from '../narrative/clean_trail_brrr.ink?raw';
import breatherMoments from '../narrative/breather_moments.ink?raw';
import finalExtractionBrrr from '../narrative/final_extraction_brrr.ink?raw';
import specialEncounters from '../narrative/special_encounters.ink?raw';

export class CycleManager {
  private gameState: GameState;
  private statSystem: StatSystem;
  private uiManager: UIManager;
  private inkLoader: InkLoader;
  private statChangesThisCycle: Record<string, number> = {};
  private breatherAvailable: boolean = true; // Hübris perk cooldown
  private lastBreatherCycle: number = 0;

  constructor(gameState: GameState, statSystem: StatSystem, uiManager: UIManager) {
    this.gameState = gameState;
    this.statSystem = statSystem;
    this.uiManager = uiManager;
    this.inkLoader = new InkLoader();

    // Expose perk triggers for UI
    (window as any).triggerBreather = () => this.triggerManualBreather();
    (window as any).triggerRTC = () => this.triggerRTC();
    (window as any).triggerBrrrOverride = () => this.triggerBrrrOverride();
    (window as any).triggerDarkFavor = () => this.triggerDarkFavor();
    
    // Listen for game over conditions
    this.statSystem.on('gameover:energy', () => this.triggerEnding('energy'));
    this.statSystem.on('gameover:sanity', () => this.triggerEnding('sanity'));
    this.statSystem.on('gameover:heat', () => this.triggerEnding('heat'));
  }

  // === PHASE TRANSITIONS ===

  startSync(): void {
    this.gameState.setPhase('sync');
    this.statChangesThisCycle = {};
    
    const cycle = this.gameState.getCurrentCycle();
    console.log(`CYCLE ${cycle} - SYNC`);
    
    this.uiManager.addTerminalLog(`=== CYCLE ${cycle} START ===`);
    this.uiManager.addChatMessage('SYSTEM', 'Extraction operation active. All crew online.');
    
    // Check for auto-trigger breather moment (Sanity < 40)
    if (this.statSystem.getStatValue('sanity') < 40) {
      this.uiManager.addChatMessage('Hübris', 'sanity is cooked. forcing a breather.');
      setTimeout(() => {
        this.triggerBreatherMoment();
      }, 2000);
      return;
    }
    
    // Show crew banter
    this.showCrewBanter(cycle);
    
    if (cycle === 1) {
      setTimeout(() => {
        this.uiManager.showCodec(
          'Hübris',
          'Welcome to the war room. This is where we keep the stack alive and get the man out. Everything is mean. It goes brrrr.'
        );
      }, 1500);
    }
    
    // After sync, show operation selection
    setTimeout(() => {
      this.showChooseOp();
    }, cycle === 1 ? 3000 : 2000);
  }

  private showChooseOp(): void {
    this.gameState.setPhase('choose_op');
    console.log('CHOOSE OP');
    
    this.uiManager.addTerminalLog('=== OPERATION SELECTION ===');
    
    // Show operation choices
    this.uiManager.showOperationChoices([
      {
        type: 'infra_survival',
        info: this.gameState.getOperationInfo('infra_survival'),
        onSelect: () => this.selectOperation('infra_survival'),
      },
      {
        type: 'cover_story',
        info: this.gameState.getOperationInfo('cover_story'),
        onSelect: () => this.selectOperation('cover_story'),
      },
      {
        type: 'tech_proof',
        info: this.gameState.getOperationInfo('tech_proof'),
        onSelect: () => this.selectOperation('tech_proof'),
      },
      {
        type: 'clean_trail',
        info: this.gameState.getOperationInfo('clean_trail'),
        onSelect: () => this.selectOperation('clean_trail'),
      },
    ]);
  }

  private selectOperation(operation: OperationType): void {
    this.gameState.selectOperation(operation);
    const info = this.gameState.getOperationInfo(operation);
    
    console.log(`Selected: ${info.name}`);
    this.uiManager.addTerminalLog(`Operation selected: ${info.name}`);
    this.uiManager.addChatMessage('Roo', `Let's run ${info.name}. Lock in.`);
    
    // Take stat snapshot before operation
    this.gameState.takeStatSnapshot({
      energy: this.statSystem.getStatValue('energy'),
      sanity: this.statSystem.getStatValue('sanity'),
      heat: this.statSystem.getStatValue('heat'),
      tokens: this.statSystem.getStatValue('tokens'),
      hype: this.statSystem.getStatValue('hype'),
      cred: this.statSystem.getStatValue('cred'),
    });
    
    setTimeout(() => {
      this.startEscalation();
    }, 2000);
  }

  private startEscalation(): void {
    this.gameState.setPhase('escalation');
    console.log('ESCALATION');
    
    this.uiManager.addTerminalLog('=== ESCALATION PHASE ===');
    this.uiManager.addChatMessage('Stack', 'here we go...');
    
    // Small stat pressure during escalation
    this.applyStatChange('energy', -3);
    this.uiManager.addTerminalLog('Energy: -3 (building pressure)');
    
    setTimeout(() => {
      this.startBrrrMode();
    }, 2000);
  }

  private startBrrrMode(): void {
    this.gameState.setPhase('brrr');
    const operation = this.gameState.getCurrentOperation();
    
    if (!operation) {
      console.error('No operation selected for BRRR MODE');
      return;
    }
    
    const info = this.gameState.getOperationInfo(operation);
    console.log(`BRRR MODE: ${info.brrMode}`);
    
    this.uiManager.addTerminalLog(`=== ${info.brrMode} ===`);
    this.uiManager.addChatMessage('SYSTEM', 'CRISIS MODE ACTIVE');
    
    // Load appropriate Ink story
    switch (operation) {
      case 'infra_survival':
        this.runInkStory(infraSurvivalBrrr, 'infra_survival_start');
        break;
      case 'tech_proof':
        this.runInkStory(techProofBrrr, 'tech_proof_start');
        break;
      case 'cover_story':
        this.runInkStory(coverStoryBrrr, 'cover_story_start');
        break;
      case 'clean_trail':
        this.runInkStory(cleanTrailBrrr, 'clean_trail_start');
        break;
    }
  }

  private runInkStory(inkText: string, startKnot: string): void {
    this.inkLoader.loadStory(inkText, startKnot);
    this.continueInkStory();
  }

  private continueInkStory(): void {
    const result = this.inkLoader.continue();
    
    // Process text (show dialogue)
    if (result.text) {
      this.displayInkText(result.text);
    }
    
    // Process tags (stat changes, terminal logs, etc.)
    for (const tag of result.tags) {
      this.processInkTag(tag);
    }
    
    // Show choices or continue
    if (result.choices.length > 0) {
      this.uiManager.showInkChoices(result.choices, (choiceIndex) => {
        this.inkLoader.makeChoice(choiceIndex);
        // Small delay to allow menu to hide before showing more content
        setTimeout(() => {
          this.continueInkStory();
        }, 300);
      });
    } else if (this.inkLoader.isComplete()) {
      // Story complete, determine outcome
      const outcomeTags = result.tags.filter(t => t.type === 'outcome');
      const outcome = outcomeTags.length > 0 ? outcomeTags[0].data : 'success';
      
      // Check if this was a breather moment
      if (this.gameState.getCurrentPhase() === 'breather') {
        this.uiManager.addTerminalLog('Breather complete. Returning to operations.');
        setTimeout(() => {
          this.showChooseOp();
        }, 2000);
      } else if (this.gameState.getCurrentOperation() === null && this.gameState.getCurrentPhase() === 'brrr') {
        // This was Final Extraction BRRR MODE
        const success = outcome === 'success';
        setTimeout(() => {
          if (success) {
            this.triggerEnding('ascension');
          } else {
            this.triggerEnding('partial_extraction');
          }
        }, 2000);
      } else if (this.gameState.getCurrentPhase() === 'decision') {
        // This was a special encounter
        setTimeout(() => {
          this.showDecision();
        }, 2000);
      } else {
        // Regular operation outcome
        const success = outcome.includes('success');
        this.gameState.recordOperationOutcome(success, this.statChangesThisCycle);
        
        setTimeout(() => {
          this.showHandoff();
        }, 2000);
      }
    }
  }

  private displayInkText(text: string): void {
    // Parse and display dialogue lines
    const lines = text.split('\n').filter(l => l.trim());
    
    for (const line of lines) {
      // Check for SYSTEM messages first
      if (line.startsWith('SYSTEM:')) {
        const message = line.replace('SYSTEM:', '').trim();
        this.uiManager.addTerminalLog(message);
        continue;
      }
      
      // Check if it's dialogue (Character: "text" or Character: text)
      const dialogueMatch = line.match(/^([A-Za-z0-9]+):\s*(.+)$/);
      
      if (dialogueMatch) {
        const [, character, message] = dialogueMatch;
        // Remove quotes if present
        const cleanMessage = message.replace(/^"|"$/g, '');
        this.uiManager.addChatMessage(character, cleanMessage);
      } else if (line.trim()) {
        // Narrative text (no speaker)
        this.uiManager.addTerminalLog(line.trim());
      }
    }
  }

  private processInkTag(tag: InkTag): void {
    switch (tag.type) {
      case 'stat': {
        // Format: "statName delta" (e.g., "energy -5")
        const parts = tag.data.split(' ');
        if (parts.length === 2) {
          const statName = parts[0] as StatName;
          const delta = parseInt(parts[1], 10);
          this.applyStatChange(statName, delta);
        }
        break;
      }
      case 'terminal': {
        this.uiManager.addTerminalLog(tag.data);
        break;
      }
      case 'chat': {
        // Format: "Character: message"
        const colonIndex = tag.data.indexOf(':');
        if (colonIndex !== -1) {
          const character = tag.data.substring(0, colonIndex).trim();
          const message = tag.data.substring(colonIndex + 1).trim();
          this.uiManager.addChatMessage(character, message);
        }
        break;
      }
      case 'outcome': {
        // Outcome tags are processed elsewhere
        break;
      }
    }
  }

  private applyStatChange(statName: StatName, delta: number): void {
    this.statSystem.modifyStat(statName, delta);
    this.uiManager.updateAllStats();
    
    // Track changes for handoff
    if (!this.statChangesThisCycle[statName]) {
      this.statChangesThisCycle[statName] = 0;
    }
    this.statChangesThisCycle[statName] += delta;
  }

  private showHandoff(): void {
    this.gameState.setPhase('handoff');
    console.log('HANDOFF');
    
    const operation = this.gameState.getCurrentOperation();
    const cycleData = this.gameState.getCycleData();
    const info = operation ? this.gameState.getOperationInfo(operation) : null;
    
    this.uiManager.addTerminalLog('=== HANDOFF REPORT ===');
    
    // Generate handoff log
    const log = this.generateHandoffLog(
      cycleData.cycleNumber,
      info?.name || 'Unknown Operation',
      cycleData.operationSuccess || false,
      this.statChangesThisCycle
    );
    
    this.uiManager.showHandoffLog(log, () => {
      this.showDecision();
    });
  }

  private generateHandoffLog(
    cycle: number,
    opName: string,
    success: boolean,
    statChanges: Record<string, number>
  ): string {
    const readiness = this.statSystem.calculateExtractionReadiness();
    const outcome = success ? 'SUCCESS' : 'PARTIAL SUCCESS / FAILURE';
    
    let log = `# CYCLE ${cycle} HANDOFF\n\n`;
    log += `## OPERATION: ${opName}\n`;
    log += `**Outcome:** ${outcome}\n\n`;
    
    log += `## STAT CHANGES:\n`;
    for (const [stat, delta] of Object.entries(statChanges)) {
      const sign = delta > 0 ? '+' : '';
      log += `- ${stat}: ${sign}${delta}\n`;
    }
    
    log += `\n## CURRENT STATUS:\n`;
    log += `- Energy: ${this.statSystem.getStatValue('energy')}\n`;
    log += `- Sanity: ${this.statSystem.getStatValue('sanity')}\n`;
    log += `- Heat: ${this.statSystem.getStatValue('heat')}\n`;
    log += `- Tokens: ${this.statSystem.getStatValue('tokens')}\n`;
    log += `- Extraction Readiness: ${readiness}%\n`;
    
    return log;
  }

  private showDecision(): void {
    this.gameState.setPhase('decision');
    console.log('DECISION POINT');
    
    this.uiManager.addTerminalLog('=== DECISION POINT ===');
    
    // 15% chance of special encounter before decision
    const encounterRoll = Math.random();
    if (encounterRoll < 0.15 && this.gameState.getCurrentCycle() > 1) {
      this.uiManager.addTerminalLog('ANOMALY DETECTED...');
      setTimeout(() => {
        this.triggerSpecialEncounter();
      }, 2000);
      return;
    }
    
    const canExtract = this.statSystem.canAttemptExtraction();
    const readiness = this.statSystem.calculateExtractionReadiness();
    
    this.uiManager.showDecisionPoint(
      {
        readiness,
        canExtract,
      },
      {
        onContinue: () => this.continueToNextCycle(),
        onExtract: () => this.attemptFinalExtraction(),
      }
    );
  }

  private continueToNextCycle(): void {
    this.uiManager.addChatMessage('Roo', 'One more cycle. We keep pushing.');
    this.uiManager.addTerminalLog('Continuing to next cycle...');
    
    this.gameState.advanceCycle();
    
    setTimeout(() => {
      this.startSync();
    }, 2000);
  }

  private showCrewBanter(cycle: number): void {
    const banters = [
      // Cycle 1
      [
        ['Hübris', 'yo are we scamming or building'],
        ['Stack', 'i feel bad about abandoning the big project'],
        ['Roo', 'breathe. we\'ve done worse.'],
      ],
      // Cycle 2
      [
        ['Stack', 'how many more cycles until we can extract?'],
        ['Hübris', 'as many as it takes to not die'],
        ['EvilFear', 'i got plastidip on everything. cost me 4$'],
      ],
      // Cycle 3
      [
        ['Stack', 'i\'m running on coffee and guilt'],
        ['Hübris', 'everybody stop. look at the moon. it\'s pretty'],
        ['Stack', '...okay. yeah. it is'],
      ],
      // Cycle 4+
      [
        ['Hübris', 'we\'re so back'],
        ['Stack', 'are we though'],
        ['EvilFear', 'i have a heat gun. we\'re back'],
      ],
    ];

    const banterIndex = Math.min(cycle - 1, banters.length - 1);
    const selectedBanter = banters[banterIndex];

    selectedBanter.forEach(([speaker, message]) => {
      this.uiManager.addChatMessage(speaker, message);
    });
  }

  private attemptFinalExtraction(): void {
    if (!this.statSystem.canAttemptExtraction()) {
      this.uiManager.addTerminalLog('EXTRACTION FAILED: Conditions not met');
      this.uiManager.addChatMessage('SYSTEM', 'You were not ready. The extraction collapses.');
      
      // Trigger failed extraction ending
      setTimeout(() => {
        this.triggerEnding('failed_extraction');
      }, 2000);
      return;
    }
    
    this.uiManager.addTerminalLog('=== FINAL EXTRACTION INITIATED ===');
    this.uiManager.addChatMessage('Roo', 'This is it. Get the man out.');
    
    // Launch Final Extraction BRRR MODE
    this.gameState.setPhase('brrr');
    setTimeout(() => {
      this.runInkStory(finalExtractionBrrr, 'final_extraction_start');
    }, 2000);
  }

  // === BREATHER MOMENTS ===

  private triggerBreatherMoment(): void {
    this.gameState.setPhase('breather');
    console.log('BREATHER MOMENT');
    
    this.uiManager.addTerminalLog('=== BREATHER MOMENT ===');
    this.runInkStory(breatherMoments, 'breather_start');
    this.lastBreatherCycle = this.gameState.getCurrentCycle();
  }

  public triggerManualBreather(): void {
    const currentCycle = this.gameState.getCurrentCycle();
    
    // Cooldown: 2 cycles between manual breathers
    if (currentCycle - this.lastBreatherCycle < 2) {
      this.uiManager.addChatMessage('Hübris', 'breather on cooldown. too soon.');
      return;
    }
    
    if (!this.breatherAvailable) {
      this.uiManager.addChatMessage('Hübris', 'already used this cycle.');
      return;
    }
    
    this.breatherAvailable = false;
    this.uiManager.addChatMessage('Hübris', 'forcing a breather. everybody stop.');
    
    setTimeout(() => {
      this.triggerBreatherMoment();
    }, 1000);
  }
  
  // === HÜBRIS: RTC THIS BITCH ===
  
  public triggerRTC(): void {
    const phase = this.gameState.getCurrentPhase();
    
    // Can only trigger during CHOOSE OP or ESCALATION
    if (phase !== 'choose_op' && phase !== 'escalation') {
      this.uiManager.addChatMessage('Hübris', 'RTC not available right now.');
      return;
    }
    
    // Cooldown: once per 3 cycles
    if (!this.gameState.canUseRTC()) {
      this.uiManager.addChatMessage('Hübris', 'RTC on cooldown. 3 cycles between uses.');
      return;
    }
    
    this.gameState.useRTC();
    this.uiManager.addChatMessage('Hübris', 'RTC THIS BITCH. SCORCHED EARTH MODE.');
    this.uiManager.addTerminalLog('=== EMERGENCY RTC ACTIVATED ===');
    
    // Force CLEAN TRAIL operation immediately
    this.gameState.selectOperation('clean_trail');
    const info = this.gameState.getOperationInfo('clean_trail');
    this.uiManager.addChatMessage('Roo', `${info.name} forced. Going hot.`);
    
    // Take stat snapshot
    this.gameState.takeStatSnapshot({
      energy: this.statSystem.getStatValue('energy'),
      sanity: this.statSystem.getStatValue('sanity'),
      heat: this.statSystem.getStatValue('heat'),
      tokens: this.statSystem.getStatValue('tokens'),
      hype: this.statSystem.getStatValue('hype'),
      cred: this.statSystem.getStatValue('cred'),
    });
    
    setTimeout(() => {
      // Skip escalation, jump straight to BRRR MODE
      this.gameState.setPhase('brrr');
      this.uiManager.addTerminalLog('=== CLEAN TRAIL BRRR ===');
      this.uiManager.addChatMessage('SYSTEM', 'CRISIS MODE ACTIVE');
      this.runInkStory(cleanTrailBrrr, 'clean_trail_start');
    }, 2000);
  }
  
  // === ROO: BRRR NOW ===
  
  public triggerBrrrOverride(): void {
    const phase = this.gameState.getCurrentPhase();
    
    // Can only trigger during ESCALATION
    if (phase !== 'escalation') {
      this.uiManager.addChatMessage('Roo', 'BRRR override only works during escalation.');
      return;
    }
    
    // Cooldown: once per 2 cycles
    if (!this.gameState.canUseBrrrOverride()) {
      this.uiManager.addChatMessage('Roo', 'BRRR override on cooldown. 2 cycles between uses.');
      return;
    }
    
    this.gameState.useBrrrOverride();
    this.uiManager.addChatMessage('Roo', 'BRRR MODE NOW. SKIP THE BULLSHIT.');
    this.uiManager.addTerminalLog('=== BRRR OVERRIDE ACTIVATED ===');
    
    // Apply immediate stat changes (rushed execution)
    this.applyStatChange('sanity', -20); // Crew drained from rush
    this.applyStatChange('heat', 5); // Made some noise
    this.uiManager.addTerminalLog('Sanity: -20 (rushed execution, crew drained)');
    this.uiManager.addTerminalLog('Heat: +5 (hasty moves = traces)');
    
    // Bonus rewards (applied at BRRR MODE completion)
    this.uiManager.addChatMessage('Stack', 'this is insane but let\'s go');
    
    setTimeout(() => {
      // Jump straight to BRRR MODE
      this.startBrrrMode();
    }, 1500);
  }
  
  // === AISATOSHI: DARK FAVOR ===
  
  public triggerDarkFavor(): void {
    // One-time use only
    if (!this.gameState.canUseDarkFavor()) {
      this.uiManager.addChatMessage('AiSatoshi', 'Already used. That favor is spent.');
      return;
    }
    
    this.gameState.useDarkFavor();
    
    // Show codec dialogue from AiSatoshi
    this.uiManager.showCodec(
      'AiSatoshi',
      'This will cost us. But here. +50 Tokens. The heat is coming.'
    );
    
    setTimeout(() => {
      this.uiManager.addTerminalLog('=== DARK FAVOR ACTIVATED ===');
      this.uiManager.addChatMessage('SYSTEM', 'Emergency token injection received.');
      
      // Apply stat changes
      this.applyStatChange('tokens', 50); // Emergency funding
      this.applyStatChange('heat', 30); // Big noise in bad places
      this.uiManager.addTerminalLog('Tokens: +50 (dark favor called in)');
      this.uiManager.addTerminalLog('Heat: +30 (you just made VERY loud noise)');
      
      this.uiManager.addChatMessage('Hübris', 'that was expensive as fuck');
      this.uiManager.addChatMessage('Roo', 'worth it if we extract clean');
      
      // Permanently disable the button
      const darkFavorButton = document.getElementById('satoshi-dark-favor');
      if (darkFavorButton) {
        darkFavorButton.setAttribute('disabled', 'true');
        darkFavorButton.style.opacity = '0.3';
        darkFavorButton.style.cursor = 'not-allowed';
      }
    }, 3000);
  }
  
  // === SPECIAL ENCOUNTERS ===
  
  private triggerSpecialEncounter(): void {
    console.log('SPECIAL ENCOUNTER');
    this.uiManager.addChatMessage('Stack', 'something weird is happening...');
    this.runInkStory(specialEncounters, 'special_encounters_start');
  }
  
  // === GAME ENDINGS ===
  
  private triggerEnding(type: 'ascension' | 'partial_extraction' | 'energy' | 'sanity' | 'heat' | 'failed_extraction' | 'tokens'): void {
    const stats = {
      energy: this.statSystem.getStatValue('energy'),
      sanity: this.statSystem.getStatValue('sanity'),
      heat: this.statSystem.getStatValue('heat'),
      tokens: this.statSystem.getStatValue('tokens'),
      hype: this.statSystem.getStatValue('hype'),
      cred: this.statSystem.getStatValue('cred'),
    };
    
    switch (type) {
      case 'ascension':
        this.uiManager.showEnding(
          'ASCENSION',
          `You did it. All of it.\n\nAiSatoshi lands in Silicon Valley clean. New identity. Clean trail. Ready to build.\n\nThe crew disperses. Stack goes back to his stack. Hübris finds another crisis. Roo keeps the line alive somewhere else.\n\nIt goes brrrr. Forever.`,
          'success',
          stats
        );
        break;
        
      case 'partial_extraction':
        this.uiManager.showEnding(
          'MESSY EXTRACTION',
          `He made it out. But it wasn’t clean.\n\nThere are traces. Flags. Attention. AiSatoshi is in Silicon Valley, but the heat followed him.\n\nThe crew knows it. You know it. The stack stays alive, but it’s fragile.\n\nYou kept him alive. But barely.`,
          'partial',
          stats
        );
        break;
        
      case 'heat':
        this.uiManager.showEnding(
          'BLACK BAG',
          `Heat hit 100. You made too much noise.\n\nThey grab AiSatoshi at the border. Black van. No warrant. No due process.\n\nThe operation collapses. The crew scatters. The stack goes dark.\n\nYou failed. He’s gone.`,
          'failure',
          stats
        );
        break;
        
      case 'energy':
        this.uiManager.showEnding(
          'YOU DROPPED THE LINE',
          `Your energy hit zero. You collapsed mid-operation.\n\nThe crew tries to hold it together without you. They can’t.\n\nAiSatoshi loses his handler. The extraction stalls. He stays behind.\n\nYou burned out. The line went dead.`,
          'failure',
          stats
        );
        break;
        
      case 'sanity':
        this.uiManager.showEnding(
          'HE STAYED BEHIND',
          `Sanity hit zero. AiSatoshi can’t take it anymore.\n\n“I’m done. I’m staying. I can’t do this.”\n\nThe crew tries to talk him down. He won’t budge. The extraction dissolves.\n\nHe stayed behind. You lost him.`,
          'failure',
          stats
        );
        break;
        
      case 'tokens':
        this.uiManager.showEnding(
          'STOLEN CROWN',
          `Tokens hit zero. You ran out of runway.\n\nSomeone else monetizes his work. His identity. His ideas.\n\nAiSatoshi sees his own face on TechCrunch. Under someone else’s name.\n\nYou kept him alive. But someone else took the crown.`,
          'failure',
          stats
        );
        break;
        
      case 'failed_extraction':
        this.uiManager.showEnding(
          'EXTRACTION FAILED',
          `You attempted extraction before you were ready.\n\nConditions weren’t met. Readiness wasn’t at 100%. You pushed anyway.\n\nThe operation falls apart at the border. AiSatoshi is exposed. The crew scatters.\n\nYou rushed it. You lost.`,
          'failure',
          stats
        );
        break;
    }
  }
}
