let inputEl = document.querySelector('#input');
let buttonEl = document.querySelector('button');
let outputEl = document.querySelector('p')


//create an array variable 
//grap input data from user 
//write function 
//append data to array 
// display data
function outputter () {
  const myArray = []
  inputEl = Array.from(inputEl).value
  //console.log(input)
  const mappedItems = Array.prototype.map(inputEl => { 
    return inputEl.value   
  })
  filteredItems = mappedItems.filter(values => {
   values.forEach(value => {
    myArray.push(value)
         return myArray
   }) 
   
    })
    if(filteredItems) {
      outputEl.innerHTML = myArray
    }
    
}
  
  buttonEl.addEventListener("click", outputter)

//console.log(filteredItems)

  

  

 
  
  
 

  



