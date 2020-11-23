import { getData, postTodo, deleteTodo } from './api-client.js';

const container = document.querySelector('.container');
const toDoList = document.querySelector('.todo__list');
const formTodo = document.querySelector('.todo__form');
const inputTodo = document.querySelector('.input-todo');

const checkToDo = async() => {
    const checkbox = document.querySelectorAll('.todo__checkbox');
    console.log(checkbox.length);
};

const addTodo = async() => {
    const data = await getData();
    const getTodo = data.map(item => {

        const newform = document.createElement('form');
        newform.setAttribute('id', item._id); // creates ID

        const newCheckbox = document.createElement('input');
        newCheckbox.type = 'checkbox';
        newCheckbox.classList.add('.todo__checkbox');
        newCheckbox.id = item.description;

        const label = document.createElement('label');
        label.htmlFor = item.description;
        label.innerHTML = item.description;
        label.classList.add('todo__single');

        toDoList.appendChild(newform);
        newform.append(newCheckbox, label);
    });
    checkToDo();
}
addTodo();

const createTodo = async() => {
    formTodo.addEventListener('submit', async(event) => {
        event.preventDefault();
        let valueNewTodo = inputTodo.value;
        console.log(valueNewTodo);
        let li = document.createElement('li');
        toDoList.appendChild(li);
        toDoList.insertAdjacentElement('afterbegin', li);
        li.classList.add('task');
        li.innerHTML = valueNewTodo;
        const data = await postTodo({ description: valueNewTodo, done: false });
    });
}
createTodo();



// const deleteTodo = async() => {
//     const data = await deleteTodo(id);

// }