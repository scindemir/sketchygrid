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

$(".gridItem").mouseover(function(){
    $(this).css("background-color", "black");
})

var btn = document.createElement("button");   
btn.innerHTML = "CLEAR";                   
document.body.appendChild(btn);

$("button").click(function(){
    $(".gridItem").css("background-color", "white");
})