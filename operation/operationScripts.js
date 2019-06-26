
  


function getEtudiant(idEtudiant){
      
    var data;
    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:8080/etudiants/'+idEtudiant, true);
    request.onload = function () {
    
      // Begin accessing JSON data here
      data = JSON.parse(this.response);
      if (request.status >= 200 && request.status < 400) {
        
      } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
      }
    }
    request.send();
    
  return data
}



//fonction qui ajoute un etudiant
function addEtudiant(){
    const nomEtudiant = document.getElementById("nomEtudiant").value;
    const prenomEtudiant = document.getElementById("prenomEtudiant").value;
    const ageEtudiant = document.getElementById("ageEtudiant").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
              
         }
    };
    var etudiant = {prenom:prenomEtudiant, nom:nomEtudiant, age:ageEtudiant};
    xhttp.open("POST", "http://localhost:8080/etudiants/", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(etudiant));
}

function loadEtudiant(){
    location.href ="../operation/listEtudiant.html";
}

function editEtudiant(){
  const nomEtudiant = document.getElementById("nomEtudiantModifier").value;
  const prenomEtudiant = document.getElementById("prenomEtudiantModifier").value;
  const ageEtudiant = document.getElementById("ageEtudiantModifier").value;
  const idEtudiant = getCookie("idEtudiant")

  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             
         }
    };
    var etudiant = { prenom:prenomEtudiant, nom:nomEtudiant, age:ageEtudiant};
    xhttp.open("PUT", "http://localhost:8080/etudiants/"+idEtudiant, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(etudiant));
}

function logout(){
  eraseCookie("username");
  eraseCookie("password");
  eraseCookie("role");
  location.href="../index.html"
}







