let myLeads = [];
const inputEl = document.getElementById("leads-input");
const inputBtn = document.getElementById("input-btn");
const leadsList = document.getElementById("leads-list");
const deleteBtn = document.getElementById("delete-btn");

const myLeadsData = JSON.parse(localStorage.getItem("myLeads"));

if (myLeadsData) {
  myLeads = myLeadsData;
  renderLeads();
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  renderLeads();
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
});

function renderLeads() {
  let listItems = "";

  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li> <a target= '_blank' href='${myLeads[i]}'> ${myLeads[i]} </a> </li>`;
  }

  leadsList.innerHTML = listItems;
}
