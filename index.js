let img = document.querySelector("img");
img.addEventListener("click", function() {
});

let circle = document.querySelector(".circle");
let h = document.querySelector(".h");
let h1 = document.querySelector(".h1");
let h2 = document.querySelector(".h2");
let main=document.querySelector("main");
let b=document.querySelector(".b");
// let circle2 = document.querySelector(".circle2");
let jo= document.querySelector(".jo");
let table= document.querySelector(".table");
let bu=document.querySelector(".bu");
circle.addEventListener("mouseover", function() {
    h.style.color = "red";
    h1.style.color = "red";
    h2.style.color = "red";
    circle.style.backgroundColor = "white";
    jo.style.backgroundColor="red";
    jo.style.color="white";
    main.style.backgroundColor="red";
    b.style.color="white";
    table.style.backgroundColor="aqua";
    bu.style.backgroundColor="aqua";
   
});

circle.addEventListener("mouseout", function() {
    h.style.color = "white";
    h1.style.color = "white";
    h2.style.color = "white";
    circle.style.backgroundColor = "red";
    jo.style.backgroundColor="white";
    jo.style.color="red";
    main.style.backgroundColor="aqua";
    b.style.color="red";
    table.style.backgroundColor="rgba(255, 0, 0,0.8)";
});