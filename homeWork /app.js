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
imgList.appendChild(newList)

        //create a img attribute
const link = document.createElement('img')
link.classList.add('picture')
link.setAttribute("src" ,input.value)
  link.setAttribute("width", "304");
  link.setAttribute("height", "228");
  newList.appendChild(link)

//number of images

  let count = document.getElementsByClassName('imgClass')
  let item=count.length
  val.innerText=item

        // clear text
input.value =" ";

        //delete image button
    const newDel = document.createElement('button')
    newDel.classList.add('remove')
    newDel.innerText='Remove'
    newList.appendChild(newDel)
    e.preventDefault();
}
//delete function
function delList(e){
    const item =e.target;
    if(item.classList[0] === 'remove'){
        const newList = item.parentElement ;
        newList.remove();
        
    }
}

