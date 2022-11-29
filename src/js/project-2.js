const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");

addTask.addEventListener("click", function () {
  let task = document.createElement("div");
  task.classList.add("task");

  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  li.classList.add("list")
  task.appendChild(li);

  let checkButton = document.createElement("button");
  checkButton.innerHTML = '<i class="fas fa-check-square"></i>';
  checkButton.classList.add("checkTask");

  task.appendChild(checkButton);

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteButton.classList.add("deleteTask");

  task.appendChild(deleteButton);

  if (inputTask.value === "") {
    alert("Please enter a task");
  }
  else{
    taskContainer.appendChild(task)
  }
  inputTask.value = "";

  checkButton.addEventListener("click", function () {
    checkButton.parentElement.style.textDecoration = "line-through";
  });

  deleteButton.addEventListener("click", function (e) {
    let target = e.target;

    target.parentElement.parentElement.remove();
  });
});
