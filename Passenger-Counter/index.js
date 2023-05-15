let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count = count + 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " / ";
  saveEl.textContent = saveEl.textContent + countStr;
  count = 0;
  countEl.textContent = 0;
}

function reset() {
  count = 0;
  countEl.textContent = 0;
  saveEl.textContent = "Previous Entries :";
}
