let Array1 = [
    {name: 'make dinner',
    dueDate: '2025-12-22'
    },
    {name: 'wash dishes',
    dueDate: '2025-12-22'}];

renderTodoList();

function renderTodoList () {
    let todoListHTML = '';

    Array1.forEach((todoObject) => {
        const { name, dueDate } = todoObject;
        const html = 
        `<div>${name}</div>
        <div>${dueDate}</div> 
        <button class="delete-todo-button js-delete-todo-button">Delete</button>`;
        todoListHTML += html;
    });
    
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                Array1.splice(index, 1);
                renderTodoList();
            });
        });
}

document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
        addtoArray();
    });

function addtoArray () {
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    const inputElement = document.querySelector(".js-todo-name-1");
    const name = inputElement.value;
    Array1.push({
        name,
        dueDate
    });
    renderTodoList();
}


