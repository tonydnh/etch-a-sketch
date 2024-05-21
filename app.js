const container = document.querySelector(".grid-container");

drawGrid(16);

const boxes = document.querySelectorAll(".column");
let held = false;

for (const box of boxes) {
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

function color(element) {
    element.style.backgroundColor = "black";
}

function drawGrid(size) {
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
}