function loadData(){
    var employee= JSON.parse(localStorage.getItem('employee')) || [];
    var tbody = document.getElementById("tbody");
    var data ="";
    employee.forEach((employee, index) => {
        data += `<tr>
        <td>${index+1}</td>
        <td>${employee.firstname}</td>
        <td>${employee.lastname}</td>
        <td>${employee.email}</td>
        <td>${employee.adress}</td>
        <td> 
        <button type="button" class="btn btn-info text-white" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="showData(${index})">Update </button>
        <button type="button" class="btn btn-danger" onclick="deleteData(${index})">Delete </button>
        </td>
      </tr>` 
    });
 tbody.innerHTML= data;
 }
 function deleteData(i){
    var employee= JSON.parse(localStorage.getItem('employee')) || [] ;
    employee.splice(i, 1);
    localStorage.setItem("employee", JSON.stringify(employee));
    loadData();
}
function showData(i){
  var employee= JSON.parse(localStorage.getItem('employee')) || [];
  document.getElementById("firstname").value=employee[i].firstname;
  document.getElementById("lastname").value=employee[i].lastname;
  document.getElementById("email").value=employee[i].email;
  document.getElementById("adress").value=employee[i].adress;
  document.getElementById("index").value=i;
}
function updateData(){
  var employee= JSON.parse(localStorage.getItem('employee')) || [];
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var adress = document.getElementById("adress").value;
  var email = document.getElementById('email').value;
  var index = document.getElementById("index").value;
  var myObj = {
    firstname,
    lastname,
    adress,
    email
  }
  employee.splice(index,1,myObj);
  localStorage.setItem("employee", JSON.stringify(employee));
  loadData();
}