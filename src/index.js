import 'bootstrap/dist/css/bootstrap.min.css';
// DOM JS auto renders.
import './createDOM.js';
import { createButton, createAddSVG } from './createElement.js'

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

function taskRender(task) {
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
        let addProjectButtonDiv = document.createElement('div'); 
        let svg = createAddSVG('white');

        li.id = "addProject";
        li.style = "text-align:right"
        li.classList = "nav-item";
                
        addProjectButtonDiv.id = "addProjectButton";
        addProjectButtonDiv.classList = "nav-link text-white";
        addProjectButtonDiv.style = "cursor:pointer";
        
        addProjectButtonDiv.append(svg, " Add Project");
        
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
    Project.tasks.forEach((task) => taskRender(task));
    //render add task button
    createTaskListForm()
}

function createTaskListForm() {
    (function createAddTaskDiv() {
        let container = document.querySelector('#List-Container');
        let addTaskButton = document.createElement('div');
    
        const label = document.createElement('label');
        const svg = createAddSVG('black');
        const strong = document.createElement('strong');

        addTaskButton.id = "addTaskButton"
        label.id = "addTask";
        label.classList = 'list-group-item d-flex gap-3';
        
        strong.append(svg, " Add Task");

        strong.style = "cursor:pointer";

        strong.addEventListener('click', (e) => {
            toggleTaskForm();
        })

        addTaskButton.append(strong);
        label.appendChild(addTaskButton);
        
        container.appendChild(label);    
    })();

    (function createAddTaskForm() {
        let addTaskContainer = document.querySelector('#addTask');
        let addTaskFormContainer = document.createElement('div');
        addTaskFormContainer.id = "addTaskForm";

        let addTaskForm = document.createElement('form');

        let row1 = document.createElement('div');
        let row2 = document.createElement('div');

        let taskInput = document.createElement('input');
        taskInput.type = "text";
        taskInput.classList = "form-control-sm";
        taskInput.id = "taskName";
        taskInput.placeholder = "Task Name";

        row1.append(taskInput);

        let dateInput = document.createElement('input');
        dateInput.type = "date";
        dateInput.classList = "form-control-sm d-block";
        dateInput.id = "taskDate";

        row2.append(dateInput);

        let add = createButton("+");
        add.classList += " btn-success"
        
        let cancel = createButton("x");
        cancel.classList += " btn-danger";

        let btnGroup = document.createElement('div');
        btnGroup.classList = "btn-group";
        btnGroup.role = "group";

        add.addEventListener('click', (e) => {
            if (document.querySelector('#taskName').value) {
// TODO Add function
                console.log(document.querySelector('#taskName').value)
                buttonSubmit();
                document.querySelector('form').reset();
            }
            
        })

        cancel.addEventListener('click', (e) => {
            document.querySelector('form').reset();
            toggleTaskForm();
        })

        btnGroup.append(add, cancel);
        addTaskForm.append(row1, row2);
        addTaskFormContainer.append(addTaskForm, btnGroup);
        addTaskContainer.append(addTaskFormContainer);
        addTaskFormContainer.style.display = "none";

    })();

    function toggleTaskForm() {
        let addTaskButton = document.querySelector('#addTaskButton');
        let addTaskForm = document.querySelector('#addTaskForm');

        return [addTaskButton.style.display, addTaskForm.style.display] = [addTaskForm.style.display, addTaskButton.style.display]
    }
}

function buttonSubmit() {
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
const homeProject = new Project('Home');
homeProject.addTask(new Task('Build form + button for adding tasks'));
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