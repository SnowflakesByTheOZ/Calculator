let digitButton = document.querySelector('.digit') ; 

let addButton = document.querySelector('.add-btn') ; 

let subtractButton = document.querySelector('.subtract-btn') ; 

let equalButton = document.querySelector('.equal-btn') ; 

let clearButton = document.querySelector('.clear-btn') ; 

// console.log(typeof(digitButton))

document.addEventListener('click', event => {
    if (event.target.className == 'digit'){
        console.log(`${event.target.innerHTML} was clicked`) ; 
    }
    if (event.target.className == 'add-btn'){
        console.log('Add button was clicked') ; 
    }
    if (event.target.className == 'subtract-btn'){
        console.log('Subtract button was clicked') ; 
    }
    if (event.target.className == 'equal-btn'){
        console.log('Equal button was clicked') ; 
    }
    if (event.target.className == 'clear-btn'){
        console.log('Clear button was clicked') ; 
    }
    
})