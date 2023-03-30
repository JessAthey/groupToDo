const todoList = [];

function addToDoItem(item) {
  const todoItemExists = todoList.some(
    (existingItem) => existingItem.title === item.title
  );

  if (todoItemExists) {
    alert("This todo item already exists.");
  } else {
    item.dateAdded = new Date();
    todoList.push(item);
    renderTodoList();
  }
}

let todoInput = document.getElementById("todo-input");

let addTodoButton = document.querySelector("button[type='submit']");

addTodoButton.addEventListener("click", function (event) {
  event.preventDefault();

  if(todoInput.value.trim() === ""){
    alert("1st Todo: Enter a valid input");
    return;
  }

  let newTodo = {
    title: todoInput.value,
    isCompleted: false,
    isStarted: false,
    dateAdded: new Date(),
    ItemId: todoList.length,
  };

  addToDoItem(newTodo);
  todoInput.value = "";
});

function renderTodoList() {
  const todoListElement = document.getElementById("todo-list");
  todoListElement.innerHTML = "";

  for (const todoItem of todoList) {
    const listItem = document.createElement("li");
    const title = document.createElement("span");
    const status = document.createElement("span");
    const deleteButton = document.createElement("button");
    const dateAdded = document.createElement("span");

    title.textContent = todoItem.title;
    status.textContent = todoItem.isCompleted ? "Completed" : "Incomplete";
    deleteButton.textContent = "Finish Task";
    deleteButton.classList.add("deleteBtn");
    dateAdded.textContent = "Added on: " + todoItem.dateAdded.toLocaleString();

    deleteButton.addEventListener("click", () => {
      const index = todoList.indexOf(todoItem);
      todoList.splice(index, 1);
      renderTodoList();
    });

    listItem.appendChild(deleteButton);
    listItem.appendChild(title);
    listItem.appendChild(document.createElement("br"));
    listItem.appendChild(status);
    listItem.appendChild(dateAdded);
    todoListElement.appendChild(listItem);
  }
}
