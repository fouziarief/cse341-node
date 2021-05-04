// guess the number 
//declare the variables

let form=document.querySelector('#form')
let btn =document.querySelector('.game')
let msg =document.querySelector('.messg');


//add event

btn.addEventListener('click' ,sumbitDate)


function sumbitDate(e){
    let min= parseInt(document.querySelector('#min')).value
    let max= parseInt(document.querySelector('#max')).value
    if(!min || !max  || min>=max){
        updateDom("Enter the Value btwn 0 to 100" ,'red');
    }    
      numberGuessGame(min,max)
      e.preventDefault();
    }


function numberGuessGame(min, max){
   
    let message = "Please enter a number between " + min + " and " + max + ".";
        let userGuess = prompt(message)
      if  (userGuess=== val){
        updateDom("Congrats" ,"green");
    } else if (userGuess < val){
        updateDom("your guess is too low" , 'red')
    }
    if(userGuess>val){
        updateDom("your guess is too high" ,'red')
    }
console.log(userGuess)
}

let val = function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min+1) + min);
  
}
function updateDom(value,color){
    msg.style.color =color;
  msg.textContent=value;
 
}
