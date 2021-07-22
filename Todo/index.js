// selector
const form = document.querySelector("form");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

// event handler
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  if (input.value !== "") {
    addTodo(input.value);
  }
  input.value = "";
}

// helpers
function addTodo(todo) {
  let li = document.createElement("li");
  li.innerHTML = `
  <span class="todo-item">${todo}</span>
  <input type="checkbox"></input>
  <button type="button">Delete</button>
  `;
  li.classList.add("todo-list-item");
  ul.appendChild(li);
}
