const newTaskInput = document.getElementById("new-task");
const addTaskbutton = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");

function addTask() {
  const taskText = newTaskInput.value.trim();

  if (taskText !== "") {
    const listItem = document.createElement("li");
    const taskSpan = document.createElement("span");

    taskSpan.textContent = taskText;

    listItem.appendChild(taskSpan);
    taskList.appendChild(listItem);

    newTaskInput.value = "";

    // edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-button";

    listItem.appendChild(editButton);

    editButton.addEventListener("click", () => editTask(listItem, taskSpan));

    // delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.className = "delete-button";

    listItem.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => deleteTask(taskList));
  }
}

addTaskbutton.addEventListener("click", addTask);

// edit Task
function editTask(listItem, taskSpan) {
  const currentText = taskSpan.textContent;
  const input = document.createElement("input");
  input.type = "text";
  input.value = currentText;

  listItem.replaceChild(input, taskSpan);
  input.focus();

  input.addEventListener("blur", () => {
    taskSpan.textContent = input.value.trim() || currentText;
    listItem.replaceChild(taskSpan, input);
  });
}

// delete task
function deleteTask(listItem) {
  taskList.removeChild(listItem);
}
// document.addEventListener("DOMContentLoaded", () => {});
