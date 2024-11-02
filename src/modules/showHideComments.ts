// export const toggleComments = (): void => {
//   const showHideBtn = document.querySelector<HTMLElement>('.show-hide');
//   const commentWrapper =
//     document.querySelector<HTMLElement>('.comment-wrapper');
//
//   if (showHideBtn !== null && commentWrapper !== null) {
//     commentWrapper.style.display = 'none';
//
//     showHideBtn.addEventListener('click', () => {
//       const showHideText = showHideBtn.textContent;
//       if (showHideText === 'Show comments') {
//         showHideBtn.textContent = 'Hide comments';
//         commentWrapper.style.display = 'block';
//       } else {
//         showHideBtn.textContent = 'Show comments';
//         commentWrapper.style.display = 'none';
//       }
//     });
//   } else {
//     console.error('Required elements not found in the DOM');
//   }
// };

export const toggleComments = (): void => {
  const showHideBtn = document.querySelector<HTMLElement>('.show-hide');
  const commentWrapper =
    document.querySelector<HTMLElement>('.comment-wrapper');

  if (showHideBtn !== null && commentWrapper !== null) {
    commentWrapper.setAttribute('hidden', '');

    showHideBtn.addEventListener('click', () => {
      const isHidden = commentWrapper.hasAttribute('hidden');
      if (isHidden) {
        commentWrapper.removeAttribute('hidden');
        showHideBtn.textContent = 'Hide comments';
        showHideBtn.setAttribute('aria-expanded', 'true');
      } else {
        commentWrapper.setAttribute('hidden', '');
        showHideBtn.textContent = 'Show comments';
        showHideBtn.setAttribute('aria-expanded', 'false');
      }
    });

    showHideBtn.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        showHideBtn.click();
        event.preventDefault();
      }
    });

    showHideBtn.setAttribute('aria-expanded', 'false');
    showHideBtn.setAttribute('aria-controls', 'comment-wrapper');
  } else {
    console.error('Required elements not found in the DOM');
  }
};
