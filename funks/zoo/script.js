// var point = document.getElementById("point")
// var pointAntal = 0;
// point.innerText += pointAntal

// document.getElementById("leaf").addEventListener("drop", dropHandler)

// function test(){
//     alert("FUCKFUCKFUCKFUCK")
// }
// function dragHandler (event) {
//      event.target.style.left = event.x + "px"
//       event.target.style.top = event.y + "px"
//     }
// function dropHandler (event){
//     alert("FUCKFUCKFUCK")
// }

// const drag =document.querySelector(".drop")

// const drop =document.querySelector(".drop")

// drag.addEventListener("dragend", dragHandler)

// drop.addEventListener("drop", dropHandler)
// drop.addEventListener("dragover", dragOverHandler)


// function dragHandler(event){
//     // alert("Dette er en alert")
//     event.target.style.left=event.x + "px"
//     event.target.style.top=event.y + "px"
// }
// function dropHandler(event){
//     alert("hurra!")
// }
// function dragOverHandler(event){
//     event.preventDefault()
// }


const drag =document.querySelector("#tortoise")

const drop = document.querySelector("#tortoise")

drag.addEventListener("dragend", dragHandler)

drop.addEventListener("drop", dropHandler)
drop.addEventListener("dragover", dragOverHandeler)

function dragHandler(event) {
    alert("Det virker!")
}