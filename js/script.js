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

const gridCells = document.querySelectorAll(".cell");
const colorPicker = document.querySelector(".colorPicker");

let drawActive = false;
let eraserActive = false;

//eraser
const eraserBtn = document.querySelector(".eraserBtn");
eraserBtn.addEventListener("click", function() {
    if (eraserActive) {
        eraserActive = false;
        drawActive = true;
        eraserBtn.classList.remove("clicked");
    } else {
        eraserActive = true;
        drawActive = false;
        eraserBtn.classList.add("clicked");
    };
});

// draw or erase
gridCells.forEach(function(cell) {
    cell.addEventListener("mousedown", function() {
        if (!drawActive) {
            drawActive = true;
            //color picker
            cell.style.backgroundColor = colorPicker.value;
        } else {
            if (eraserActive) {
                cell.style.removeProperty("background-color");
            }
        };
    });
    cell.addEventListener("mousemove", function() {
        if (drawActive) {
            //color picker
            cell.style.backgroundColor = colorPicker.value;
        } else {
            if (eraserActive) {
                cell.style.removeProperty("background-color");
            }
        };
    });
    cell.addEventListener("mouseup", function() {
        if(drawActive) {
            drawActive = false;
        };
    });
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
