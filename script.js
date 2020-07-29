

const span = document.getElementById("buttonBay");
var btn1 = document.createElement("button");
const text = document.createTextNode("button1");
btn1.appendChild(text);
btn1.innerHTML = "CLEAR";                   
span.appendChild(btn1);

$(btn1).click(function(){
    $(".gridItem").css("background-color", "white");
})


const container = document.getElementById("container");
let grids = document.querySelectorAll(".gridItem")

function makeGrid(num) {
  container.style.setProperty('--grid-rows', num);
  container.style.setProperty('--grid-cols', num);
  for (i = 0; i < (num * num); i++) {
    let cell = document.createElement("div");
    
    container.appendChild(cell).className = "gridItem";
  };
};

makeGrid(16);


function paint(){
$(".gridItem").mouseover(function(){
    let userColor = "rgb( " + Math.floor(Math.random(250) * 256) + ", " + Math.floor(Math.random() * 50) + ", " + Math.floor(Math.random() * 100) + ")";
    $(this).css("background-color", userColor);
})}

paint();

var btn2 = document.createElement("button");
const text2 = document.createTextNode("button2");
btn2.appendChild(text);
btn2.innerHTML = "CUSTOM";                   
span.appendChild(btn2);

$(btn2).click(function enterNum(){
             let amount = window.prompt("Please enter the number of grids in a row", "");

                if (amount == null || amount == "") {
                   return false;
                } else {
                  $("#container").empty();
                  makeGrid(amount);
                  paint();
                
}})
