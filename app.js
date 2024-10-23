let users = [];
let currentUserIndex = null;

function addUser() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    alert("İlgili Alanlar Boş Bırakılmaz!");
    return;
  }

  users.push({ id: users.length + 1, name, email });
  renderTable();

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
}

function renderTable() {
  const tableBody = document.getElementById("userTable");
  tableBody.innerHTML = "";

  users.forEach((user, index) => {
    const row = `<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td class="actions">
                <button class="edit" onclick="editUser(${index})">Edit</button>
                <button class="delete" onclick="deleteUser(${index})">Delete</button>
            </td>
        </tr>`;
    tableBody.innerHTML += row;
  });
}

function editUser(index) {
  currentUserIndex = index;
  document.getElementById("name").value = users[index].name;
  document.getElementById("email").value = users[index].email;

  document.querySelector(".add").style.display = "none";
  document.getElementById("updateBtn").style.display = "inline-block";
  document.getElementById("cancelBtn").style.display = "inline-block";
}

function updateUser() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    alert("İlgili Alanlar Boş Bırakılmaz!");
    return;
  }

  if (currentUserIndex !== null) {
    users[currentUserIndex] = { ...users[currentUserIndex], name, email };
    renderTable();
    cancelEdit();
  }
}

function deleteUser(index) {
  users.splice(index, 1);
  renderTable();
}

function cancelEdit() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  currentUserIndex = null;

  document.querySelector(".add").style.display = "inline-block";
  document.getElementById("updateBtn").style.display = "none";
  document.getElementById("cancelBtn").style.display = "none";
}
renderTable();
