const container = document.querySelector("#container");

for (let j = 0; j < 16; j++) {
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("row-container");
    rowContainer.style.display = "block"; 
   // rowContainer.style.flexWrap = "wrap";

for (let i = 0; i < 16; i++) {
    const xboxes = document.createElement("div");
    xboxes.classList.add("xboxes");
    xboxes.setAttribute("style", "background-color: blue; width: 50px; height: 50px; margin: 5px; display: flex; justify-content: center; align-items: center; ");
    rowContainer.appendChild(xboxes);
}
container.appendChild(rowContainer);

}
