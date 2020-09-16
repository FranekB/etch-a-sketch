//Make 16 x 16 div
const container = document.querySelector('#game-container');
const side = container.clientWidth;


for(let i = 0; i < 256; i++){
  let div = document.createElement('div');

  //add styling
  div.style.width = side / 16 + "px";
  div.style.height = side / 16 + "px";
  div.style.boxSizing = "border-box";
  div.style.border = "1px dotted grey";
  container.appendChild(div);
}


//Add listeners for hovering over cells of a Grid
let cells = document.querySelectorAll("#game-container > div")
cells.forEach(cell => cell.addEventListener("mouseover", changeColor))


//Give ability to change grid resolution
let newGrid = document.getElementById("new-grid")
newGrid.addEventListener("click", setNewGrid)


function changeColor(e){
  e.target.style.backgroundColor = "black";
}

function setNewGrid(){
  let resolution = +prompt("What resolution of a grid you want to have?");
  //If user enter not a number give alert and don't change anything
  if(isNaN(resolution)){
    alert("You must enter a number!");
    return
  }
  //remove old grid
  cells.forEach(cell => {
    cell.style.width = side / resolution + "px";
    cell.style.height = side / resolution + "px";
  })
}
