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
//let erasing = false;

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

let toggleGridActive = false;

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
    if (toggleGridActive) {
        cell.classList.add("toggled");
    };
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
    }
})

//shading
//lighten
//toggle grid
const toggleGridBtn = document.querySelector(".toggleGrid");
toggleGridBtn.addEventListener("click", function() {
    if (!toggleGridActive) {
        toggleGridActive = true;
        toggleGridBtn.classList.add("clicked");
    } else {
        toggleGridActive = false;
        toggleGridBtn.classList.remove("clicked");
    };
});

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



//clear
const clearBtn = document.querySelector(".clearBtn");
clearBtn.addEventListener("click", function() {
    gridCells.forEach(function(cell) {
        if(cell.style.hasOwnProperty("background-color")) {
            cell.style.removeProperty("background-color");
        }
    })
})
