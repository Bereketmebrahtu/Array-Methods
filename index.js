let inputEl = document.querySelector('#input');
let buttonEl = document.querySelector('button');
let outputEl = document.querySelector('p')


const myArray =[];
function filteredItems(str) { 
  //const inputText = document.querySelector('#input').value;
     myArray.push(str)
     //console.log(myArray)

     let inputVal = "";
     for(let i =0; i< myArray.length; i++) {
       inputVal += myArray[i]
       
     } 
        inputVal.split(' ')
//document.querySelector('#input').innerHTML = inputVal

}
//console.log(filteredItems(str))
outputEl.addEventListener("click", filteredItems)
console.log(filteredItems("1,2,3"))       