const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const startedFile = document.querySelector("#ingredients");

ingredients.forEach(element => {
  
  const doc = document.createElement("li");
  doc.textContent=element;
  doc.className="item";
  startedFile.append(doc);

  
});


