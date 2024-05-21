const container = document.querySelector("#container");

for (let row = 1; row <= 16; row++) {
    for (let col = 1; col <= 16; col++) {
        const square = document.createElement("div");
        square.className = "box";
        square.id = `sq${row}-${col}`;
        square.style.width = "50px";
        square.style.height = "50px";
        square.style.border = "1px solid black"
        container.appendChild(square);
    }
}

const boxes = document.querySelectorAll(".box");
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