const form =document.querySelector('#imgForm')
const button = document.getElementById('image')
const imgList = document.querySelector('.list')
const input = document.querySelector('#enter')
const val = document.getElementById('num')



//add event
button.addEventListener('click',addList)
imgList.addEventListener('click' ,delList)

//add function

function addList(e){
//create a li  class for image list


const newList =document.createElement('li')
newList.classList.add('imgClass')
//create a img attribute

const link = document.createElement('img')
link.setAttribute("src" ,input);
  link.setAttribute("width", "304");
  link.setAttribute("height", "228");

newList.appendChild(link)
newList.innerText=input.value

// newDiv.appendChild(newList)
imgList.appendChild(newList)
input.value =" "

function getValue()
{
let value = newList.length-1
val.innerText=value
console.log(value)
}

e.preventDefault();

//delete image button

    const newDel = document.createElement('button')
    newDel.classList.add('remove')
    newDel.innerText='Remove'
    newList.appendChild(newDel)
}

//delete function
function delList(e){
    const item =e.target;
    if(item.classList[0] === 'remove'){
        const newList = item.parentElement ;
        newList.remove();
    }
}