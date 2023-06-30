const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const startedFile = document.querySelector("#ingredients");


const newArr=ingredients.map(element => {
  
  const doc = document.createElement("li");
  doc.textContent=element;
  doc.className="item";

  return doc.outerHTML;

});

startedFile.innerHTML+=newArr.join("\n");
