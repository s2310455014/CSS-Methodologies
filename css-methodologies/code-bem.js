function toggleItem(buttonElement) {
  if (buttonElement.classList.contains("todo-list-item__label--checked")) {
    buttonElement.classList.remove("todo-list-item__label--checked");
  } else {
    buttonElement.classList.add("todo-list-item__label--checked");
  }
}

function addTask() {
  const todoText = document.getElementById("todo-input").value;
  const category = document.getElementById("selected-category").value;

  const todoListItem = document.createElement("div");
  todoListItem.classList.add("todo-list-item");

  const labelId = `${category}_${Date.now()}`;

  const newTodo = document.createElement("div");
  newTodo.textContent = todoText;
  newTodo.classList.add(
    "todo-list-item__label",
    "todo-list-item__label--light"
  );
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
  const toggleBall = document.getElementById("toggle-ball");
  toggleBall.classList.toggle("toggle-ball--translated");

  const allTextElements = document.body.querySelectorAll("div");
  const theme = document.getElementsByClassName("theme");
  const todoInput = document.getElementsByClassName("todo-input");
  const todoAddButton = document.getElementsByClassName(
    "todo-input__add-button"
  );
  const todoList = document.getElementsByClassName("todo-list");
  const todoListItem = document.getElementsByClassName("todo-list-item__label");
  const themingToggle = document.getElementsByClassName("theming-toggle");

  for (const element of theme) {
    element.classList.toggle("theme--dark");
  }

  for (const element of todoInput) {
    element.classList.toggle("todo-input--dark");
  }

  for (const element of todoAddButton) {
    element.classList.toggle("todo-input__add-button--dark");
  }

  for (const element of themingToggle) {
    element.classList.toggle("theming-toggle--dark");
  }

  for (const element of todoListItem) {
    element.classList.toggle("todo-list-item__label--dark");
  }

  for (const element of todoList) {
    element.classList.toggle("todo-list--dark");
  }

  if (toggleBall.classList.contains("toggle-ball--translated")) {
    allTextElements.forEach((element) => {
      element.style.color = "white";
    });
  } else {
    allTextElements.forEach((element) => {
      element.style.color = "black";
    });
  }
}
