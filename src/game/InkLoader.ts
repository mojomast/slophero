/**
 * ROO GANG - Ink.js Story Loader
 * Loads and runs Ink narrative files, processes tags for stat changes
 */

import { Story } from 'inkjs';

export interface InkChoice {
  index: number;
  text: string;
}

export interface InkTag {
  type: 'stat' | 'terminal' | 'chat' | 'outcome';
  data: string;
}

export interface InkResult {
  text: string;
  choices: InkChoice[];
  tags: InkTag[];
  canContinue: boolean;
}

export class InkLoader {
  private story: Story | null = null;
  private storyText: string = '';

  loadStory(inkText: string, startKnot?: string): void {
    this.storyText = inkText;
    this.story = new Story(inkText);
    
    if (startKnot) {
      this.story.ChoosePathString(startKnot);
    }
  }

  continue(): InkResult {
    if (!this.story) {
      throw new Error('No story loaded');
    }

    let text = '';
    const allTags: InkTag[] = [];

    // Continue story and collect all text/tags
    while (this.story.canContinue) {
      const line = this.story.Continue();
      if (line) {
        text += line;
      }

      // Process tags for this line
      const tags = this.story.currentTags;
      if (tags) {
        for (const tag of tags) {
          allTags.push(this.parseTag(tag));
        }
      }

      // Break if we hit choices
      if (this.story.currentChoices.length > 0) {
        break;
      }
    }

    const choices: InkChoice[] = this.story.currentChoices.map((choice, index) => ({
      index,
      text: choice.text,
    }));

    return {
      text: text.trim(),
      choices,
      tags: allTags,
      canContinue: this.story.canContinue,
    };
  }

  makeChoice(choiceIndex: number): void {
    if (!this.story) {
      throw new Error('No story loaded');
    }

    if (choiceIndex < 0 || choiceIndex >= this.story.currentChoices.length) {
      throw new Error(`Invalid choice index: ${choiceIndex}`);
    }

    this.story.ChooseChoiceIndex(choiceIndex);
  }

  private parseTag(tag: string): InkTag {
    // Tags format: #type: data
    // Examples: #stat: energy -5, #terminal: roo3 connection timeout, #outcome: success

    const colonIndex = tag.indexOf(':');
    if (colonIndex === -1) {
      return { type: 'terminal', data: tag };
    }

    const type = tag.substring(0, colonIndex).trim() as InkTag['type'];
    const data = tag.substring(colonIndex + 1).trim();

    return { type, data };
  }

  getCurrentTags(): InkTag[] {
    if (!this.story || !this.story.currentTags) {
      return [];
    }

    return this.story.currentTags.map(tag => this.parseTag(tag));
  }

  hasChoices(): boolean {
    return this.story ? this.story.currentChoices.length > 0 : false;
  }

  isComplete(): boolean {
    return this.story ? !this.story.canContinue && this.story.currentChoices.length === 0 : true;
  }

  reset(): void {
    if (this.storyText) {
      this.story = new Story(this.storyText);
    }
  }
}
