export const toggleComments = (): void => {
    const showHideBtn = document.querySelector<HTMLElement>('.show-hide')!;
    const commentWrapper = document.querySelector<HTMLElement>('.comment-wrapper')!;

    if (showHideBtn && commentWrapper) {
        commentWrapper.style.display = 'none';

        showHideBtn.addEventListener('click', () => {
            const showHideText = showHideBtn.textContent;
            if (showHideText === 'Show comments') {
                showHideBtn.textContent = 'Hide comments';
                commentWrapper.style.display = 'block';
            } else {
                showHideBtn.textContent = 'Show comments';
                commentWrapper.style.display = 'none';
            }
        });
    }
};