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
//create a li  class and image attributes for image list

const newList =document.createElement('li')
newList.classList.add('imgClass')
newList.innerText=input.value
imgList.appendChild(newList)

//create a img attribute
const link = document.createElement('img')
link.classList.add('picture')
link.setAttribute("src" ,input.value)
  link.setAttribute("width", "304");
  link.setAttribute("height", "228");
  newList.appendChild(link)

// clear text
input.value =" "

// Number of images

function getValue()
{
let count = imgList.length+1
val.innerText=count;

console.log(count)
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
