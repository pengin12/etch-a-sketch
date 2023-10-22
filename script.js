const container = document.querySelector(".container");

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

function randomColor() {
  let red = Math.floor(Math.random() * (255 + 1));
  let green = Math.floor(Math.random() * (255 + 1));
  let blue = Math.floor(Math.random() * (255 + 1));
  return `rgb(${red}, ${green}, ${blue})`;
}

function rainbow() {
  if (document.querySelector("input[type=checkbox]").checked) {
    document.querySelectorAll(".grid_element").forEach(function(element) {
      element.removeEventListener("click", function() {
        element.style.backgroundColor = "black"; 
      })
      element.removeEventListener("dragover", function() {
        element.style.backgroundColor = "black";
      })
    });
    
    document.querySelectorAll(".grid_element").forEach(function(element) {
      element.addEventListener("click", function() {
        element.style.backgroundColor = randomColor();
      })
      element.addEventListener("dragover", function() {
        element.style.backgroundColor = randomColor();
      })
    });
  } else {
    document.querySelectorAll(".grid_element").forEach(function(element) {
      element.removeEventListener("click", function() {
        element.style.backgroundColor = randomColor();
      })
      element.removeEventListener("dragover", function() {
        element.style.backgroundColor = randomColor();
      })
    });

    document.querySelectorAll(".grid_element").forEach(function(element) {
      element.addEventListener("click", function() {
        element.style.backgroundColor = "black";
      })
      element.addEventListener("dragover", function() {
        element.style.backgroundColor = "black";
      })
    });
  }
}

for (let i = 0; i < 16 * 16; i++) {
  let div = document.createElement("div");
  div.style.height = "30px";
  div.style.width = "30px";
  div.classList.add("grid_element");
  container.appendChild(div);
}

document.querySelectorAll(".grid_element").forEach(function(element) {
  element.addEventListener("click", function() {
    element.style.backgroundColor = "black";
  })
  element.addEventListener("dragover", function() {
    element.style.backgroundColor = "black";
  })
});