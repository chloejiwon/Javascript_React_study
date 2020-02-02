const title = document.querySelector("#title");

// JS listens to event ! 
const BASECOLOR = "rgb(52, 152, 219)";
const CHANGECOLOR = "#badc58";

function handleClick(){
    const currentColor = title.style.color;
    console.log(currentColor);
    if (currentColor == BASECOLOR)
        title.style.color = CHANGECOLOR; 
    else
        title.style.color = BASECOLOR; 
}
function init(){
    title.style.color = BASECOLOR;
    title.addEventListener("click",handleClick);
    
}
init();