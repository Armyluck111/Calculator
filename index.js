let btns = document.querySelectorAll(".rowsbtns");
let screen = document.querySelector(".screen");
let clearbtn = document.querySelector(".clear");
let removelastbtn=document.querySelector(".removelastletter");
let equalbtn=document.querySelector(".equal")

btns.forEach((element) => {
    element.addEventListener("click", () => {
    // screen.innerHTML += element.innerHTML;
    screen.textContent+=element.textContent;
  });
});
clearbtn.addEventListener("click", () => {
  screen.innerHTML = "";
});

removelastbtn.addEventListener('click',()=>{
  screen.textContent=screen.textContent.slice(0,screen.textContent.length-1)
})


equalbtn.addEventListener('click',()=>{
    //  بدل اي اكس ب ضرب
    screen.textContent=screen.textContent.replaceAll("X","*")
    screen.textContent=screen.textContent.replaceAll("^","**")
    screen.textContent=eval(screen.textContent)
})


