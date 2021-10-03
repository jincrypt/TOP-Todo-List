import { taskListRender } from "./createDOM.js";
import { Task } from "./index.js";
import { myProjects, updateStorage } from "./storage.js";

function toggleTaskForm() {
  let addTaskButton = document.querySelector("#addTaskButton");
  let addTaskForm = document.querySelector("#addTaskForm");

  return ([addTaskButton.style.display, addTaskForm.style.display] = [
    addTaskForm.style.display,
    addTaskButton.style.display,
  ]);
}

function toggleProjectView() {
  let addProjectButton = document.querySelector("#addProjectButton");
  let addProjectForm = document.querySelector("#addProjectForm");

  return ([addProjectButton.style.display, addProjectForm.style.display] = [
    addProjectForm.style.display,
    addProjectButton.style.display,
  ]);
}

const deleteTask = (e) => {
  e.preventDefault();
  let task = e.target.parentNode.previousSibling.innerHTML;
  let project = document.querySelector("#List-Container").dataset.id;
  let projectIndex = myProjects.indexOf(
    myProjects.filter((item) => {
      return item.name === project;
    })[0]
  );

  myProjects[projectIndex].removeTask(task);
  taskListRender(myProjects[projectIndex]);
  updateStorage();
};

function buttonSubmit() {
  let task = document.querySelector("#taskName").value;
  let date = document.querySelector("#taskDate").value;
  let project = document.querySelector("#List-Container").dataset.id;
  project = myProjects.filter((item) => {
    return item.name === project;
  })[0];
  let newTask = new Task(task, date);
  project.addTask(newTask);
  updateStorage();
  taskListRender(project);
}

export { toggleTaskForm, toggleProjectView, buttonSubmit, deleteTask };
