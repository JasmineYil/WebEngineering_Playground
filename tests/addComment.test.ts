import { describe, it, expect, beforeEach } from 'vitest';
import { addComment } from '../src/modules/addComment';
import { JSDOM } from 'jsdom';

describe('addComment Functionality', () => {
  beforeEach(() => {
    const dom = new JSDOM(`
      <form class="comment-form"></form>
      <input id="name" value="Test User"/>
      <input id="comment" value="This is a test comment"/>
      <ul class="comment-container"></ul>
    `);
    (global as unknown as { document: Document; window: Window }).document =
      dom.window.document;
    // @ts-expect-error: Assigning JSDOM window to global window for compatibility with the test environment.
    (global as unknown as { document: Document; window: Window }).window =
      dom.window;
  });

  it('should correctly add a comment to the list', () => {
    addComment();

    const form = document.querySelector<HTMLFormElement>('.comment-form');
    form?.dispatchEvent(
      new window.Event('submit', { bubbles: true, cancelable: true })
    );

    const commentList = document.querySelectorAll('ul.comment-container li');
    expect(commentList.length).toBe(1);

    const listItem = commentList[0];
    expect(listItem.querySelector('p')?.textContent).toBe('Test User');
    expect(listItem.querySelectorAll('p')[1]?.textContent).toBe(
      'This is a test comment'
    );
  });
});
