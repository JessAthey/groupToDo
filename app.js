let toDoList = [];


function addToDoItem(item){
    toDoList.push(item);
    renderTodoList();
}


let todoInput = document.getElementById("todo-input");

let addTodoButton = document.querySelector("button[type='submit']");


addTodoButton.addEventListener("click", function(event) {

 event.preventDefault();


let newTodo = {




title: todoInput.value,

 isCompleted:false, 

 isStarted:false, 


dateAdded: new Date(),

ItemId: toDoList.length

};

addToDoItem(newTodo);
todoInput.value = "";


});

function renderTodoList() {
    // Render the todo list items in the HTML here
    let todoList = document.getElementById("todo-list");
    todoList.innerHTML = ""; // Clear the existing list items
  
    for (let i = 0; i < toDoList.length; i++) {
       todoItem = toDoList[i];
       listItem = document.createElement("li");
       title = document.createElement("span");
      let status = document.createElement("span");
  
      title.textContent = todoItem.title;
      status.textContent = todoItem.isCompleted ? "Completed" : "Incomplete";
  
      listItem.appendChild(title);
      listItem.appendChild(status);
      todoList.appendChild(listItem);
    }
  }