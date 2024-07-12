const btnEl=document.querySelector(".btn");
const inputEl=document.querySelector("input");
const errorEl=document.querySelector(".error");
const massageEl=document.querySelector(".message");

btnEl.addEventListener("click",displayMassage);

function displayMassage(){
    if(inputEl.value)
    {
        massageEl.textContent=inputEl.value;
        inputEl.value="";
    }
    else{
        errorEl.style.display = "block";
        setInterval(() => {
         errorEl.style.display = "none";
        }, 5000);
    }
}