let largeImage=document.querySelector(".large-image")
let smallImg =document.querySelectorAll(".small-img")

// console.log(navBar);

smallImg[0].addEventListener("click", ()=>{
    largeImage.src =smallImg[0].src
})
smallImg[1].addEventListener("click", ()=>{
    largeImage.src =smallImg[1].src
})

smallImg[2].addEventListener("click", ()=>{
    largeImage.src =smallImg[2].src
})
smallImg[3].addEventListener("click", ()=>{
    largeImage.src =smallImg[3].src
})



