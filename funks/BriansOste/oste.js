// const CHEESES = [
//     {
//         name: "Feta",
//         price: "14.95",
//         descriptiop: "creamy"
//     },

//     {
//         name: "Gauda",
//         price: "29.99",
//         descriptiop: "bla bla"
//     },
  

// ]

// CHEESES.forEach(function (element) {
//     const ARTICLE =document.createElement("article")
//     ARTICLE.className = "cheeseCard"
//     ARTICLE.innerHTML +=`<p class="cheesCard__overskrift"> ${element.name}</p>`
//     ARTICLE.innerHTML +=`<p class="cheesCard__pris"> kr ${element.price}</p>`//`template string//
//     document.body.append(ARTICLE)

// })

// function hello(name) {
//     console.log("Hello", name)
// }
// hello("Brian")


// function htlmBuilder(text, moretext){
//     const ARTICLE= document.createElement("text", moretext)
//     // ARTICLE.className ="productCard" (hvis man ønsker at tilføje en class til en variabel)
//     ARTICLE.innerHTML=`<p>${text + moretext} </p>`//skla "text og "moretext være på hver sin linje laves dette i to forskellige p-tags (`<p>${text}</p><p>${moretext}</p>`)
//     return ARTICLE
// }

// document.body.append(htlmBuilder("Det er onsdag", " og i morgen er det torsdag", "og dagen efter det er det fredag!!"))


// const container = document.querySelector(".container")
// container.addEventListener("clik", function(Event){
//     alert("hej")
//     console.log(Event.target)//(Event.target) er en 
// })

// const heading=document.querySelector("heading")

// heading.addEventListener("mouseover", heading)

// function heading(){
//     .heading.style.backgroundColor="red"
// }

const drag =document.querySelector(".drag")

const drop =document.querySelector(".drop")

drag.addEventListener("dragend", dragHandler)

drop.addEventListener("drop", dropHandler)
drop.addEventListener("dragover", dragOverHandler)


function dragHandler(event){
    // alert("Dette er en alert")
    event.target.style.left=event.x + "px"
    event.target.style.top=event.y + "px"
}
function dropHandler(event){
    alert("hurra!")
}
function dragOverHandler(event){
    event.preventDefault()
}

