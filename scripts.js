var data;

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    renderSkills(data.skills);
    renderProjects(data.projects);
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

function renderProjects(data) {
  let projectPos = document.getElementById("projects");
  let allCard = "";
  let y_now = "";
  data.map((p) => {
    if (p.year != y_now) {
      allCard += `<div>${p.year}</div>`;
      y_now = p.year;
    }
    allCard += `<div class="card my-3 p-2 border border-secondary">
                    <h6>${p.project_name}</h6>
                    <small>${p.description}</small><br>`;
    allCard +=
      p.git != ""
        ? `<a href="${p.git}" target="_blank" rel="noopener noreferrer" class="badge badge-dark">Github Repositiory</a></div>`
        : "</div>";
  });
  projectPos.innerHTML = allCard;
}
