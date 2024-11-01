import { describe, it, expect, beforeEach } from 'vitest';
import { toggleComments } from '../src/modules/showHideComments';
import { JSDOM } from 'jsdom';

describe('toggleComments Functionality', () => {
  let dom: JSDOM;

  beforeEach(() => {
    dom = new JSDOM(`
      <div class="show-hide">Show comments</div>
      <div class="comment-wrapper" style="display: none;"></div>
    `);
    (global as unknown as { document: Document; window: Window }).document =
      dom.window.document;
    // @ts-expect-error: Assigning JSDOM window to global window for compatibility with the test environment.
    (global as unknown as { document: Document; window: Window }).window =
      dom.window;
    global.HTMLElement = dom.window.HTMLElement;
  });

  it('should toggle the comments visibility', () => {
    toggleComments();

    const showHideBtn = document.querySelector('.show-hide');
    const commentWrapper = document.querySelector('.comment-wrapper');

    if (
      showHideBtn instanceof HTMLElement &&
      commentWrapper instanceof HTMLElement
    ) {
      showHideBtn.click();

      expect(showHideBtn.textContent).toBe('Hide comments');
      expect(commentWrapper.style.display).toBe('block');
    } else {
      throw new Error('Required DOM elements are not found for testing.');
    }

    if (
      showHideBtn instanceof HTMLElement &&
      commentWrapper instanceof HTMLElement
    ) {
      showHideBtn.click();

      expect(showHideBtn.textContent).toBe('Show comments');
      expect(commentWrapper.style.display).toBe('none');
    }
  });
});
