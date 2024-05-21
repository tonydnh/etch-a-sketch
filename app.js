draw();

function draw() {
    drawGrid(16);

    const sizeSlider = document.querySelector("#size-slider");
    const gridSize = document.querySelector("#grid-size");
    
    sizeSlider.addEventListener("input", () => {
        let newSize = sizeSlider.value;
        gridSize.textContent = `Grid Size: ${newSize} x ${newSize}`

        // Remove old grid before drawing new one
        const oldGrid = document.querySelectorAll(".row", ".column");
        oldGrid.forEach(grid => grid.remove());
        drawGrid(newSize);
    });
}

function color(element) {
    element.style.backgroundColor = "black";
}

function drawGrid(size) {
    const container = document.querySelector(".grid-container");

    for (let r = 0; r < size; r++) {
        const row = document.createElement("div");
        row.className = "row"
        for (let c = 0; c < size; c++) {
            const column = document.createElement("div");
            column.className = "column";
            row.appendChild(column);
        }
        container.appendChild(row);
    }

    const boxes = document.querySelectorAll(".column");
    let held = false;

    for (const box of boxes) {
        // Event listeners for hold and drag to draw
        box.addEventListener("mousedown", (e) => {
            color(e.target);
            held = true;
        });

        box.addEventListener("mouseup", () => {
            held = false;
        });

        box.addEventListener("mouseenter", (e) => {
            if (held) {
                color(e.target);
            }
        });
    }
}