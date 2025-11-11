const inputEl = document.querySelector('.js-input-text');
const enterBtn = document.querySelector('.js-enter-button');
const todoContainer = document.querySelector('.js-todo-container');

function deleteBtnActivation() {
  const deleteBtn = document.querySelectorAll('.js-delete');
  deleteBtn.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.target.parentElement.remove();
    });
  });
}

let html = '';
enterBtn.addEventListener('click', () => {
  html += `
    <div>
    <p>${inputEl.value}</p>
    <button class="js-delete">Delete</button>
    </div>
    `;
  todoContainer.innerHTML = html;
  inputEl.value = '';

  deleteBtnActivation();
});
