let myLeads = [];
const inputEl = document.getElementById("leads-input");
const inputBtn = document.getElementById("input-btn");
const leadsList = document.getElementById("leads-list");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>";
  }
  leadsList.innerHTML = listItems;
}
