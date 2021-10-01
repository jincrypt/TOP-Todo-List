import { toggleProjectView, toggleTaskForm, buttonSubmit } from './functions.js';
// event listeners

const projectButtonEvent = () => {
    document.querySelector('#addProjectButton').addEventListener('click', (e) => {
        toggleProjectView();
    });
};

const taskButtonEvent = () => {
    document.querySelector('#addTaskButton').addEventListener('click', (e) => {
        toggleTaskForm();
    });
};

const acceptTaskEvent = () => {
    document.querySelector('#acceptTask').addEventListener('click', (e) => {
        if (document.querySelector('#taskName').value) {
            buttonSubmit();
            document.querySelector('form').reset();
        }    
    })
};

const cancelTaskEvent = () => {
    document.querySelector('#cancelTask').addEventListener('click', (e) => {
        document.querySelector('form').reset();
        toggleTaskForm();
    })
};

export { projectButtonEvent, taskButtonEvent, acceptTaskEvent, cancelTaskEvent }