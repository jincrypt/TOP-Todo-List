import 'bootstrap/dist/css/bootstrap.min.css';

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
let b = new Task('test3 i guess');
newProject.addTask(b);
console.log(newProject.tasks[0].complete);


(function createListContainer() {
    let container = document.createElement('div');
    container.classList = "list-group";
    container.id = 'List-Container';

    document.querySelector('main').appendChild(container);
})();



function domRender(task) {
    let container = document.querySelector('#List-Container');
    let name = task.getTask();
    let status = task.complete;
    let taskDate = '10/15/2021';

    const label = document.createElement('label');
    label.classList = 'list-group-item d-flex gap-3';

    const input = document.createElement('input');
    input.classList = 'form-check-input flex-shrink-0';
    input.type = 'checkbox';
    input.checked = status;
    input.style = 'font-size: 1.375em;';
    
    const span = document.createElement('span');
    span.classList = 'pt-1 form-checked-content';
    
    const strong = document.createElement('strong');
    strong.innerHTML = name;

    const small = document.createElement('small');
    if (taskDate) {
        small.innerHTML = taskDate;
    } else {
        small.innerHTML = '';
    }
    small.classList = 'd-block text-muted';

    span.appendChild(strong);
    span.appendChild(small);
    label.appendChild(input);
    label.appendChild(span);
    
    container.appendChild(label);

};

domRender(a);
domRender(b);

// function to automate render loop