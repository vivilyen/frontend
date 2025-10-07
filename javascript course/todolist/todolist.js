let Array1 = [
    {name: 'make dinner',
    dueDate: '2025-12-22'
    },
    {name: 'wash dishes',
    dueDate: '2025-12-22'}];

renderTodoList();

function renderTodoList () {
    let todoListHTML = '';

    Array1.forEach(function(todoObject, index) {
        const { name, dueDate } = todoObject;
        const html = 
        `<div>${name}</div>
        <div>${dueDate}</div> 
        <button class="delete-todo-button" onclick="
            Array1.splice(${index}, 1);
            renderTodoList();
        ">Delete</button>`;
        todoListHTML += html;
    });
    
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

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


