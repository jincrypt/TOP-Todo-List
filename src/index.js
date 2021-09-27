import 'bootstrap/dist/css/bootstrap.min.css';
// DOM JS auto renders.
import './createDOM.js';

let myProjects = [];
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
}

function domRender(task) {
    let container = document.querySelector('#List-Container');
    let name = task.name;
    let status = task.complete;
    let taskDate = '10/15/2021';

    const label = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const strong = document.createElement('strong');
    const small = document.createElement('small');

    label.classList = 'list-group-item d-flex gap-3';
    input.classList = 'form-check-input flex-shrink-0';
    span.classList = 'pt-1 form-checked-content';


    input.type = 'checkbox';
    input.checked = status;
    input.addEventListener('click', (e) => {
        task.complete = !task.complete;
        console.log(task.complete)
    });
    input.style = 'font-size: 1.375em;';
        
    strong.innerHTML = name;

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

function insertProject(project) {
    const li = document.createElement('li')
    const link = document.createElement('a');
    const svg = document.createElement('svg');
    const title = document.createTextNode(project.name);

    li.classList = 'nav-item';
    link.classList = 'nav-link text-white'; // swap text-white to active if needed
    svg.classList = 'bi me-2';
    svg.width = '16';
    svg.height = '16';

    // Update, is this necessary? I think i can remove.
    link.href = "#";

    // Show task list from this project when clicked.
    link.addEventListener('click', (e) => {
        taskListRender(project);
        // TODO: Set classlist to "active" and set all others as "text-white"
    });

    link.append(svg, title);
    li.append(link);

    document.querySelector('main ul').append(li);
}

function projectListRender() {
    document.querySelector('main ul').innerHTML = '';
    myProjects.forEach((project) => {
        insertProject(project);
    })
};

function taskListRender(Project) {
    let oldList = document.querySelector('#List-Container');
    oldList.innerHTML = '';
    Project.tasks.forEach((task) => domRender(task));
}

//Add below to a create form module
let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    buttonSubmit();
    form.reset();
});

function buttonSubmit() {
        // taskDate taskName taskCheck
    let task = document.querySelector('#taskName').value;
    
    let newTask = new Task(task);
    homeProject.addTask(newTask);
    taskListRender(homeProject);
}


//Examples
let a = new Task('test2');
const homeProject = new Project('Home');
homeProject.addTask(a);
let b = new Task('test3 i guess');
homeProject.addTask(b);
myProjects.push(homeProject);
projectListRender();