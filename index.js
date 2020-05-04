const title = document.getElementById("title")
const content = document.getElementById("content")
//title.style.color = "red"

function handleClick(){
    title.style.color = 'red'
}

title.addEventListener("click", handleClick)

const age = prompt("how old r u?")

if (age > 18){
    content.innerHTML = "u r adult"
}
else content.innerHTML = "u r kid"