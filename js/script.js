// get grid space
const grid = document.querySelector(".grid");

// create grid
for (let i = 0; i < 16; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("gridRow");
    for (let n = 0; n < 16; n++) {
        const gridCell = document.createElement("div");
        gridCell.classList.add("cell");
        gridRow.appendChild(gridCell);
    };
    grid.appendChild(gridRow);
}

// hover black
const gridCells = document.querySelectorAll(".cell");
let mouseDown = false;
gridCells.forEach(function(cell) {
    cell.addEventListener("mousedown", function() {
        mouseDown = true;
        //black
        cell.style.backgroundColor = "black";
    });
    cell.addEventListener("mousemove", function() {
        if(mouseDown === true) {
            cell.style.backgroundColor = "black";
        };
    });
    cell.addEventListener("mouseup", function() {
        mouseDown = false;
    })
})


//clear
const clearBtn = document.querySelector(".clearBtn");
clearBtn.addEventListener("click", function() {
    gridCells.forEach(function(cell) {
        if(cell.style.hasOwnProperty("background-color")) {
            cell.style.removeProperty("background-color");
        }
    })
})
