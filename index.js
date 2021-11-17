let inputEl = document.querySelector('#input');
let buttonEl = document.querySelector('button');
let outputEl = document.querySelector('p')


//create an array variable 
//grap input data from user 
//write function 
//append data to array 
// display data





  
function filteredItems() {
  let num = inputEl.value
  
 if(num % 2 == 0) {
   return num
 }
 
   document.querySelector('p').innerHTML = num
}
buttonEl.addEventListener("click", filteredItems)

console.log(filteredItems())
     
      
  

  

 
  
  
 

  



