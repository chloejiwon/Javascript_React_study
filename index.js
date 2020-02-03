const title = document.querySelector("#title");

// JS listens to event ! 
const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
    // toggle is function.
    // if it is there remove. 
    // if it is not there, add. 
}

function init(){
    title.addEventListener("click",handleClick);
    
}
init();