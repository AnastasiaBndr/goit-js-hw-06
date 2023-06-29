function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const color = document.querySelector("body");
const button = document.querySelector(".change-color");
const nameColor = document.querySelector(".color");
button.addEventListener("click", onClick);

function onClick(){

  const hexColor = getRandomHexColor();
  color.style.backgroundColor = `${hexColor}`; 

  nameColor.textContent=`${hexColor}`;

}
