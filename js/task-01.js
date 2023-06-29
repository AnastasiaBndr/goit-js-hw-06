const aa = document.getElementsByClassName('item');

const arr = [...aa];

console.log(`Number of categories: ${arr.length}`)

arr.forEach(element => {
    console.dir(`Category: ${element.querySelector("h2").textContent}`);
    console.dir(` Elements: ${element.getElementsByTagName("li").length}`);
    
});
