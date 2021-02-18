const title = document.querySelector("#tit");

const CLICKED_CLASS = "clicked";

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
}


function init() {
    title.addEventListener("click", handleClick);
}
init();

// Resize listenere
// function handleResize(event){
//     console.log("this site has been resized");
//     console.log(event);
// }
// window.addEventListener("resize",handleResize);
