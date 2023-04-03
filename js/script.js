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

//let eraserActive = false;
let shadeActive = false;
/*
const eraserBtn = document.querySelector(".eraserBtn");
eraserBtn.addEventListener("click", function() {
    if (eraserActive) {
        eraserActive = false;
        eraserBtn.classList.remove("clicked");
    } else {
        eraserActive = true;
        drawActive = false;
        eraserBtn.classList.add("clicked");
    };
});

const funcButtons = document.querySelectorAll(".addFunc");
funcButtons.forEach(function(btn) {
    let isClicked = false;
    btn.addEventListener("click", function() {
        if (!isClicked) {
            isClicked = true;
            btn.classList.add("clicked");
        } else {
            isClicked = false;
            btn.classList.remove("clicked");
        }
    })
})
*/

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
            } else if (shadeActive) {
                cell.style.backgroundColor = `#${colorPicker.value - 1}`;
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
            } else if (shadeActive) {
                cell.style.backgroundColor = `#${colorPicker.value - 100000000}`;
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
        if (randomActive) {
            randomActive = false;
            randomBtn.classList.remove("clicked");
        };
        eraserActive = true;
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

//shading

const shadeBtn = document.querySelector(".shadeBtn");
shadeBtn.addEventListener("click", function() {
    if (!shadeActive) {
        shadeActive = true;
        shadeBtn.classList.add("clicked");
    } else {
        shadeActive = false;
        shadeBtn.classList.add("clicked");
    };
});

//lighten

/* grabber
let grabberActive = false;
const grabberBtn = document.querySelector(".grabberBtn");
grabberBtn.addEventListener("click", function() {
    if (!grabberActive) {
        grabberActive = true;
        drawActive = false;
        grabberBtn.classList.add("clicked");
    } else {
        grabberActive = false;
        grabberBtn.classList.remove("clicked");
    };
});
*/
