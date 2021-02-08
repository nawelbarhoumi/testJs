function loadData(){
    var society= JSON.parse(localStorage.getItem('society')) || [];
    var tbody = document.getElementById("tbody");
    var data ="";
    society.forEach((society, index) => {
        data += `<tr>
        <td>${index+1}</td>
        <td>${society.companyName}</td>
        <td>${society.adress}</td>
        <td>${society.email}</td>
        <td> 
        <button type="button" class="btn btn-info text-white" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="showData(${index})">Update </button>
        <button type="button" class="btn btn-danger" onclick="deleteData(${index})">Delete </button>
        <button type="button" class="btn btn-warning" onclick="affectData(${index})">Affect </button>
        </td>
      </tr>` 
    });
 tbody.innerHTML= data;
 }
 function deleteData(i){
    var society= JSON.parse(localStorage.getItem('society')) || [] ;
    society.splice(i, 1);
    localStorage.setItem("society", JSON.stringify(society));
    loadData();
}
function showData(i){
  var society= JSON.parse(localStorage.getItem('society')) || [];
  document.getElementById("name").value=society[i].name;
  document.getElementById("adress").value=society[i].adress;
  document.getElementById("email").value=society[i].email;
  document.getElementById("index").value=i;
}
function updateData(){
  var society= JSON.parse(localStorage.getItem('society')) || [];
  var name = document.getElementById("name").value;
  var adress = document.getElementById("adress").value;
  var email = document.getElementById('email').value;
  var index = document.getElementById("index").value;
  var myObj = {
    name,
    adress,
    email
  }
  society.splice(index,1,myObj);
  localStorage.setItem("society", JSON.stringify(society));
  loadData();
}