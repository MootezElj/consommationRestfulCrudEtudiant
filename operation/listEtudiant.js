(function() {

    const app = document.getElementById('root');
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    
    app.appendChild(container);
    
    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:8080/etudiants', true);
    request.onload = function () {
    
      // Begin accessing JSON data here
      var data = JSON.parse(this.response);
      if (request.status >= 200 && request.status < 400) {
        data.forEach(etudiant => {
          const card = document.createElement('div');
          card.setAttribute('class', 'card');
    
          const h1 = document.createElement('h1');
          h1.textContent = etudiant.prenom+" "+etudiant.nom;
          const modifier = document.createElement('a');
          modifier.textContent = "modifier";
        
          modifier.setAttribute("onClick","modifierEtudiantForm("+etudiant.id+")");

          const supprimer = document.createElement('a');
          supprimer.textContent = "supprimer";
          supprimer.setAttribute("onclick","supprimerEtudiant("+etudiant.id+")");
          
          const p = document.createElement('p');
          p.textContent = "age: "+etudiant.age;
    
          container.appendChild(card);
          card.appendChild(h1);
          if (getCookie("role")=="Admin"){
            card.appendChild(modifier);
          card.appendChild(supprimer);
          }
          card.appendChild(p);
          
        });
      } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
      }
    }
    request.send();
    
    })();
    

function supprimerEtudiant(idEtudiant){
  if (getCookie("role")=="Admin")
  return fetch("http://localhost:8080/etudiants/" + idEtudiant, {
    method: 'delete'
  }).then(response =>
    {
      alert("Etudiant supprime avec success !");
      location.reload();
});
else console.log("permission denied");
}

function modifierEtudiantForm(id){
  setCookie("idEtudiant",id,0);
  location.href = "modifierEtudiant.html"
}

