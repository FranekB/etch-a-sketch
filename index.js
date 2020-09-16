//Make 16 x 16 div

for(let i = 0; i < 256; i++){
  let div = document.createElement('div');
  let container = document.querySelector('#game-container');
  let side2 = container.clientWidth;

  div.style.width = side2 / 16 + "px";
  div.style.height = side2 / 16 + "px";
  div.style.boxSizing = "border-box";
  div.style.border = "1px dotted grey";

  container.appendChild(div);
}
