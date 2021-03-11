var data;

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    console.log(data);
    renderSkills(data.skills);
  }
};
xmlhttp.open("GET", "./data.json", true);
xmlhttp.send();

function renderSkills(data) {
  let skillPos = document.getElementById("skills");
  let allCard = "";
  data.map((s) => {
    allCard += `<span class="badge badge-dark m-2 px-2">${s}</span>`;
  });
  skillPos.innerHTML = allCard;
}
