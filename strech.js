//calculating offer
let amount = prompt('Enter Your amount ');
let percent = 500;
let totalAmount = (amount * 100 )/percent;
if (amount >= 2000 ) {
let offer = prompt ('You are  Eligible for this Offer.Do you like to continue')
}
else if ( offer === "y" || offer === "Y" ) {
    // totalAmount = parseFloat(totalAmount);

    alert('you got 5% offer and Total Value is'+ totalAmount)
}
else if (offer === "n"|| offer === "N" )
{
    alert('Better luck next time.Thank you');
}
else{
    alert('sorry your not eligible for this offer');
}

 
    

