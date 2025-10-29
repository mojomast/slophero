/**
 * ROO GANG - Game State Manager
 * Tracks cycle number, operation choices, and history
 */

export type OperationType = 'cover_story' | 'tech_proof' | 'infra_survival' | 'clean_trail';
export type GamePhase = 'sync' | 'choose_op' | 'escalation' | 'brrr' | 'handoff' | 'decision' | 'breather';

export interface OperationChoice {
  type: OperationType;
  cycle: number;
  success: boolean;
  statChanges: Record<string, number>;
}

export interface CycleData {
  cycleNumber: number;
  phase: GamePhase;
  currentOperation: OperationType | null;
  operationSuccess: boolean | null;
}

export class GameState {
  private currentCycle: number = 1;
  private currentPhase: GamePhase = 'sync';
  private currentOperation: OperationType | null = null;
  private operationSuccess: boolean | null = null;
  private history: OperationChoice[] = [];
  private statSnapshot: Record<string, number> = {};
  
  // Perk tracking
  private lastRTCCycle: number = -999; // RTC THIS BITCH cooldown
  private lastBrrrOverrideCycle: number = -999; // BRRR NOW cooldown
  private darkFavorUsed: boolean = false; // One-time use

  // === GETTERS ===

  getCurrentCycle(): number {
    return this.currentCycle;
  }

  getCurrentPhase(): GamePhase {
    return this.currentPhase;
  }

  getCurrentOperation(): OperationType | null {
    return this.currentOperation;
  }

  getHistory(): OperationChoice[] {
    return [...this.history];
  }

  getCycleData(): CycleData {
    return {
      cycleNumber: this.currentCycle,
      phase: this.currentPhase,
      currentOperation: this.currentOperation,
      operationSuccess: this.operationSuccess,
    };
  }

  // === STATE MANAGEMENT ===

  setPhase(phase: GamePhase): void {
    this.currentPhase = phase;
  }

  selectOperation(operation: OperationType): void {
    this.currentOperation = operation;
  }

  recordOperationOutcome(success: boolean, statChanges: Record<string, number>): void {
    this.operationSuccess = success;
    
    if (this.currentOperation) {
      this.history.push({
        type: this.currentOperation,
        cycle: this.currentCycle,
        success,
        statChanges,
      });
    }
  }

  advanceCycle(): void {
    this.currentCycle++;
    this.currentOperation = null;
    this.operationSuccess = null;
    this.currentPhase = 'sync';
  }

  takeStatSnapshot(stats: Record<string, number>): void {
    this.statSnapshot = { ...stats };
  }

  getStatSnapshot(): Record<string, number> {
    return { ...this.statSnapshot };
  }
  
  // === PERK MANAGEMENT ===
  
  canUseRTC(): boolean {
    return this.currentCycle - this.lastRTCCycle >= 3;
  }
  
  useRTC(): void {
    this.lastRTCCycle = this.currentCycle;
  }
  
  canUseBrrrOverride(): boolean {
    return this.currentCycle - this.lastBrrrOverrideCycle >= 2;
  }
  
  useBrrrOverride(): void {
    this.lastBrrrOverrideCycle = this.currentCycle;
  }
  
  canUseDarkFavor(): boolean {
    return !this.darkFavorUsed;
  }
  
  useDarkFavor(): void {
    this.darkFavorUsed = true;
  }
  
  isDarkFavorUsed(): boolean {
    return this.darkFavorUsed;
  }

  // === OPERATION INFO ===

  getOperationInfo(type: OperationType): {
    name: string;
    goal: string;
    brrMode: string;
    statImpact: string;
  } {
    const ops = {
      cover_story: {
        name: 'COVER STORY BUILD',
        goal: 'Make AiSatoshi look like a boring, investable founder',
        brrMode: 'COVER STORY BRRR',
        statImpact: 'Success: +Cred, +Hype, -Heat | Failure: +Heat, -Cred',
      },
      tech_proof: {
        name: 'TECH PROOF',
        goal: 'Ship something jaw-dropping that proves he\'s worth extracting',
        brrMode: 'TECH PROOF BRRR',
        statImpact: 'Success: +Hype (large), +Tokens, Stack validated | Failure: -Sanity, -Cred',
      },
      infra_survival: {
        name: 'INFRA SURVIVAL',
        goal: 'Keep the stack online under hostile pressure',
        brrMode: 'INFRA SURVIVAL BRRR',
        statImpact: 'Success: -Heat, stable operation | Failure: +Heat, -Energy',
      },
      clean_trail: {
        name: 'CLEAN TRAIL / RTC',
        goal: 'Delete incriminating work so AiSatoshi can cross borders',
        brrMode: 'CLEAN TRAIL BRRR',
        statImpact: 'Success: -Heat (large), safe archives | Failure: -Tokens, morale drop',
      },
    };

    return ops[type];
  }
}
