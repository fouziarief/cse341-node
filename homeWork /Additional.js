//calculating offer
let amount = prompt('Enter Your amount ');
let percent = 500;
let totalAmount = (amount * 100 )/percent;

let offer;

if (amount >= 200 ) {
offer = prompt ('You are  Eligible for this Offer.Do you like to continue');

}
if ( offer === "y" || offer === "Y" ) {
    // totalAmount = parseFloat(totalAmount);
    alert('You got 5% offer and Total Value is '+ totalAmount)
   
}
else if ( offer === "n"|| offer === "N" )
{
    alert('Better luck next time.Thank you');
}
else{
    alert('Sorry Your Not Eligible For This Offer');
}
console.log(totalAmount)
 
    

