
//without function

// let pharse = prompt("enter your phase")
// let count = prompt("enter how many times u want to print")
// for(i =1 ;i<=count ;i++)
// {
//     console.log(pharse)
// }

//with function

function getMotto(){
    return  prompt("What is your Favorite Phrase")
    
}
 function getCount()
 {
    return parseFloat(prompt("How Many time you want to see your Phrases"));
  
 }
function playAgain()
{
    let again = prompt("Do you like play again?")
    if (again ===  'y')
    {
        playAgain()

    }
    else{
        prompt("thanks for playing")
    }

}
function printMotto(){
    let z= 1;
    while (z<=times) {
        console.log(pharse);
        z++
    }
}
function displayMotto(){
    for(i=1;i<=times;i++){
        console.log(i +": " +pharse)
    }
}

function playGame(){
let pharse = getMotto();
let times = getCount();
 let print=printMotto();
}
let pharse =" ";
let times =" ";
playAgain();
 displayMotto();



