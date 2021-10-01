const createButton = (name) => {
    let button = document.createElement('button');
    button.classList = "btn btn-sm";
    button.type = "button";
    button.innerHTML = name;
    return button;
}

const createAddSVG = (color) => {
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    let pathA = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    let pathB = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    svg.setAttribute('width', '16');
    svg.setAttribute('height', '16');
    svg.setAttribute('fill', color);
    pathA.setAttributeNS(null, 'd', "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z");
    pathB.setAttributeNS(null, 'd', "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z");

    svg.classList = "bi bi-plus-square";

    svg.append(pathA, pathB);

    return svg
}

export { createButton, createAddSVG }