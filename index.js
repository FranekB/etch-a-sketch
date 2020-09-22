


//BUTTONS//


//Give ability to change grid resolution
let newGridButton = document.getElementById("new-grid");
newGridButton.addEventListener("click", changeGridSize);

//Give ability to reset the grid(clearing all spots)
let resetGridButton = document.getElementById("reset");
resetGridButton.addEventListener("click", resetGrid)

//Reset grid
function resetGrid(){
  let cells = document.querySelectorAll("#game-container > div");
  cells.forEach(cell => {
    cell.style.backgroundColor = "#D6D3F0";
    cell.classList.remove("colored");
  })
}

//Setting mode to Black
let blackModeButton = document.getElementById("black");
blackModeButton.addEventListener("click", () =>{
  mode = "black";
})

//setting mode to Rainbow
let rainbowModeButton = document.getElementById("rainbow");
rainbowModeButton.addEventListener("click", () =>{
  mode = "rainbow";
})



//removes old grid and calls a function for a new grid
function changeGridSize(){
  let resolution = +prompt("What resolution of a grid you want to have?(Choose value between 1 and 100)");
  let cells = document.querySelectorAll("#game-container > div")
  //If user enter not a number give alert and don't change anything
  if(isNaN(resolution)){
    alert("You must enter a number!");
    return
  }
  else if(resolution == ""){
    alert("You must enter some value!");
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


//creates a new grid
function createNewGrid(cellsWidth){
  const container = document.querySelector('#game-container');
  const side = container.clientWidth;
  for(let i = 0; i < cellsWidth * cellsWidth; i++){
    let div = document.createElement('div');

    //add styling
    div.style.width = side / cellsWidth + "px";
    div.style.height = side / cellsWidth + "px";
    div.style.boxSizing = "border-box";
    div.style.border = "1px dotted grey";
    div.style.backgroundColor = "#D6D3F0";
    container.appendChild(div);
    container.style.gridTemplate = `repeat(${cellsWidth}, 1fr) / repeat(${cellsWidth}, 1fr)`;
  }
  let cells = document.querySelectorAll("#game-container > div");
  cells.forEach(cell => cell.addEventListener("mouseover", changeColor));
}






//CHANGING COLORS

//changes color of a cell after hover
function changeColor(e){
  //if color is already colored do nothing
  if(e.target.classList[0] == "colored"){
    return
  }

  else{

    if(mode == "black"){
      e.target.style.backgroundColor = "black";
      e.target.classList.add('colored')
    }

    else if(mode == "rainbow"){
      let red = Math.random() * 256;
      let green = Math.random() * 256;
      let blue = Math.random() * 256;
      e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      e.target.classList.add('colored')
    }
  }
}




//STARTING GRID
createNewGrid(16)
let mode = "black"
