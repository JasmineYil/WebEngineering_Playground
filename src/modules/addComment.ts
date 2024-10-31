export const addComment = () => {
  const form = document.querySelector<HTMLFormElement>('.comment-form')!;
  const nameField = document.querySelector<HTMLInputElement>('#name')!;
  const commentField = document.querySelector<HTMLInputElement>('#comment')!;
  const list = document.querySelector<HTMLUListElement>('.comment-container')!;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const listItem = document.createElement('li');
    const namePara = document.createElement('p');
    const commentPara = document.createElement('p');
    const nameValue = nameField.value;
    const commentValue = commentField.value;

    namePara.textContent = nameValue;
    commentPara.textContent = commentValue;

    list.appendChild(listItem);
    listItem.appendChild(namePara);
    listItem.appendChild(commentPara);

    nameField.value = '';
    commentField.value = '';
  });
};
