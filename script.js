const container = document.querySelector(".container");

for (let i = 0; i < 16 * 16; i++) {
  let div = document.createElement("div");
  div.style.height = "28px";
  div.style.width = "28px";
  div.classList.add("grid_element");
  div.addEventListener("dragover", function() {
    div.style.backgroundColor = "black";
  });
  div.addEventListener("click", function() {
    div.style.backgroundColor = "black";
  });

  container.appendChild(div);
}

container.focus();

function grid_size() {
  let gridSize = prompt("Enter grid size (maximum is 64):");
  if (gridSize <= 64) {
    while (container.lastChild) {
      container.removeChild(container.lastChild);
    }
    for (let i = 0; i < gridSize*gridSize; i++) {
      let div = document.createElement("div");
      div.style.height = `calc(480px / ${gridSize})`;
      div.style.width = `calc(480px / ${gridSize})`;
      div.classList.add("grid_element");
      div.addEventListener("dragover", function() {
        div.style.backgroundColor = "black";
      });
      div.addEventListener("click", function() {
        div.style.backgroundColor = "black";
      });

      container.appendChild(div);
    }
  }
}

