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

    removeTask(name) {
        this.tasks = this.tasks.filter((task) => {
            return task.name !== name;
        });
    }
}

class Task { 
    constructor(name, date = 'Today') {
        this.name = name;
        this.date = date;
        this.complete = false;
    }
}

storageCheck();

export { Project, Task }