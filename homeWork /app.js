const button = document.getElementById('image')
const imgList = document.querySelector('.list')
const input = document.querySelector('#enter')

//add event
button.addEventListener('click',addList)

//add function

function addList(e){
//create a li  class for image list


const newList =document.createElement('li')
newList.classList.add('imgClass')
//create a img attribute

const link = document.createElement('img src')

newList.appendChild(link)
newList.innerText=input.value

// newDiv.appendChild(newList)
imgList.appendChild(newList)
input.value =" "

console.log(newList)
e.preventDefault();
}
