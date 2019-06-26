(function() {
const username = getCookie("username");
const password = getCookie("password");
const role = getCookie("role");
if (role!="Admin")
    {
         document.getElementById("root").innerHTML = "<h2> You have"
          +"no right to get to this page !</h2>"+
          "<a href='../index.html'>go home </a>"  
    }
})();






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


