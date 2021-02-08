function ajouter(){
    var firstname = document.getElementById("firstname")
    var lastname = document.getElementById("lastname")
    var email = document.getElementById("email")
    var adress= document.getElementById("adress")

    var employee = {
        firstname: firstname.value,
        lastname : lastname.value,
        email: email.value,
        adress : adress.value
    }

    var employees = JSON.parse(localStorage.getItem("employee")) || [];
    employees.push(employee)
    localStorage.setItem('employee', JSON.stringify(employees))
}