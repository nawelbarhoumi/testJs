function ajouter(){
    var companyName = document.getElementById("companyName")
    var adress = document.getElementById("adress")
    var email = document.getElementById("email")

    var society = {
        companyName: companyName.value,
        adress : adress.value,
        email: email.value,
    }

    var societies = JSON.parse(localStorage.getItem("society")) || [];
    societies.push(society)
    localStorage.setItem('society', JSON.stringify(societies))
}
