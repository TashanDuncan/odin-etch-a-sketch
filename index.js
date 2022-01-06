const gridContainer = document.querySelector(".grid-container");
const newGridButton = document.querySelector(".new-grid");

newGridButton.addEventListener("click", newGrid);

function random_rgba() {
  const o = Math.round,
    r = Math.random,
    s = 255;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
}

function newGrid() {
  const userInuput = prompt("How Many Squares per side? (Max 100)");
  if (isNaN(userInuput)) {
    return alert("Must be a number");
  } else if (userInuput > 100) {
    return alert("Invalid Number, Please select a number no greater than 100");
  } else {
    gridContainer.textContent = "";
    addGrid(userInuput);
  }
}

function addGrid(squares) {
  if (squares > 100) {
  }
  gridContainer.style.setProperty("--grid-rows", squares);
  gridContainer.style.setProperty("--grid-cols", squares);
  for (let i = 0; i < squares * squares; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");

    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = random_rgba();
    });

    gridContainer.appendChild(div);
  }
}

addGrid(16);
