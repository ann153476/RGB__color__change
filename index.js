const spanR = document.querySelector(".red__span");
const spanG = document.querySelector(".green__span");
const spanB = document.querySelector(".blue__span");
const spanT = document.querySelector(".transparent__span");

const inputR = document.querySelector("#red__input");
const inputG = document.querySelector("#green__input");
const inputB = document.querySelector("#blue__input");
const inputT = document.querySelector("#transparent__input");

const myBox = document.querySelector(".box");

const body = document.querySelector(".color__box");

const codeText = document.querySelector(".code");

inputR.oninput = () => {
  let value = inputR.value;
  spanR.textContent = Math.trunc((value * 100) / inputR.max) + "%";
  spanR.style.left = (value * 100) / inputR.max + "%";
  spanR.classList.add("show");
};
inputR.onblur = () => {
  spanR.classList.remove("show");
};
inputG.oninput = () => {
  let value = inputG.value;
  spanG.textContent = Math.trunc((value * 100) / inputG.max) + "%";
  spanG.style.left = (value * 100) / inputG.max + "%";
  spanG.classList.add("show");
};
inputG.onblur = () => {
  spanG.classList.remove("show");
};
inputB.oninput = () => {
  let value = inputB.value;
  spanB.textContent = Math.trunc((value * 100) / inputB.max) + "%";
  spanB.style.left = (value * 100) / inputB.max + "%";
  spanB.classList.add("show");
};
inputB.onblur = () => {
  spanB.classList.remove("show");
};
inputT.oninput = () => {
  let value = inputT.value;
  spanT.textContent = Math.trunc((value * 100) / inputT.max) + "%";
  spanT.style.left = (value * 100) / inputT.max + "%";
  spanT.classList.add("show");
};
inputT.onblur = () => {
  spanT.classList.remove("show");
};
function func() {
  codeText.textContent = `rgba(${Number(inputR.value)},${Number(
    inputG.value
  )},${Number(inputB.value)},${(1 - Number(inputT.value)).toFixed(2)})`;

  body.style.backgroundColor = `rgba(${Number(inputR.value)},${Number(
    inputG.value
  )},${Number(inputB.value)},${(1 - Number(inputT.value)).toFixed(2)})`;
}

document.addEventListener("DOMContentLoaded", func);

myBox.addEventListener("input", func);
