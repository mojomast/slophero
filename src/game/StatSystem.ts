/**
 * ROO GANG - Stat System
 * Six core stats + Extraction Readiness derived meter
 */

export type StatName = 'energy' | 'sanity' | 'heat' | 'tokens' | 'hype' | 'cred';

export interface StatValue {
  current: number;
  max: number;
  min: number;
}

export interface GameStats {
  energy: StatValue;
  sanity: StatValue;
  heat: StatValue;
  tokens: StatValue;
  hype: StatValue;
  cred: StatValue;
  satoshiTrust: number; // Hidden stat
}

export type StatZone = 'safe' | 'warning' | 'danger';
export type ReadinessStatus = 'red' | 'yellow' | 'green';

export class StatSystem {
  private stats: GameStats;
  private listeners: Map<string, Set<() => void>>;

  constructor() {
    this.stats = this.initializeStats();
    this.listeners = new Map();
  }

  private initializeStats(): GameStats {
    return {
      energy: { current: 100, max: 100, min: 0 },
      sanity: { current: 100, max: 100, min: 0 },
      heat: { current: 20, max: 100, min: 0 },
      tokens: { current: 100, max: 200, min: 0 },
      hype: { current: 50, max: 100, min: 0 },
      cred: { current: 50, max: 100, min: 0 },
      satoshiTrust: 100, // Hidden, starts high
    };
  }

  // === GETTERS ===
  
  getStat(name: StatName): StatValue {
    return { ...this.stats[name] };
  }

  getStatValue(name: StatName): number {
    return this.stats[name].current;
  }

  getSatoshiTrust(): number {
    return this.stats.satoshiTrust;
  }

  getAllStats(): Readonly<GameStats> {
    return this.stats;
  }

  // === MODIFIERS ===

  modifyStat(name: StatName, delta: number): void {
    const stat = this.stats[name];
    const oldValue = stat.current;
    
    stat.current = Math.max(stat.min, Math.min(stat.max, stat.current + delta));
    
    if (stat.current !== oldValue) {
      this.notifyListeners(`stat:${name}`);
      this.notifyListeners('stats:any');
      
      // Check for game over conditions
      this.checkGameOverConditions();
    }
  }

  setStat(name: StatName, value: number): void {
    const stat = this.stats[name];
    stat.current = Math.max(stat.min, Math.min(stat.max, value));
    this.notifyListeners(`stat:${name}`);
    this.notifyListeners('stats:any');
    this.checkGameOverConditions();
  }

  modifySatoshiTrust(delta: number): void {
    const oldValue = this.stats.satoshiTrust;
    this.stats.satoshiTrust = Math.max(0, Math.min(100, this.stats.satoshiTrust + delta));
    
    if (this.stats.satoshiTrust !== oldValue) {
      this.notifyListeners('trust:changed');
    }
  }

  // === STAT ZONES ===

  getStatZone(name: StatName): StatZone {
    const stat = this.stats[name];
    const percentage = (stat.current / stat.max) * 100;

    // Heat is inverted (high is bad)
    if (name === 'heat') {
      if (percentage >= 76) return 'danger';
      if (percentage >= 51) return 'warning';
      return 'safe';
    }

    // For other stats (low is bad)
    if (percentage <= 24) return 'danger';
    if (percentage <= 49) return 'warning';
    return 'safe';
  }

  // === EXTRACTION READINESS ===

  calculateExtractionReadiness(): number {
    let readiness = 0;

    // Tokens >= 100 (30 points)
    if (this.stats.tokens.current >= 100) {
      readiness += 30;
    }

    // Heat <= 40 (30 points)
    if (this.stats.heat.current <= 40) {
      readiness += 30;
    }

    // Sanity > 0 (20 points)
    if (this.stats.sanity.current > 0) {
      readiness += 20;
    }

    // Energy > 0 (10 points)
    if (this.stats.energy.current > 0) {
      readiness += 10;
    }

    // Satoshi Trust intact (10 points)
    if (this.stats.satoshiTrust >= 50) {
      readiness += 10;
    }

    return readiness;
  }

  getReadinessStatus(): ReadinessStatus {
    const readiness = this.calculateExtractionReadiness();
    
    if (readiness >= 100) return 'green';
    if (readiness >= 70) return 'yellow';
    return 'red';
  }

  canAttemptExtraction(): boolean {
    return this.calculateExtractionReadiness() === 100;
  }

  // === GAME OVER CONDITIONS ===

  private checkGameOverConditions(): void {
    if (this.stats.energy.current === 0) {
      this.notifyListeners('gameover:energy');
    }
    if (this.stats.sanity.current === 0) {
      this.notifyListeners('gameover:sanity');
    }
    if (this.stats.heat.current === 100) {
      this.notifyListeners('gameover:heat');
    }
  }

  isGameOver(): boolean {
    return (
      this.stats.energy.current === 0 ||
      this.stats.sanity.current === 0 ||
      this.stats.heat.current === 100
    );
  }

  getGameOverReason(): string | null {
    if (this.stats.energy.current === 0) return 'You Dropped The Line';
    if (this.stats.sanity.current === 0) return 'He Stayed Behind';
    if (this.stats.heat.current === 100) return 'Black Bag';
    return null;
  }

  // === FLAVOR TEXT ===

  getStatFlavorText(name: StatName): string {
    const value = this.stats[name].current;
    
    const flavorTexts: Record<StatName, Record<string, string>> = {
      energy: {
        high: "You crack your knuckles. Let's brrrr.",
        mid: "Another coffee. Another cycle. You've done worse.",
        low: "Your vision tunnels. The codec audio sounds like it's underwater.",
        critical: "You're typing with one eye closed. You don't remember the last time you stood up."
      },
      sanity: {
        high: "The plan is clean. You trust your people. This is doable.",
        mid: "You catch yourself checking the same log three times. Are you being watched? Probably not. Probably.",
        low: "You drafted a confession email to nobody. You didn't send it. You'll delete it later. Maybe.",
        critical: "Every ping could be the one that ends it. You're rehearsing surrender speeches in your head."
      },
      heat: {
        high: "Someone knocked on your door at 3AM. You didn't answer. They didn't knock again.",
        mid: "An investor asked where Satoshi's been the last six months. You deflected. They seemed to buy it.",
        low: "Quiet night. No pings. Nobody's asking questions. This is what winning looks like.",
        critical: "Panama chat is dead silent. You see a typing bubble from a contact you don't recognize. It disappears."
      },
      tokens: {
        high: "You have three exfil routes, two fake passports, and a charter pilot who owes you. You're golden.",
        mid: "You can pull this off. It'll burn every favor you have, but you can pull it off.",
        low: "You're calling in debts you swore you'd never touch. This better be worth it.",
        critical: "You have $47 in a burner account and a half-written pitch deck. That's it."
      },
      hype: {
        high: "Three VCs asked for intros this week. Hübris said 'we're a cult now.' He's not wrong.",
        mid: "You're real enough that people ask questions. Not famous. Not invisible. Right in the zone.",
        low: "An investor said 'I thought that project died?' You said 'nah, we're just quiet.' They didn't seem convinced.",
        critical: "Nobody's talking about you. The chat's gone cold. It's like you never existed."
      },
      cred: {
        high: "Stack said 'I trust you' and meant it. That's worth more than tokens.",
        mid: "You've shipped enough that people don't write you off. Not yet.",
        low: "Hübris joked 'are we scamming or building?' You laughed. He wasn't joking.",
        critical: "EvilFear asked if you even believe in this anymore. You didn't answer."
      }
    };

    const zone = this.getStatZone(name);
    const texts = flavorTexts[name];

    if (zone === 'danger') return texts.critical;
    if (zone === 'warning') return texts.low;
    if (value >= 75) return texts.high;
    return texts.mid;
  }

  // === EVENT SYSTEM ===

  on(event: string, callback: () => void): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(callback);
  }

  off(event: string, callback: () => void): void {
    const listeners = this.listeners.get(event);
    if (listeners) {
      listeners.delete(callback);
    }
  }

  private notifyListeners(event: string): void {
    const listeners = this.listeners.get(event);
    if (listeners) {
      listeners.forEach(callback => callback());
    }
  }

  // === DEBUG / TESTING ===

  resetStats(): void {
    this.stats = this.initializeStats();
    this.notifyListeners('stats:reset');
  }

  debugSetStats(overrides: Partial<Record<StatName, number>>): void {
    for (const [key, value] of Object.entries(overrides)) {
      this.setStat(key as StatName, value);
    }
  }
}
