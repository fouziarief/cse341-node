function changeBg(){
    document.body.style.backgroundColor ="#f5f2"
    
}
function time(){
    let date = new Date()
    let time = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    document.getElementById('task').innerHTML = (time + min + sec )
    

}