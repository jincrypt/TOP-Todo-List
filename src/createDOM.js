import { createButton, createAddSVG, createTrashCan } from "./createElement.js";
import { Project } from "./index.js";
import { myProjects, updateStorage } from "./storage.js";
import {
  acceptTaskEvent,
  cancelTaskEvent,
  projectButtonEvent,
  taskButtonEvent,
} from "./DOMevents.js";
import { deleteTask, toggleProjectView } from "./functions.js";

const createMain = (() => {
  const mainElement = document.createElement("main");

  mainElement.style =
    "display: flex; flex-wrap: nowrap; height: 100vh; max-height: 100vh; overflow-x: auto; overflow-y: hidden;";

  document.querySelector("body").prepend(mainElement);
})();

const createSideBar = (() => {
  const container = document.createElement("div");
  const titleBlock = document.createElement("div");
  const text = document.createElement("span");

  container.classList =
    "d-flex flex-column flex-shrink-0 p-3 text-white bg-dark";
  titleBlock.classList =
    "d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none";
  text.classList = "fs-4";

  container.style = "width: 280px;";
  container.id = "sideBar";
  text.innerHTML = "To-Do List";

  titleBlock.appendChild(text);
  container.append(titleBlock, document.createElement("hr"));

  document.querySelector("main").append(container);
})();

const createProjectList = (() => {
  const ul = document.createElement("ul");

  ul.classList = "nav nav-pills flex-column mb-auto";

  document.querySelector("#sideBar").append(ul);
})();

const createListContainer = (() => {
  let container = document.createElement("div");

  container.classList = "list-group w-100";
  container.id = "List-Container";

  document.querySelector("main").appendChild(container);
})();

function taskListRender(Project) {
  let oldList = document.querySelector("#List-Container");
  oldList.innerHTML = "";
  oldList.setAttribute("data-id", Project.name);
  Project.tasks.forEach((task) => taskRender(task));
  createTaskListForm();
  taskButtonEvent();
  acceptTaskEvent();
  cancelTaskEvent();
  projectSelection(Project.name);
}

function projectSelection(project) {
  document.querySelectorAll("ul li a").forEach((item) => {
    if (item.getAttribute("data-name") === project) {
      item.classList = "nav-link active";
    } else {
      item.classList = "nav-link text-white";
    }
  });
}

function taskRender(task) {
  let container = document.querySelector("#List-Container");
  let name = task.name;
  let status = task.complete;
  let taskDate = task.date;
  let trash = createTrashCan();

  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");
  const strong = document.createElement("strong");
  const small = document.createElement("small");

  label.classList = "list-group-item d-flex gap-3";
  input.classList = "form-check-input flex-shrink-0";
  span.classList = "pt-1 form-checked-content";

  input.type = "checkbox";
  input.checked = status;
  input.addEventListener("click", (e) => {
    task.complete = !task.complete;
    updateStorage();
  });
  input.style = "font-size: 1.375em;";

  strong.innerHTML = name;

  if (taskDate) {
    small.innerHTML = taskDate + " ";
  } else {
    small.innerHTML = "";
  }
  trash.style.cursor = "pointer";
  trash.addEventListener("click", (e) => {
    deleteTask(e);
  });

  small.classList = "d-block text-muted";
  small.append(trash);
  span.appendChild(strong);
  span.appendChild(small);
  label.appendChild(input);
  label.appendChild(span);
  container.appendChild(label);
}

function insertProject(project) {
  const li = document.createElement("li");
  const link = document.createElement("a");
  const svg = document.createElement("svg");
  const title = document.createTextNode(project.name);

  li.classList = "nav-item";
  link.classList = "nav-link text-white";
  link.setAttribute("data-name", project.name);
  svg.classList = "bi me-2";
  svg.width = "16";
  svg.height = "16";

  // Show task list from this project when clicked.
  link.addEventListener("click", (e) => {
    taskListRender(project);
  });

  link.append(svg, title);
  li.append(link);

  document.querySelector("main ul").append(li);
}

function createAddProjectButton() {
  (function createAddProjectDiv() {
    let li = document.createElement("li");
    let addProjectButtonDiv = document.createElement("div");
    let svg = createAddSVG("white");

    li.id = "addProject";
    li.style = "text-align:right";
    li.classList = "nav-item";

    addProjectButtonDiv.id = "addProjectButton";
    addProjectButtonDiv.classList = "nav-link text-white";
    addProjectButtonDiv.style = "cursor:pointer";

    addProjectButtonDiv.append(svg, " Add Project");

    li.append(addProjectButtonDiv);
    document.querySelector("main ul").append(li);
  })();

  (function createAddProjectField() {
    let li = document.querySelector("#addProject");
    let div = document.createElement("div");
    div.id = "addProjectForm";

    let addProjectField = document.createElement("input");
    addProjectField.type = "text";
    addProjectField.placeholder = "Project Name";
    addProjectField.classList = "form-control";
    addProjectField.id = "projectNameForm";

    let add = createButton("+");
    add.classList += " btn-success";

    let cancel = createButton("x");
    cancel.classList += " btn-danger";

    let btnGroup = document.createElement("div");
    btnGroup.classList = "btn-group";
    btnGroup.role = "group";

    add.addEventListener("click", (e) => {
      if (document.querySelector("#projectNameForm").value) {
        let newProject = new Project(
          document.querySelector("#projectNameForm").value
        );
        myProjects.push(newProject);
        updateStorage();
        projectListRender();
      }
    });

    cancel.addEventListener("click", (e) => {
      document.querySelector("#projectNameForm").value = "";
      toggleProjectView();
    });

    btnGroup.append(add, cancel);
    div.append(addProjectField, btnGroup);
    div.style.display = "none";

    li.appendChild(div);
  })();
}

function createTaskListForm() {
  (function createAddTaskDiv() {
    let container = document.querySelector("#List-Container");
    let addTaskButton = document.createElement("div");

    const label = document.createElement("label");
    const svg = createAddSVG("black");
    const strong = document.createElement("strong");

    strong.id = "addTaskButton";
    label.id = "addTask";
    label.classList = "list-group-item d-flex gap-3";

    strong.append(svg, " Add Task");

    strong.style = "cursor:pointer";

    addTaskButton.append(strong);
    label.appendChild(addTaskButton);

    container.appendChild(label);
  })();

  (function createAddTaskForm() {
    let addTaskContainer = document.querySelector("#addTask");
    let addTaskFormContainer = document.createElement("div");
    addTaskFormContainer.id = "addTaskForm";

    let addTaskForm = document.createElement("form");

    let row1 = document.createElement("div");
    let row2 = document.createElement("div");

    let taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.classList = "form-control-sm";
    taskInput.id = "taskName";
    taskInput.placeholder = "Task Name";

    row1.append(taskInput);

    let dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.classList = "form-control-sm d-block";
    dateInput.id = "taskDate";

    row2.append(dateInput);

    let add = createButton("+");
    add.classList += " btn-success";

    let cancel = createButton("x");
    cancel.classList += " btn-danger";

    let btnGroup = document.createElement("div");
    btnGroup.classList = "btn-group";
    btnGroup.role = "group";

    add.id = "acceptTask";
    cancel.id = "cancelTask";

    btnGroup.append(add, cancel);
    addTaskForm.append(row1, row2);
    addTaskFormContainer.append(addTaskForm, btnGroup);
    addTaskContainer.append(addTaskFormContainer);
    addTaskFormContainer.style.display = "none";
  })();
}

function projectListRender() {
  document.querySelector("main ul").innerHTML = "";
  myProjects.forEach((project) => {
    insertProject(project);
  });
  createAddProjectButton();
  projectButtonEvent();
}

export { taskListRender, projectListRender };
