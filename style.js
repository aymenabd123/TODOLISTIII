const button = document.querySelector("button")
console.log(button)



const container = document.getElementById("container")
console.log(container);

const input = document.querySelector("input")
console.log(input);


container.addEventListener("click",
(eo) => {
    if (eo.target.className==" trash fa-solid fa-trash-can icon") {
        
        eo.target.parentElement.parentElement.parentElement.remove()



    }

    else if (eo.target.className==" face fa-regular fa-face-frown icon") {
        eo.target.style.display = "none"

        const heart = `<i class=" heart fa-solid fa-heart"></i>`
     
eo.target.parentElement.parentElement.parentElement.getElementsByClassName("text")[0].classList.add("finish")


         eo.target.parentElement.innerHTML = heart



    }
else if (eo.target.className==" heart fa-solid fa-heart") {
    eo.target.parentElement.parentElement.parentElement.getElementsByClassName("text")[0].classList.remove("finish")
   eo.target.style.display = "none"




   const add = `
   <i class=" face fa-regular fa-face-frown icon"></i>
   `
eo.target.parentElement.innerHTML = add

    
}

else if (eo.target.classList=="star fa-solid fa-star icon") {
    eo.target.classList.add("orange")
    container.prepend(eo.target.parentElement.parentElement)
}
else if (eo.target.classList=="star fa-solid fa-star icon orange") {
    eo.target.classList.remove("orange")
}




})










































button.addEventListener("click",
(eo) => {
    eo.preventDefault()
    const task = `   <div class="task">
    <span><i class="star fa-solid fa-star icon"></i></span>
    <p class="text" > ${input.value} </p>

     <div>
        <span>   <i class=" trash fa-solid fa-trash-can icon"></i> </span> 
        
        <span>  <i class=" face fa-regular fa-face-frown icon"></i></span>
     </div>



</div> `

if(input.value.trim() === ""){
    alert("write somthing")
} 
else {
    container.innerHTML += task
}




})



























