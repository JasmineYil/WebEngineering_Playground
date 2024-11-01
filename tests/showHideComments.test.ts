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
        (global as any).document = dom.window.document;
        (global as any).window = dom.window;
    });

    it('should toggle the comments visibility', () => {
        toggleComments();

        const showHideBtn = document.querySelector('.show-hide') as HTMLButtonElement;
        showHideBtn?.click();
        const commentWrapper = document.querySelector('.comment-wrapper') as HTMLButtonElement;

        expect(showHideBtn?.textContent).toBe('Hide comments');
        expect(commentWrapper?.style.display).toBe('block');
    });
});
