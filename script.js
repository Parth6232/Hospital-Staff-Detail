document.querySelector("#staffForm").addEventListener("submit", handleFormSubmit);

let staffArr = JSON.parse(localStorage.getItem("hospital")) || [];
displayTable();

function handleFormSubmit(e) {
  e.preventDefault();

  const Name = document.querySelector("#name").value.trim();
  const DoctorID = document.querySelector("#docID").value.trim();
  const Specialization = document.querySelector("#dept").value;
  const Experience = parseInt(document.querySelector("#exp").value);
  const Email = document.querySelector("#email").value.trim();
  const Mobile = document.querySelector("#mbl").value.trim();

  const newEntry = { Name, DoctorID, Specialization, Experience, Email, Mobile };
  staffArr.push(newEntry);
  localStorage.setItem("hospital", JSON.stringify(staffArr));

  displayTable();
  e.target.reset();
  document.getElementById("name").focus();
}

function displayTable() {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  staffArr.forEach((el, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${el.Name}</td>
      <td>${el.DoctorID}</td>
      <td>${el.Specialization}</td>
      <td>${el.Experience}</td>
      <td>${el.Email}</td>
      <td>${el.Mobile}</td>
      <td>${getRole(el.Experience)}</td>
      <td><button class="btn-delete" data-index="${index}">Delete</button></td>
    `;

    tbody.appendChild(row);
  });

  document.querySelectorAll(".btn-delete").forEach(button => {
    button.addEventListener("click", function () {
      const index = this.dataset.index;
      staffArr.splice(index, 1);
      localStorage.setItem("hospital", JSON.stringify(staffArr));
      displayTable();
    });
  });
}

function getRole(exp) {
  if (exp > 5) return "Senior";
  if (exp >= 2) return "Junior";
  return "Trainee";
}
