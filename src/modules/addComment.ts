export const addComment = (): void => {
  const form = document.querySelector<HTMLFormElement>('.comment-form');
  const nameField = document.querySelector<HTMLInputElement>('#name');
  const commentField = document.querySelector<HTMLInputElement>('#comment');
  const list = document.querySelector<HTMLUListElement>('.comment-container');

  if (form && nameField && commentField && list) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameValue = nameField.value.trim();
      const commentValue = commentField.value.trim();

      if (nameValue && commentValue) {
        const listItem = document.createElement('li');
        const namePara = document.createElement('p');
        const commentPara = document.createElement('p');

        namePara.textContent = nameValue;
        commentPara.textContent = commentValue;

        list.appendChild(listItem);
        listItem.appendChild(namePara);
        listItem.appendChild(commentPara);

        nameField.value = '';
        commentField.value = '';
      }
    });
  } else {
    console.error('One or more required elements were not found in the DOM.');
  }
};
