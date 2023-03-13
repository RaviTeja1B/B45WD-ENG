if (
  window.location.pathname === "/index.html" ||
  window.location.pathname === "/"
) {
  fetch("https://640e94b7cde47f68db32e71f.mockapi.io/users")
    .then((data) => data.json())
    .then((res) => {
      let tableBody = document.getElementById("tableBody");
      res.forEach((data) => {
        let row = document.createElement("tr");
        Object.keys(data).forEach((key) => {
          if (key !== "skills" && key !== "id") {
            let cell = document.createElement("td");
            cell.innerText = data[key];
            row.appendChild(cell);
          }
        });
        tableBody.appendChild(row);
      });
    });
}

function createUser(e) {
  e.preventDefault();
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let gender = document.querySelector(".radio:checked").id;
  let checkboxValue = document.querySelectorAll(".checkbox:checked");
  let skills = [];
  checkboxValue.forEach((value) => (skills = [...skills, value.id]));
  //   for (let data of checkboxValue) {
  //     skills = [...skills, data.id];
  //   }
  console.log(skills);
  let branch = document.getElementById("branch").value;
  let obj = { firstName, lastName, gender, skills, branch };
  console.log(JSON.stringify(obj));

  fetch("https://640e94b7cde47f68db32e71f.mockapi.io/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((data) => data.json())
    .then((res) => console.log(res));
}

// Create mockapi with fields, subjectname and language, count
// in view page use cards to show the get data
