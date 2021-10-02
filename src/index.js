import 'bootstrap/dist/css/bootstrap.min.css';
import './createDOM.js';
import { storageCheck } from './storage.js';


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

storageCheck();

export { Project, Task }