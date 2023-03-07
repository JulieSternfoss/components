function skiftFarve(farve) {

    document.querySelector(".skifterFarve").style.backgroundColor = farve;
    document.querySelector(".skifterFarve").style.color="white";
}
skiftFarve("green");

document.querySelector(".link1").addEventListener("click", function(){
    skiftFarve("red");
})
document.querySelector(".link2").addEventListener("click", function(){
    skiftFarve("blue");
})
document.querySelector(".link3").addEventListener("click", function(){
    skiftFarve("pink");
})
document.querySelector(".link4").addEventListener("click", function(){
    skiftFarve("purple");
})


