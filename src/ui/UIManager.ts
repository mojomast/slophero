/**
 * ROO GANG - UI Manager
 * Handles all UI updates for the war room interface
 */

import { StatSystem, StatName, ReadinessStatus } from '../game/StatSystem';

export class UIManager {
  private statSystem: StatSystem;

  constructor(statSystem: StatSystem) {
    this.statSystem = statSystem;
    this.initialize();
  }

  private initialize(): void {
    // Listen for stat changes
    this.statSystem.on('stats:any', () => this.updateAllStats());
    
    // Bind codec continue button
    const codecContinue = document.getElementById('codec-continue');
    if (codecContinue) {
      codecContinue.addEventListener('click', () => this.hideCodec());
    }

    // Bind Hübris breather perk button
    const hubrisBreather = document.getElementById('hubris-breather');
    if (hubrisBreather) {
      hubrisBreather.addEventListener('click', () => {
        if ((window as any).triggerBreather) {
          (window as any).triggerBreather();
        }
      });
    }
    
    // Bind Hübris RTC perk button
    const hubrisRTC = document.getElementById('hubris-rtc');
    if (hubrisRTC) {
      hubrisRTC.addEventListener('click', () => {
        if ((window as any).triggerRTC) {
          (window as any).triggerRTC();
        }
      });
    }
    
    // Bind Roo BRRR NOW perk button
    const rooBrrr = document.getElementById('roo-brrr-override');
    if (rooBrrr) {
      rooBrrr.addEventListener('click', () => {
        if ((window as any).triggerBrrrOverride) {
          (window as any).triggerBrrrOverride();
        }
      });
    }
    
    // Bind AiSatoshi DARK FAVOR perk button
    const satoshiFavor = document.getElementById('satoshi-dark-favor');
    if (satoshiFavor) {
      satoshiFavor.addEventListener('click', () => {
        if ((window as any).triggerDarkFavor) {
          (window as any).triggerDarkFavor();
        }
      });
    }
  }

  // === STAT BARS ===

  updateAllStats(): void {
    const stats: StatName[] = ['energy', 'sanity', 'heat', 'tokens', 'hype', 'cred'];
    stats.forEach(stat => this.updateStatBar(stat));
    this.updateExtractionReadiness();
  }

  updateStatBar(name: StatName): void {
    const stat = this.statSystem.getStat(name);
    const percentage = (stat.current / stat.max) * 100;
    const zone = this.statSystem.getStatZone(name);

    // Update bar fill
    const barFill = document.querySelector(`.bar-fill[data-stat="${name}"]`) as HTMLElement;
    if (barFill) {
      barFill.style.width = `${percentage}%`;
      barFill.setAttribute('data-zone', zone);
    }

    // Update value text
    const valueText = document.querySelector(`.stat-value[data-stat="${name}"]`);
    if (valueText) {
      valueText.textContent = Math.round(stat.current).toString();
    }
  }

  updateExtractionReadiness(): void {
    const readiness = this.statSystem.calculateExtractionReadiness();
    const status = this.statSystem.getReadinessStatus();

    const fill = document.getElementById('readiness-fill');
    const value = document.getElementById('readiness-value');

    if (fill) {
      fill.style.width = `${readiness}%`;
      fill.setAttribute('data-status', status);
    }

    if (value) {
      value.textContent = `${readiness}%`;
      value.style.color = this.getReadinessColor(status);
    }
  }

  private getReadinessColor(status: ReadinessStatus): string {
    switch (status) {
      case 'green': return '#00ff41';
      case 'yellow': return '#ffed00';
      case 'red': return '#ff0033';
    }
  }

  // === CHAT WINDOW ===

  addChatMessage(speaker: string, text: string): void {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) return;

    const messageEl = document.createElement('div');
    messageEl.className = 'chat-message';
    
    const speakerEl = document.createElement('span');
    speakerEl.className = 'chat-speaker';
    speakerEl.textContent = speaker + ':';
    
    const textEl = document.createElement('span');
    textEl.className = 'chat-text';
    textEl.textContent = text;
    
    messageEl.appendChild(speakerEl);
    messageEl.appendChild(textEl);
    chatMessages.appendChild(messageEl);
    
    // Auto-scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  clearChat(): void {
    const chatMessages = document.getElementById('chat-messages');
    if (chatMessages) {
      chatMessages.innerHTML = '';
    }
  }

  // === TERMINAL LOG ===

  addTerminalLog(text: string): void {
    const terminalLog = document.getElementById('terminal-log');
    if (!terminalLog) return;

    const lineEl = document.createElement('div');
    lineEl.className = 'terminal-line';
    lineEl.textContent = text;
    
    terminalLog.appendChild(lineEl);
    
    // Auto-scroll to bottom
    terminalLog.scrollTop = terminalLog.scrollHeight;
  }

  clearTerminal(): void {
    const terminalLog = document.getElementById('terminal-log');
    if (terminalLog) {
      terminalLog.innerHTML = '';
    }
  }

  // === CODEC POPUP ===

  showCodec(name: string, dialogue: string): void {
    const codec = document.getElementById('codec-popup');
    const codecName = document.getElementById('codec-name');
    const codecDialogue = document.getElementById('codec-dialogue');
    const codecPortrait = document.getElementById('codec-portrait');

    if (codec) codec.classList.remove('hidden');
    if (codecName) codecName.textContent = name;
    if (codecDialogue) codecDialogue.textContent = dialogue;
    if (codecPortrait) codecPortrait.textContent = `[${name.toUpperCase()}]`;
  }

  hideCodec(): void {
    const codec = document.getElementById('codec-popup');
    if (codec) codec.classList.add('hidden');
  }

  // === CHOICE MENU ===

  showChoices(header: string, choices: { text: string; callback: () => void }[]): void {
    const choiceMenu = document.getElementById('choice-menu');
    const choiceHeader = document.getElementById('choice-header');
    const choiceList = document.getElementById('choice-list');

    if (!choiceMenu || !choiceHeader || !choiceList) return;

    choiceHeader.textContent = header;
    choiceList.innerHTML = '';

    choices.forEach(choice => {
      const button = document.createElement('button');
      button.className = 'choice-button';
      button.textContent = choice.text;
      button.addEventListener('click', () => {
        choice.callback();
        this.hideChoices();
      });
      choiceList.appendChild(button);
    });

    choiceMenu.classList.remove('hidden');
  }

  hideChoices(): void {
    const choiceMenu = document.getElementById('choice-menu');
    if (choiceMenu) choiceMenu.classList.add('hidden');
  }

  // === OPERATION SELECTION ===

  showOperationChoices(operations: Array<{
    type: string;
    info: { name: string; goal: string; brrMode: string; statImpact: string };
    onSelect: () => void;
  }>): void {
    const choices = operations.map(op => ({
      text: `${op.info.name}\n${op.info.goal}\n${op.info.statImpact}`,
      callback: op.onSelect,
    }));

    this.showChoices('CHOOSE TONIGHT\'S OPERATION', choices);
  }

  // === INK NARRATIVE CHOICES ===

  showInkChoices(choices: Array<{ index: number; text: string }>, onChoice: (index: number) => void): void {
    const choiceCallbacks = choices.map(choice => ({
      text: choice.text,
      callback: () => onChoice(choice.index),
    }));

    this.showChoices('DECISION', choiceCallbacks);
  }

  // === HANDOFF SCREEN ===

  showHandoffLog(logText: string, onContinue: () => void): void {
    this.showCodec('SYSTEM', logText);
    
    // Override continue button to call callback
    const codecContinue = document.getElementById('codec-continue');
    if (codecContinue) {
      const newButton = codecContinue.cloneNode(true) as HTMLElement;
      codecContinue.parentNode?.replaceChild(newButton, codecContinue);
      newButton.addEventListener('click', () => {
        this.hideCodec();
        onContinue();
      });
    }
  }

  // === DECISION POINT ===

  showDecisionPoint(
    status: { readiness: number; canExtract: boolean },
    actions: { onContinue: () => void; onExtract: () => void }
  ): void {
    const choices = [
      {
        text: 'CONTINUE TO NEXT CYCLE',
        callback: actions.onContinue,
      },
    ];

    if (status.canExtract) {
      choices.push({
        text: `ATTEMPT FINAL EXTRACTION (${status.readiness}% READY)`,
        callback: actions.onExtract,
      });
    } else {
      choices.push({
        text: `⚠️  EXTRACTION NOT READY (${status.readiness}%)`,
        callback: () => {
          this.addTerminalLog('Cannot extract yet. Conditions not met.');
        },
      });
    }

    this.showChoices('DECISION POINT', choices);
  }

  // === ENDING SCREEN ===
  
  showEnding(title: string, text: string, type: 'success' | 'failure' | 'partial', stats: Record<string, number>): void {
    const endingScreen = document.getElementById('ending-screen');
    const endingTitle = document.getElementById('ending-title');
    const endingText = document.getElementById('ending-text');
    const endingStats = document.getElementById('ending-stats');
    
    if (endingTitle) {
      endingTitle.textContent = title;
      endingTitle.className = `ending-title ${type}`;
    }
    
    if (endingText) {
      endingText.textContent = text;
    }
    
    if (endingStats) {
      const statLines = [
        '=== FINAL STATS ===',
        `Energy: ${stats.energy}`,
        `Sanity: ${stats.sanity}`,
        `Heat: ${stats.heat}`,
        `Tokens: ${stats.tokens}`,
        `Hype: ${stats.hype}`,
        `Cred: ${stats.cred}`,
      ];
      endingStats.textContent = statLines.join('\n');
    }
    
    if (endingScreen) {
      endingScreen.classList.remove('hidden');
    }
  }

  // === UTILITY ===

  showElement(id: string): void {
    const el = document.getElementById(id);
    if (el) el.classList.remove('hidden');
  }

  hideElement(id: string): void {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  }
}
