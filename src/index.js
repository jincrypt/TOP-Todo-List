import 'bootstrap/dist/css/bootstrap.min.css';
// DOM JS auto renders.
// import './createDOM.js';
import { projectListRender } from './createDOM.js'
import { taskListRender } from "./createDOM.js"

let myProjects = [];

class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    };
}

class Task { 
    constructor(name) {
        this.name = name;
        this.complete = false;
    }
}

//Examples
const homeProject = new Project('Home');
homeProject.addTask(new Task('Change class for active project, and change inactive projects to white text'));
homeProject.addTask(new Task('Storage options?'));
homeProject.addTask(new Task('Add message when trying to add project without filling form'));
homeProject.addTask(new Task('More task details (details, completion date, completion status'));
homeProject.addTask(new Task('if task is late and not complete;  turn date red'));
homeProject.addTask(new Task('Improve UI for task list portion (RH)'));
homeProject.addTask(new Task('Include footer for made by'));
myProjects.push(homeProject);
projectListRender();
taskListRender(homeProject);

export { myProjects, Project, Task }