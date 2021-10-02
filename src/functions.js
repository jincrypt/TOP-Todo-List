import { taskListRender } from "./createDOM.js";
import { Project, Task } from './index.js';
import { myProjects, updateStorage } from './storage.js';

function toggleTaskForm() {
    let addTaskButton = document.querySelector('#addTaskButton');
    let addTaskForm = document.querySelector('#addTaskForm');

    return [addTaskButton.style.display, addTaskForm.style.display] = [addTaskForm.style.display, addTaskButton.style.display]
}

function toggleProjectView() {
    let addProjectButton = document.querySelector('#addProjectButton');
    let addProjectForm = document.querySelector('#addProjectForm');

    return [addProjectButton.style.display, addProjectForm.style.display] = [addProjectForm.style.display, addProjectButton.style.display];
}

function buttonSubmit() {
    let task = document.querySelector('#taskName').value;
    let project = document.querySelector('#List-Container').dataset.id;
    project = myProjects.filter((item) => {
        return item.name === project;
    })[0];
    let newTask = new Task(task);
    project.addTask(newTask);
    updateStorage();
    taskListRender(project);
}

export { toggleTaskForm, toggleProjectView, buttonSubmit }