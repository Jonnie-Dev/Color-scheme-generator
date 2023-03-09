const color = document.getElementById("color");
const button = document.getElementById("button");
const select = document.getElementById("options");
const div = document.querySelectorAll("#div");
const divP = document.querySelectorAll("#div-p");
const container = document.querySelectorAll(".container");

button.addEventListener("click", generate);

async function generate() {
  const mode = select.options[select.selectedIndex].text.toLowerCase();
  const value = color.value.split("").slice(1, 8).join("");
  let url = `https://www.thecolorapi.com/scheme?hex=${value}&mode=${mode}&count=6`;
  let response = await fetch(url);
  let data = await response.json();

  div.forEach((container, i) => {
    container.style.background = data.colors[i].hex.value;
  });
  divP.forEach((p, i) => {
    p.textContent = data.colors[i].hex.value;
  });
}
