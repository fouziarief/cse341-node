// guess the number 

let input = prompt(" Guess Your Number (0-20)");
let number =Math.floor(Math.random()*20)

if(input=== null){
    
    alert(number + ' Your Guess right .')
}else if(input<number)
{
alert('Your Guess is low. ' + number + ' is right Number')
}
if(input>number)
{
    alert('Your Guess is high. ' + number +' is right Number')
}