function toggleItem(buttonElement) {
  buttonElement.classList.toggle("checked");
}

function addTask() {
  const todoText = document.getElementById("todo-input").value;
  const category = document.getElementById("selected-category").value;

  const todoListItem = document.createElement("div");
  todoListItem.classList.add("item");

  const labelId = `${category}_${Date.now()}`;

  const newTodo = document.createElement("div");
  newTodo.textContent = todoText;
  newTodo.classList.add("label", "button");
  newTodo.addEventListener("click", function () {
    toggleItem(newTodo);
  });

  newTodo.setAttribute("id", labelId);

  todoListItem.appendChild(newTodo);

  const todoList = document.getElementsByClassName(`${category}`);
  console.log(todoList);
  if (todoList) {
    todoList[0].appendChild(todoListItem);
  }

  document.getElementById("todo-input").value = "";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("theme-light");
  document.body.classList.toggle("theme-dark");
}
