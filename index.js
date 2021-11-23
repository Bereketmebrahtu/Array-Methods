// The input should be given in the first input box as a string. The user should be able to enter numbers, separated by commas. In JavaScript, you'll convert this string to an array of numbers. 

// Based on which radio button is selected, choose which function to run. Pass an array as an argument to the particular function. 

// Finally, return the result from the function and display it on the page. 

// 5️⃣ Add CSS to give the user an intuitive experience

// 6️⃣ Think about and constrain what inputs can be given. The user may be inconsistent in the string they give, for example using spaces or not. How can we account for this, in JavaScript or HTML?


const inputEl = document.querySelector('#input');
const outputEl = document.querySelector('p')
const buttonEl = document.querySelector('button')
const inputText = inputEl.value

const myArray = [];
  
function filteredItems() {
  
  let filtered = inputText.split(',').filter(inputText => {
    if(inputText % 2 == 0) {
      return inputText
    }
    myArray.push(inputText)
    return myArray
  } )
         
  outputEl.innerHTML = myArray
    

    }
console.log(myArray)

  buttonEl.addEventListener('click', filteredItems)
filteredItems()

  
 
    
  
   
    
// buttonEl.addEventListener('click',() => {
//   let result = inputEl.split(',').forEach(values => {
//     return values.filter(value => {
//       return value % 2 ===0
//     })
//     return result
//   })
// })




  