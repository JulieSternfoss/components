const pointBox = document.querySelector("#score"); //piont tavle
const dragFoodBox = document.querySelectorAll(".foodcontainer artcile");
const targetAnimal = document.querySelectorAll("#animals div"); //dyrene
const foodBox = document.querySelector(".foodcontainer");//madkassen

console.log(pointBox);

//events på elemeneter

dragFoodBox.forEach(function(elemenet){
    elemenet.addEventListener("dragstart", startDrag)
})

function startDrag(events){
    console.log("jo den kan hives")

}

function dropMad(event){
    let madId = event.dataTransfer.getData("foodId");
    let madType = event.dataTransfer.getData("foodName");

    if (madType == this.dataset.food) {
        let heart = document.createTextNode("❤");
        this.appendChild(heart);
        pointBox.innerHTML = parseInt(pointBox.innerHTML) + 100;
    } else {
        alert("Puhhaaa!")
        pointBox.innerHTML = parseInt(pointBox.innerHTML) - 100;
        foodBox.removeChild(document.querySelector("#" + madId));
    }
}


// const computerChoiceDisplay = document.getElementById("computer-choice")
// const userChoiceDicplay = document.getElementById("user-choice")
// const resultDisplay = document.getElementById("result")
// const possibleChoces = document.querySelectorAll("button")


// possibleChoces.forEach(possibleChoces => possibleChoces.addEventListener("click", (e)=>{
//     userChoice = e.target.id
//     userChoiceDicplay.innerHTML = userChoice 
// }))
