function addBook(){
    let book = bookList.bookName.value
    let li =document.createElement('li');
    li.appendChild(document.createTextNode(bookList.bookName.value))
    document.getElementById("list").appendChild('li')

    bookList.bookName.value =""
}

//create a table

let tr =document.createElement("tr")
let td =document.createElement("td")
let td1 = document.createTextNode(book)


