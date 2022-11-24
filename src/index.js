document.addEventListener("DOMContentLoaded", () => {
  const createNewList = document.querySelector("input[type='submit']");
  const input = document.querySelector("#new-task-description");
  const list = document.querySelector("#tasks");
  createNewList.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value != "") {
      const button = document.createElement("button");
      button.textContent = "X";
      const newTask = document.createElement("li");
      newTask.textContent = input.value;
      list.appendChild(newTask);
      newTask.appendChild(button);
      input.value = "";
      button.addEventListener("click", () => newTask.remove());
    } else {
      alert("Enter a value");
    }
  });
});
