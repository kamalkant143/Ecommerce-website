// ===bar =
let bar=document.querySelector("#bar");
let navBar =document.querySelector(".nav-bar-list")
let close=document.querySelector("#close")
let image=document.querySelector(".main-box")


if(bar){
  bar.addEventListener("click",()=>{
    navBar.classList.add("active")
  })
};

if(close){
    close.addEventListener("click",()=>{
      navBar.classList.remove("active")
    })
  };


  image.addEventListener("click",()=>{
   window.location.href="sproduct.html"
  })
