function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const boxes = document.getElementById("boxes");

create.addEventListener("click", onClick);
destroy.addEventListener("click", onClickDestr);

function onClick(){
  const amount = document.querySelector("input").value;
  createBoxes(amount);
}

function createBoxes(amount){
  boxes.innerHTML="";
    let temp = 0;
    for (let i = 0; i <= amount; i++) {
      let markup = document.createElement("div");
      markup.className="div-task-10";
      markup.style.width=`${markup.style.width+temp}px`;
      markup.style.height=`${markup.style.height+temp}px`;
      markup.style.backgroundColor=`${getRandomHexColor()}`;
      markup.style.margin="10px"; 
       boxes.append(markup);
       temp+=10;
    }

}

function onClickDestr(){
  boxes.innerHTML="";
}

