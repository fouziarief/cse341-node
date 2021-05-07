//declare the variable

const form = document.getElementById('form'),
       btn = document.getElementById('button'),
     messg = document.querySelector('.messg'),
     reloadBTN=document.querySelector('#Reload')

// add event 
 
btn.addEventListener('click',sumbitData);
reloadBTN.addEventListener('click',reLoad);

function sumbitData(e)
{
    e.preventDefault();  
    let amount =parseFloat( document.getElementById('balance').value),
        rate = parseFloat(document.getElementById('interst').value),
        month =parseFloat (document.getElementById('duration').value);
        
    // document.getElementById('balance').value="";

    if(!amount || amount < 0 || !rate || rate < 0 || !month || month< 0 ){
       updateDom(" Enter The Correct Values ",'white') ;
       messg.style.background ="rgb(255, 0, 0)"
       setTimeout(clear ,3000)
      
       
    }else{
       let futureValue= computeFutureValue(amount,rate,month)
        updateDom("The Value of Your Investment is $ " + futureValue ,"green");
        messg.style.background ="rgb(152, 236, 152)" ;


}}

function computeFutureValue(amount,rate,month)
{
    let mRate = rate / 12;

    for (let time = 1; time <= month; time++) 
    {
        let int = amount * mRate;
        int = Math.round(int* 100) / 100;
        amount += int;
    }
    amount = parseFloat(amount.toFixed(2));
    return amount.toLocaleString(); 
}

function updateDom(value,color){
    messg.style.color =color;
    messg.textContent=value;   
}
function clear(){
    document.querySelector('.messg').remove();
}

function reLoad(){
    window.location.reload();
}

 


