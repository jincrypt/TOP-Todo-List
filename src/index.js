console.log('test')

let myTasks = [];
let index = 0;


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

    setTask(name) {
        this.name = name;
    }

    getTask() {
        return this.name;
    }
}

let a = new Task('test2');
let newProject = new Project('testproject');
newProject.addTask(a);
console.log(newProject.tasks[0].complete);


(function dom(task) {
    let name = task.getTask();
    let status = task.complete;



    const outerDiv = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.innerText = name;

    const p = document.createElement('p');
    p.innerText = status;

    outerDiv.appendChild(h1);
    outerDiv.appendChild(p);

    document.querySelector('#content').appendChild(outerDiv);
})(a);