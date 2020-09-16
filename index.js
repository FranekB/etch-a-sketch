//Make 16 x 16 div
const container = document.querySelector('#game-container');
const side = container.clientWidth;

//Give ability to change grid resolution
let newGrid = document.getElementById("new-grid")
newGrid.addEventListener("click", setNewGrid)


function createNewGrid(cellsWidth){
  for(let i = 0; i < cellsWidth * cellsWidth; i++){
    let div = document.createElement('div');

    //add styling
    div.style.width = side / cellsWidth + "px";
    div.style.height = side / cellsWidth + "px";
    div.style.boxSizing = "border-box";
    div.style.border = "1px dotted grey";
    container.appendChild(div);
    container.style.gridTemplate = `repeat(${cellsWidth}, 1fr) / repeat(${cellsWidth}, 1fr)`;
  }
  let cells = document.querySelectorAll("#game-container > div")
  cells.forEach(cell => cell.addEventListener("mouseover", changeColor))
}


function changeColor(e){
  e.target.style.backgroundColor = "black";
}

function setNewGrid(){
  let resolution = +prompt("What resolution of a grid you want to have?(Choose value between 1 and 100)");
  let cells = document.querySelectorAll("#game-container > div")
  //If user enter not a number give alert and don't change anything
  if(isNaN(resolution)){
    alert("You must enter a number!");
    return
  }
  else if(resolution > 100){
    alert("Number is too big! Choose number between 1 - 100.")
    return
  }
  //change width and height of cells + grid-template-rows
  cells.forEach(cells => cells.remove())
  createNewGrid(resolution)

}




//create first gridTemplate
createNewGrid(16)
