const container = document.querySelector(".container");

for (let i = 0; i < 16 * 16; i++) {
  let div = document.createElement("div");
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