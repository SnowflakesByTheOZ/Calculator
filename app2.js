let oper = {
    '+' : function (a,b) {return a + b ; }, 


    '-': function (a,b) {return a - b },  
}


let firstNum = window.prompt('Enter number') ;
firstNum = parseInt(firstNum) ;  
let operator = window.prompt('Enter operator') ; 
let secondNum = window.prompt('Enter second number'); 
secondNum = parseInt(secondNum) ; 



// let firstNum = 8 ; 
// let secondNum = 9 ; 
// let operator = '+' ; 




result = (oper[operator](firstNum,secondNum)) ; 
console.log(result) ; 