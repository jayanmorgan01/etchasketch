const container = document.querySelector("#container");
let gridSize = 20;


document.getElementById("form").onsubmit = changeGridSize;

function changeGridSize(e) {
    e.preventDefault();
    let size = e.target.gridsize.value;
    gridSize = size;
    console.log("Gridsize is: " +gridSize);
   
    container.innerHTML = '';

    generateGrid(gridSize);
}

console.log("Gridsize is: " +gridSize);


function generateGrid(gridSize){
for (let j = 0; j < gridSize; j++) {
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("row-container");
    rowContainer.style.display = "block"; 
   // rowContainer.style.flexWrap = "wrap";

for (let i = 0; i < gridSize; i++) {
    const xboxes = document.createElement("div");
    xboxes.classList.add("xboxes");
    xboxes.setAttribute("style", "background-color: blue; width: 50px; height: 50px; margin: 5px; display: flex; justify-content: center; align-items: center; ");
    xboxes.addEventListener("mouseover", function(e){
        e.target.style.background = "green";
    })
    rowContainer.appendChild(xboxes);
}
container.appendChild(rowContainer);

}
}

generateGrid(gridSize);

