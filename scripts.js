


//methode qui  fait un get du user avec le username
function checkUserGET() {
  var request = new XMLHttpRequest()

  const username = document.getElementById("username").value;
  request.open('GET', 'http://localhost:8080/user/' + username, true)

  request.onload = function () {
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
      console.log(data)

    } else {
      console.log('error')
    }

  }
  // Send request
  request.send()
}


function checkUser() {
const  username = document.getElementById("username").value;
const password = document.getElementById("password").value;


console.log(username+' ' + password);
     var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             if (this.responseText == "Admin"){
                setCookie("username",username,0);
                setCookie("password",password,0);
                setCookie("role",this.responseText,0);
                location.href = "admin/adminDashboard.html";
                }
            else if (this.responseText == "Client"){
                setCookie("username",username,0);
                setCookie("password",password,0);
                setCookie("role",this.responseText,0);
                location.href = "client/clientDashboard.html"
                }

            
         }
    };
    xhttp.open("POST", "http://localhost:8080/users/verification", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send('{"username":"'+username
+'","password":"'+password+'"}');
}


function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = ""; 
//"; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}

function checOnekUser(username, password) {

  
  console.log(username+' ' + password);
       var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {
               if (this.responseText == "Admin"){
                  setCookie("username",username,0);
                  setCookie("password",password,0);
                  setCookie("role",this.responseText,0);
                  location.href = "admin/adminDashboard.html";
                  }
              else if (this.responseText == "Client"){
                  setCookie("username",username,0);
                  setCookie("password",password,0);
                  setCookie("role",this.responseText,0);
                  location.href = "client/clientDashboard.html"
                  }
  
              
           }
      };
      xhttp.open("POST", "http://localhost:8080/users/verification", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send('{"username":"'+username
  +'","password":"'+password+'"}');

    }