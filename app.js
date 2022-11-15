let digitButton = document.querySelector('.digit') ; 

let addButton = document.querySelector('.add-btn') ; 

let subtractButton = document.querySelector('.subtract-btn') ; 

let equalButton = document.querySelector('.equal-btn') ; 

let clearButton = document.querySelector('.clear-btn') ; 

let screenWindow = document.querySelector('.screen') ; 

screenWindow.value = 0 ; 

let operators = {
    '+' : function (a,b) {return a + b}, 
}

// console.log(typeof(digitButton))

document.addEventListener('click', event => {
    let a ; 

    let b ; 

    var sign ; 
    
    
    if (event.target.className == 'digit'){
        if(screenWindow.value === "0"){
           screenWindow.value = `${event.target.innerHTML}` ; 
           
        }
        if (operators.key != ""){
            screenWindow.value = event.target.innerHTML ; 
            let b = screenWindow.value ; 
            console.log(b) ; 
        }
        
        else {
            String(screenWindow.value += event.target.innerHTML) ; 
        }
        
        console.log(`${event.target.innerHTML} was clicked`) ; 
    }
    if (event.target.className == 'add-btn'){
        if(screenWindow.value != ""){
             sign  = '+' ; 
            let a = screenWindow.value ; 
            a = parseInt(a); 

            console.log(`a = ${a}`) ; 
           
        }
        // console.log('Add button was clicked') ; 
    }
    
    if (event.target.className == 'equal-btn'){
        console.log(operators["+"](a,b)) ; 

        

        
        ; 
    }
    if (event.target.className == 'clear-btn'){
        screenWindow.value = 0 ; 
        console.log('Clearing screen...') ; 
    }
    
})