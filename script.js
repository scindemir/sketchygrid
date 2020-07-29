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

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    
    container.appendChild(cell).className = "gridItem";
  };
};

makeRows(16, 16);


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
             let amount = window.prompt("Please enter the number", "");

                if (amount == null || amount == "") {
                   return false;
                } else {
                  $("#container").empty();
                  makeRows(amount, amount);
                  paint();
                
}})
