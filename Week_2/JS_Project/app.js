function addtask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim(); //trim removes leading spaces
  if (taskText !== "") {
    const task = document.createElement("div");
    task.classList.add(
      "task",
      "border-2",
      "border-blue-500",
      "p-4",
      "rounded-md",
      "flex",
      "justify-between",
      "items-start",
      "cursor-pointer"
    );
    task.setAttribute("id", "task-" + new Date().getTime()); //assigns unique id to task
    task.setAttribute("draggable", "true"); //makes task draggable
    task.setAttribute("ondragstart", "drag(event)"); //drag(event) is a function that is called when the task is dragged
    const taskContent = document.createElement("span");

    taskContent.classList.add("task-content", "text-white", "max-w-[80%]");
    taskContent.textContent = taskText;
    task.appendChild(taskContent); // adds taskContent to task

    //delete button

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add(
      "delete-button",
      "bg-red-500",
      "text-white",
      "px-2",
      "py-1",
      "rounded-md",
      "ml-2"
    );
    //delete button click functionality
    deleteButton.addEventListener("click", function () {
      task.remove();
    });
    task.appendChild(deleteButton);

    document.getElementById("todo-list").appendChild(task);
  }
}
function drag(event) {
  // event.dataTrasnfer.setData is used at time of dragging for transfering data

  event.dataTransfer.setData("text", event.target.closest(".task").id);
}

function allowDrop(event) {
  event.preventDefault();
  event.stopPropagation();
}

function drop(event) {
  event.preventDefault();
  event.stopPropagation();
  console.log("event.target.id:", event.target.id);

  //only drops on valid column area

  const targetColumn = event.target;

  if (
    targetColumn.id === "todo" ||
    targetColumn.id === "inprogress" ||
    targetColumn.id === "done" ||
    targetColumn.id === "backlog"
  ) {
    const taskId = event.dataTransfer.getData("text");
    const draggedTask = document.getElementById(taskId);

    if (draggedTask) {
      //updating task border color based on where they are dropped
      if (targetColumn.id === "todo") {
        draggedTask.classList.remove(
          "border-red-500",
          "border-yellow-500",
          "border-green-500"
        );
        draggedTask.classList.add("border-blue-500");
      } else if (targetColumn.id === "inprogress") {
        draggedTask.classList.remove(
          "border-red-500",
          "border-yellow-500",
          "border-green-500"
        );
        draggedTask.classList.add("border-yellow-500");
      } else if (targetColumn.id === "done") {
        draggedTask.classList.remove(
          "border-red-500",
          "border-yellow-500",
          "border-green-500"
        );
        draggedTask.classList.add("border-green-500");
      } else if (targetColumn.id === "backlog") {
        draggedTask.classList.remove(
          "border-red-500",
          "border-yellow-500",
          "border-green-500"
        );
        draggedTask.classList.add("border-red-500");
      }
      targetColumn.appendChild(draggedTask);
    }
  }
}

document.getElementById("todo").addEventListener("dragover", allowDrop);
document.getElementById("inprogress").addEventListener("dragover", allowDrop);
document.getElementById("done").addEventListener("dragover", allowDrop);
document.getElementById("backlog").addEventListener("dragover", allowDrop);

document.getElementById("todo").addEventListener("drop", drop);
document.getElementById("inprogress").addEventListener("drop", drop);
document.getElementById("done").addEventListener("drop", drop);
document.getElementById("todo").addEventListener("backlog", drop);
