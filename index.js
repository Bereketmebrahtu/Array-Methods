let inputEl = document.querySelector('#input');
let buttonEl = document.querySelector('button');
let outputEl = document.querySelector('p')



function filteredItems() { 
 const items = inputEl.filter(value => value /2)

console.log(items)
}

outputEl.addEventListener("click", filteredItems)
