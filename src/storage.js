import { projectListRender,taskListRender } from './createDOM.js';
import { Project, Task } from './index.js';
let myProjects = [];

// Check if storage is available

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

function storageCheck() {
    if (storageAvailable('localStorage')) {
        if (localStorage.getItem('storedProjects')) {
            let retrievedProjects = JSON.parse(localStorage.getItem('storedProjects'));

            retrievedProjects.forEach((retrievedProject) => {
                let tempProject = new Project(retrievedProject.name);
                retrievedProject.tasks.forEach((task) => {
                    let newTask = new Task(task.name);
                    newTask.complete = task.complete;
                    newTask.date = task.date;
                    tempProject.addTask(newTask);
                });

                myProjects.push(tempProject);
            });

            projectListRender();
            taskListRender(myProjects[0]);
        } else {
            defaultList();
        }
    } else {
        // Too bad, no localStorage for us
        console.log('no storage');
        defaultList();
    }
}

function updateStorage() {
    if (storageAvailable('localStorage')) {
        localStorage.setItem('storedProjects', JSON.stringify(myProjects));
    }
}

function defaultList() {
    //Examples
    const homeProject = new Project('Home');
    homeProject.addTask(new Task('Add message when trying to add project without filling form'));
    homeProject.addTask(new Task('More task details (details, completion date, completion status'));
    homeProject.addTask(new Task('if task is late and not complete;  turn date red'));
    homeProject.addTask(new Task('Improve UI for task list portion (RH)'));
    homeProject.addTask(new Task('Include footer for made by'));
    myProjects.push(homeProject);
    projectListRender();
    taskListRender(homeProject);
}

export { myProjects, updateStorage, storageCheck };