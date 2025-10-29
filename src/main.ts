/**
 * ROO GANG - Main Entry Point
 * Keep the stack alive. Get the man out.
 */

import { StatSystem } from './game/StatSystem';
import { UIManager } from './ui/UIManager';
import { GameState } from './game/GameState';
import { CycleManager } from './game/CycleManager';

class Game {
  private statSystem: StatSystem;
  private uiManager: UIManager;
  private gameState: GameState;
  private cycleManager: CycleManager;

  constructor() {
    this.statSystem = new StatSystem();
    this.uiManager = new UIManager(this.statSystem);
    this.gameState = new GameState();
    this.cycleManager = new CycleManager(this.gameState, this.statSystem, this.uiManager);
    this.initialize();
  }

  private initialize(): void {
    console.log('%c ROO GANG - INFRA EXTRACTION HORROR ', 'background: #00ff41; color: #0a0a0a; font-weight: bold; font-size: 16px;');
    console.log('%c KEEP THE STACK ALIVE. GET THE MAN OUT. ', 'background: #ff6600; color: #0a0a0a; font-weight: bold;');
    
    // Bind start button
    const startButton = document.getElementById('start-button');
    if (startButton) {
      startButton.addEventListener('click', () => this.start());
    }

    // Set up game over listeners
    this.statSystem.on('gameover:energy', () => this.handleGameOver('You Dropped The Line'));
    this.statSystem.on('gameover:sanity', () => this.handleGameOver('He Stayed Behind'));
    this.statSystem.on('gameover:heat', () => this.handleGameOver('Black Bag'));
  }

  private start(): void {
    console.log('EXTRACTION INITIATED');
    
    // Hide splash, show war room
    const splash = document.getElementById('splash');
    const warRoom = document.getElementById('war-room');
    
    if (splash && warRoom) {
      splash.classList.add('hidden');
      warRoom.classList.remove('hidden');
    }

    // Initialize UI
    this.uiManager.updateAllStats();
    
    // Start first cycle via CycleManager
    setTimeout(() => {
      this.cycleManager.startSync();
    }, 500);
  }

  private handleGameOver(reason: string): void {
    console.log(`GAME OVER: ${reason}`);
    
    this.uiManager.addTerminalLog(`CRITICAL FAILURE: ${reason.toUpperCase()}`);
    this.uiManager.addChatMessage('SYSTEM', `EXTRACTION FAILED: ${reason}`);
    
    // TODO: Show ending screen
    alert(`GAME OVER\n\n${reason}\n\nThe extraction failed.`);
  }
}

// Initialize game when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new Game();
});
