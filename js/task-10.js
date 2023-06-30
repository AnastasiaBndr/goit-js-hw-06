function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const boxes = document.getElementById("boxes");

const range = document.querySelector('input[type="number"]');
const min = Number(range.min);
const max = Number(range.max);
const step =10;

create.addEventListener("click", onClick);
destroy.addEventListener("click", onClickDestr);

function onClick(){
  const amount = document.querySelector("input").value;
  if(amount>=min && amount<=max)
    createBoxes(amount);
    else alert("В МЕЖАХ ВІД 1 ДО 100!");
}

function createBoxes(amount){
    let temp = 30;
    for (let i = 0; i < amount; i++) {
      let markup = document.createElement("div");
      markup.className="div-task-10";
        markup.style.width=`${markup.style.width+temp}px`;
      markup.style.height=`${markup.style.height+temp}px`;
      markup.style.backgroundColor=`${getRandomHexColor()}`;
      markup.style.margin="1px"; 
       boxes.append(markup);
       temp+=step;
    }

}

function onClickDestr(){
  boxes.innerHTML="";
  range.value="";
}

