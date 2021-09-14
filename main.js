/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLEsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qcm9qZWN0LVRvRG8tTGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygndGVzdCcpXG5cbmxldCBteVRhc2tzID0gW107XG5sZXQgaW5kZXggPSAwO1xuXG5cbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH1cblxuICAgIGFkZFRhc2sodGFzaykge1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gICAgfTtcbn1cblxuY2xhc3MgVGFzayB7IFxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNldFRhc2sobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIGdldFRhc2soKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxufVxuXG5sZXQgYSA9IG5ldyBUYXNrKCd0ZXN0MicpO1xubGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCgndGVzdHByb2plY3QnKTtcbm5ld1Byb2plY3QuYWRkVGFzayhhKTtcbmNvbnNvbGUubG9nKG5ld1Byb2plY3QudGFza3NbMF0uY29tcGxldGUpO1xuXG5cbihmdW5jdGlvbiBkb20odGFzaykge1xuICAgIGxldCBuYW1lID0gdGFzay5nZXRUYXNrKCk7XG4gICAgbGV0IHN0YXR1cyA9IHRhc2suY29tcGxldGU7XG5cblxuXG4gICAgY29uc3Qgb3V0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEuaW5uZXJUZXh0ID0gbmFtZTtcblxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC5pbm5lclRleHQgPSBzdGF0dXM7XG5cbiAgICBvdXRlckRpdi5hcHBlbmRDaGlsZChoMSk7XG4gICAgb3V0ZXJEaXYuYXBwZW5kQ2hpbGQocCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKG91dGVyRGl2KTtcbn0pKGEpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==