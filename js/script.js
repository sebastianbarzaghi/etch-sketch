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
};

const gridCells = document.querySelectorAll(".cell");
const colorPicker = document.querySelector(".colorPicker");

// draw
let drawActive = false;
gridCells.forEach(function(cell) {
    cell.addEventListener("mousedown", function() {
        if (!drawActive) {
            drawActive = true;
            if (randomActive) {
                cell.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            } else if (eraserActive) {
                cell.style.removeProperty("background-color");
            } else {
                //color picker
                cell.style.backgroundColor = colorPicker.value;
            };
        }
    });
    cell.addEventListener("mousemove", function() {
        if (drawActive) {
            if (randomActive) {
                cell.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            } else if (eraserActive) {
                cell.style.removeProperty("background-color");
            } else {
                //color picker
                cell.style.backgroundColor = colorPicker.value;
            };
        };
    });
    cell.addEventListener("mouseup", function() {
        if (drawActive) {
            drawActive = false;
        };
    });
});

// random
let randomActive = false;
const randomBtn = document.querySelector(".randomBtn");
randomBtn.addEventListener("click", function() {
    if (!randomActive) {
        randomActive = true;
        if (eraserActive) {
            eraserActive = false;
            eraserBtn.classList.remove("clicked");
        };
        randomBtn.classList.add("clicked");
    } else {
        randomActive = false;
        randomBtn.classList.remove("clicked");
    };
});

//eraser
let eraserActive = false;
const eraserBtn = document.querySelector(".eraserBtn");
eraserBtn.addEventListener("click", function() {
    if (!eraserActive) {
        eraserActive = true;
        if (randomActive) {
            randomActive = false;
            randomBtn.classList.remove("clicked");
        };
        eraserBtn.classList.add("clicked");
    } else {
        eraserActive = false;
        eraserBtn.classList.remove("clicked");
    };
});

//clear
const clearBtn = document.querySelector(".clearBtn");
clearBtn.addEventListener("click", function() {
    gridCells.forEach(function(cell) {
        if (cell.style.hasOwnProperty("background-color")) {
            cell.style.removeProperty("background-color");
        };
    });
});

//toggle grid
let toggleGridActive = false;
const toggleGridBtn = document.querySelector(".toggleGrid");
toggleGridBtn.addEventListener("click", function() {
    for (const cell of gridCells) {
        cell.classList.toggle("toggled");
    };
    if (!toggleGridActive) {
        toggleGridActive = true;
        toggleGridBtn.classList.add("clicked");        
    } else {
        toggleGridActive = false;
        toggleGridBtn.classList.remove("clicked");
    };
});
