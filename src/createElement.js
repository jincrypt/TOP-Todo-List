const createButton = (name) => {
  let button = document.createElement("button");
  button.classList = "btn btn-sm";
  button.type = "button";
  button.innerHTML = name;
  return button;
};

const createAddSVG = (color) => {
  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  let pathA = document.createElementNS("http://www.w3.org/2000/svg", "path");
  let pathB = document.createElementNS("http://www.w3.org/2000/svg", "path");

  svg.setAttribute("width", "16");
  svg.setAttribute("height", "16");
  svg.setAttribute("fill", color);
  pathA.setAttributeNS(
    null,
    "d",
    "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
  );
  pathB.setAttributeNS(
    null,
    "d",
    "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
  );

  svg.classList = "bi bi-plus-square";

  svg.append(pathA, pathB);

  return svg;
};

const createTrashCan = () => {
  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  let pathA = document.createElementNS("http://www.w3.org/2000/svg", "path");

  svg.setAttribute("width", "16");
  svg.setAttribute("height", "16");
  svg.setAttribute("viewBox", "0 0 16 16");

  pathA.setAttributeNS(
    null,
    "d",
    "M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"
  );
  pathA.setAttributeNS(null, "fill-rule", "evenodd");

  svg.append(pathA);

  return svg;
};

export { createButton, createAddSVG, createTrashCan };
