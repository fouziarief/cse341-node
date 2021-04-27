//console.log('hello world');
// let greet = 'Hello World';
// console.log(greet);
//  let x=31;
//  let y = 50;

//  console.log(x>=y);


let moodOpt1 = 'happy';
let moodOpt2 ='sad';
let userMood= prompt("User Mood is " + moodOpt1  + " or " + moodOpt2)
if(userMood === " "){
    alert('Please enter your mood Happy or Sad')
}
else if (moodOpt1 === userMood ){
    alert('Will go for drive')
}else{
   alert('Will go for ice cream')  
}



