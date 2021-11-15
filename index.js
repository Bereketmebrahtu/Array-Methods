let inputEl = document.querySelector('#input');
let buttonEl = document.querySelector('button');
let outputEl = document.querySelector('p')


//create an array variable 
//grap input data from user 
//write function 
//append data to array 
// display data

let myArray = [];

function filteredItems(str){
  //const inputData = document.querySelector('#input').value
    myArray.push(str)
    console.log(myArray)
    inputVal = ""

    for(let i = 0; i< myArray.length; i++) {
          inputVal = inputVal + myArray[i]
         

    }
   
  console.log(inputVal)
} 

filteredItems("1,2,3")