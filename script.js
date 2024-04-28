// Script for navigation bar

let bar=document.querySelector("#bar");
let navBar =document.querySelector(".nav-bar-list")

// console.log(navBar);

if(bar){
  bar.addEventListener("click",()=>{
    navBar.classList.add("active")
  })
};
