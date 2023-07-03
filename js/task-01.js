const aa = document.getElementsByClassName('item');

const arr = [...aa];

console.log(`Number of categories: ${aa.length}`)

arr.forEach(element => {
    console.dir(`Category: ${element.firstElementChild.textContent}`);
    console.dir(`Length: ${element.lastElementChild.children.length}`);
    
});
