const btnEl=document.querySelector(".btn");
const bodyEl=document.querySelector("body");

let colors=["red","yellow","green","blue"];
let count=0;
btnEl.addEventListener("click",addColors);
function addColors(){
    bodyEl.style.background=colors[count%colors.length];
    count++;
}