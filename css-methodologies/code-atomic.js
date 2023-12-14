function toggleItem(buttonElement) {
  buttonElement.classList.toggle("line-through");
}

function addTask() {
  const todoText = document.getElementById("todo-input").value;
  const category = document.getElementById("selected-category").value;

  const todoListItem = document.createElement("div");
  todoListItem.classList.add("flex-c", "g1");

  const labelId = `${category}_${Date.now()}`;

  const newTodo = document.createElement("div");
  newTodo.textContent = todoText;
  newTodo.classList.add("width-fit", "bg-ll", "p05", "border-r05", "cursor-p");
  newTodo.addEventListener("click", function () {
    toggleItem(newTodo);
  });

  newTodo.setAttribute("id", labelId);

  todoListItem.appendChild(newTodo);
  console.log(todoListItem);

  const todoList = document.getElementsByClassName(`${category}`);
  console.log(todoList);
  if (todoList) {
    todoList[0].appendChild(todoListItem);
  }

  document.getElementById("todo-input").value = "";
}

function toggleDarkMode(toggleContainer) {
  toggleContainer.querySelector("div").classList.toggle("translateX");

  const allTextElements = document.body.querySelectorAll("div");

  allTextElements.forEach((element) => {
    element.classList.toggle("font-white");
  });

  const elementsBgWhite = document.getElementsByClassName("bg-white");
  for (const element of elementsBgWhite) {
    element.classList.toggle("bg-d");
  }

  const elementsBgL = document.getElementsByClassName("bg-l");
  for (const element of elementsBgL) {
    if (element.classList.contains("p05")) {
      element.classList.toggle("bg-dd");
    }
    element.classList.toggle("bg-d");
  }

  const elementsBgLL = document.getElementsByClassName("bg-ll");
  for (const element of elementsBgLL) {
    element.classList.toggle("bg-dd");
  }
}
