let open = document.getElementsByClassName("open")[0];
let train = document.getElementsByClassName("back")[0];
let close = document.getElementsByClassName("close")[0];
let circle = document.getElementsByClassName("circle")[0];
let cont = document.getElementsByClassName("container")[0];
open.addEventListener("click" , function(){
    train.style.transform = "translateX(0px)";
    cont.style.transform = "rotate(-20deg)";
    circle.style.transform = "rotate(-80deg)";
})
close.addEventListener("click", function(){
    train.style.transform="translateX(-300px)";
    cont.style.transform = "rotate(0deg)";
    circle.style.transform = "rotate(0deg)";

})