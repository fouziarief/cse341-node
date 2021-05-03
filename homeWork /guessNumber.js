// guess the number 
//declare the variables

let form=document.querySelector('#form')

let btn =document.querySelector('.game')
let msg =document.querySelector('.messg');


//add event

btn.addEventListener('click' ,sumbitDate)


function sumbitDate(e){
    let min= document.querySelector('#min').value
    let max= document.querySelector('#max').value
    if(!min || !max  || min>=max){
        updateDom("Enter the Value btwn 0 to 100" ,'red');
    }else{      
        numberGuessGame(min,max);
    }
}

function updateDom(value,color){
    msg.style.color =color;
  msg.textContent=value;
  e.preventDefault();
}

function numberGuessGame(min, max){
    let randomNum = randomNumber(min, max);
    let message = "Please enter a number between " + min + " and " + max + ".";

    do {
        let userGuess = prompt(message)
        (userGuess=== val)
        updateDom("Congrats","green");
    } while(false)
    console.log(randomNum)
}

function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
    e.preventDefault();
}
