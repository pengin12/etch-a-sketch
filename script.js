const container = document.querySelector(".container");
for (let i = 0; i < 16*16; i++) {
  const i = document.createElement('div');
  i.style.height = "30px";
  i.style.width = "30px";
  container.appendChild(i);
}