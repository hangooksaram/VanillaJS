const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    /*const hasClass = title.classList.contains(CLICKED_CLASS);
    if(!hasClass){
        title.classList.add(CLICKED_CLASS);
    }
    else {
        title.classList.remove(CLICKED_CLASS);
    }*/
    title.classList.toggle(CLICKED_CLASS);
}
 
function init(){
    title.addEventListener("click", handleClick)
}

init();

/*
const age = prompt("how old r u?")

if (age > 18){
    content.innerHTML = "u r adult"
}
else content.innerHTML = "u r kid"
*/
