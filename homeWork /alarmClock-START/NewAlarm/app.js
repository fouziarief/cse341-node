//declare variable
const box = document.querySelector('.container')
const timer= document.getElementById('time');
const btn =document.getElementById('alarm');
const table=document.getElementById('clockList');
const hrs=document.getElementById('hours');
const min=document.getElementById('mins');
const sec=document.getElementById('sec');

// display Current time 

 function showTime(){
    let displayTime = new Date();
    let currentTime =displayTime.toLocaleTimeString();
    timer.textContent=currentTime;
    setTimeout(showTime,1000)
}
showTime()

//setting up alarm values for hrs ,mins,secs;
const hrVal=document.createElement('option');
    hrs.appendChild(hrVal);
    let setHr = 12;
    
    for(let i=0; i<= setHr;i++)
   {
    hrVal.textContent=i;
    }
  
    const minVal=document.createElement('option');
    min.appendChild(minVal);

    let setMin = 59;
   
    for(let i=1; i<= setMin ;i++){
        
     minVal.textContent=i < 10 ? '0'+i :i;
    
    }
    const secVal=document.createElement('option');
    sec.appendChild(secVal);
    let setSec = 59;
    for(let i=0;i <= setSec;i++){
        
        secVal.textContent=i < 10 ? '0'+i :i;
    
    }

    //create a image
    //create a class for image.
     const img = document.createElement('img')
     img.classList.add('clkImage');
     img.setAttribute('src',"wake-up.jpg");
     img.setAttribute("width", "400");
     img.setAttribute("height", "300");
     box.appendChild(img);
     box.insertBefore(img,document.querySelector('#alarmForm'))

     //create a event to set alarm
     btn.addEventListener('click',setAlarm)

     function setAlarm(e){
        const title = document.querySelector('#title').value;
        // validate title
        if(title === null || title === title){
            document.createTextNode("Enter Unique Name")
    
        }else{
        const list= document.querySelector('#alarmList')
        let active= (hrVal.value + ' : ' + minVal.value) ;
        const newRow=document.createElement('tr');
        newRow.innerHTML=`
        <td>${title}</td>
        <td>${active}</td>
        <td><a href="#" class="delete">X<a></td>`
    list.appendChild(newRow)
        }
    e.preventDefault()
        }
    
        //clear values
        // function clear()
        // {
        //     document.querySelector('#title').value=" "  
        // }
        // clear();
   
     
   
    //delete alaram

//






