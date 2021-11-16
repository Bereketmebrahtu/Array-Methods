let inputEl = document.querySelector('#input');
let buttonEl = document.querySelector('button');
let outputEl = document.querySelector('p')


//create an array variable 
//grap input data from user 
//write function 
//append data to array 
// display data




function filteredItems(arr){
  //const inputData = document.querySelector('#input');
  
       let myArray = []

for(let i=0; i< arr.length; i++) {
       
       if(arr % 2 === 0) {
        
         myArray.push(arr[i])
         console.log(myArray)
       }
       
        
       
      }
            
           
 }

 
  
  
 

  }
outputEl.innerHTML = myArray.filter(filteredItems)


console.log(filteredItems([1,2,3,4]))