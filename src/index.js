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

function createAddProjectButton() {
    (function createAddProjectDiv() {
        let li = document.createElement('li');
        li.id = "addProject";
        let addProjectButtonDiv = document.createElement('div'); 
        addProjectButtonDiv.id = "addProjectButton";
        let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        let pathA = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        let pathB = document.createElementNS('http://www.w3.org/2000/svg', 'path');

        svg.setAttribute('width', '16');
        svg.setAttribute('height', '16');
        svg.setAttribute('fill','white');
        pathA.setAttributeNS(null, 'd', "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z");
        pathB.setAttributeNS(null, 'd', "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z");
        li.style = "text-align:right"
        svg.classList = "bi bi-plus-square";    
        li.classList = "nav-item";
        addProjectButtonDiv.classList = "nav-link text-white";
        addProjectButtonDiv.style = "cursor:pointer";
        
        svg.appendChild(pathA);
        svg.appendChild(pathB);
        addProjectButtonDiv.append(svg, " Add Project");
        
        // Function for adding project (show form)
        addProjectButtonDiv.addEventListener('click', (e) => {
            toggleProjectView();
        });
        
        li.append(addProjectButtonDiv);
        document.querySelector('main ul').append(li);        
    })();

    (function createAddProjectField() {
        let li = document.querySelector('#addProject');
        let div = document.createElement('div');
        div.id = "addProjectForm";

        let addProjectField = document.createElement('input');
        addProjectField.type = "text";
        addProjectField.placeholder = "Project Name";
        addProjectField.classList = "form-control";
        addProjectField.id = 'projectNameForm';

        const createButton = (name) => {
            let button = document.createElement('button');
            button.classList = "btn btn-sm";
            button.type = "button";
            button.innerHTML = name;
            return button;
        }

        let add = createButton("+");
        add.classList += " btn-success"
        
        let cancel = createButton("x");
        cancel.classList += " btn-danger";

        let btnGroup = document.createElement('div');
        btnGroup.classList = "btn-group";
        btnGroup.role = "group";

        add.addEventListener('click', (e) => {
            if (document.querySelector('#projectNameForm').value) {
                let newProject = new Project(document.querySelector('#projectNameForm').value);
                myProjects.push(newProject);
                projectListRender();
            }
        })

        cancel.addEventListener('click', (e) => {
            document.querySelector('#projectNameForm').value = '';
            toggleProjectView();
        })

        btnGroup.append(add, cancel);
        div.append(addProjectField, btnGroup);
        div.style.display = "none";

        li.appendChild(div);
    })();

    function toggleProjectView() {
        let addProjectButton = document.querySelector('#addProjectButton');
        let addProjectForm = document.querySelector('#addProjectForm');

        return [addProjectButton.style.display, addProjectForm.style.display] = [addProjectForm.style.display, addProjectButton.style.display];
        
    }
}

function projectListRender() {
    document.querySelector('main ul').innerHTML = '';
    myProjects.forEach((project) => {
        insertProject(project);
    })
    createAddProjectButton();
};

function taskListRender(Project) {
    let oldList = document.querySelector('#List-Container');
    oldList.innerHTML = '';
    oldList.setAttribute('data-id', Project.name);
    Project.tasks.forEach((task) => domRender(task));
    console.log(myProjects)
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
    let project = document.querySelector('#List-Container').dataset.id;
    project = myProjects.filter((item) => {
        return item.name === project;
    })[0];
    let newTask = new Task(task);
    project.addTask(newTask);
    taskListRender(project);
}


//Examples
let a = new Task('test2');
const homeProject = new Project('Home');
homeProject.addTask(a);
let b = new Task('test3 i guess');
homeProject.addTask(b);
myProjects.push(homeProject);
projectListRender();