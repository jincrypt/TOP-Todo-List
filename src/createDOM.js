const createMain = (() => {
    const mainElement = document.createElement('main');
   
    mainElement.style = "display: flex; flex-wrap: nowrap; height: 100vh; height: -webkit-fill-available; max-height: 100vh; overflow-x: auto; overflow-y: hidden;";
    
    document.querySelector('body').prepend(mainElement);
})();

const createSideBar = (() => {
    const container = document.createElement('div');
    const titleBlock = document.createElement('div');
    const text = document.createElement('span');

    container.classList = "d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"; 
    titleBlock.classList = "d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none";
    text.classList = "fs-4";

    container.style = "width: 280px;";
    container.id = "sideBar";
    text.innerHTML = "To-Do List";

    titleBlock.appendChild(text);
    container.append(titleBlock, document.createElement('hr'));
     
    document.querySelector('main').append(container);
})();

const createProjectList = (() => {
    const ul = document.createElement('ul');
    
    ul.classList = 'nav nav-pills flex-column mb-auto';
    
    document.querySelector('#sideBar').append(ul);
})();

const createListContainer = (() => {
    let container = document.createElement('div');
    
    container.classList = "list-group";
    container.id = 'List-Container';
    
    document.querySelector('main').appendChild(container);
})();

// export { createMain }