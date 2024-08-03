const todoText = document.querySelector('#toDoText');
const addButton = document.querySelector('#addButton');
const todoList = document.querySelector('#toDoList');

addButton.addEventListener('click', () => {
    alert(todoText.value);
    const listItem = document.createElement('li');
    listItem.textContent = todoText.value;
    todoList.append(listItem);
})