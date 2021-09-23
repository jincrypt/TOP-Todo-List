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
}

(function createMain() {
    const mainElement = document.createElement('main');
    mainElement.style = "display: flex; flex-wrap: nowrap; height: 100vh; height: -webkit-fill-available; max-height: 100vh; overflow-x: auto; overflow-y: hidden;";
    document.querySelector('body').prepend(mainElement);
})();

(function createSideBar() {
    const container = document.createElement('div');
    container.classList = "d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"; 
    container.style = "width: 280px;";
    container.id = "sideBar";

    const titleBlock = document.createElement('div');
    titleBlock.classList = "d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none";
    
    const text = document.createElement('span');
    text.classList = "fs-4";
    text.innerHTML = "To-Do List";

    titleBlock.appendChild(text);
    container.append(titleBlock, document.createElement('hr'));
     
    document.querySelector('main').append(container);
})();

(function createProjectList() {
    const ul = document.createElement('ul');
    ul.classList = 'nav nav-pills flex-column mb-auto';
    
    document.querySelector('#sideBar').append(ul);
})();

function insertProject(project) {
    const li = document.createElement('li')
    li.classList = 'nav-item';

    const link = document.createElement('a');
    link.classList = 'nav-link text-white'; // swap text-white to active if needed
    link.href = "#";
    
    const svg = document.createElement('svg');
    svg.classList = 'bi me-2';
    svg.width = '16';
    svg.height = '16';

    const title = document.createTextNode(project.name);
    link.append(svg, title);

    li.append(link);
    document.querySelector('main ul').append(li);
}


(function createListContainer() {
    let container = document.createElement('div');
    container.classList = "list-group";
    container.id = 'List-Container';

    document.querySelector('main').appendChild(container);
})();


function domRender(task) {
    let container = document.querySelector('#List-Container');
    let name = task.name;
    let status = task.complete;
    let taskDate = '10/15/2021';

    const label = document.createElement('label');
    label.classList = 'list-group-item d-flex gap-3';

    const input = document.createElement('input');
    input.classList = 'form-check-input flex-shrink-0';
    input.type = 'checkbox';
    input.checked = status;
    input.addEventListener('click', (e) => {
        task.complete = !task.complete;
        console.log(task.complete)
    });
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


let a = new Task('test2');
let newProject = new Project('Home');
newProject.addTask(a);
let b = new Task('test3 i guess');
newProject.addTask(b);

insertProject(newProject);

newProject.tasks.forEach((task) => domRender(task));
domRender(a);
domRender(b);

// function to automate render loop