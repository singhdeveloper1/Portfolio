let link1 =document.querySelector("#link1")
let link2 =document.querySelector("#link2")
let skills =document.querySelector("#skills")
let active = document.querySelector(".active-tab")
let education =document.querySelector("#education")
let tab = document.querySelector(".tab-titles")
let menu =document.querySelector(".fa-bars")
let ul =document.querySelector(".ul")
let cross= document.querySelector(".fa-xmark")

link1.addEventListener("click",()=>{
    
    education.style.display="none"
    active.style.display="flex"
    // tab.classList.remove("active")

    link2.style.color="#ababab"
    link1.style.color="rgb(44, 220, 167)"
   
    
})


link2.addEventListener("click",()=>{
    // link2.innerHTML = "hello"
    active.style.display="none"
    education.style.display="flex"
    // tab.classList.add("active")
    link1.style.color="#ababab"
    link2.style.color="rgb(44, 220, 167)"
    
})
menu.addEventListener("click",()=>{
    ul.style.right="0"
    

    

})
cross.addEventListener("click",()=>{
    ul.style.right="-50%"
})


