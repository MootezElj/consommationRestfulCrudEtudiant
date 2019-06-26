(function() {
    const username = getCookie("username");
    const password = getCookie("password");
    const role = getCookie("role");
    if (role!="Client" && role!="Admin")
        {
            document.getElementById("root").innerHTML = "<h2> You have no right to get to this page !</h2> <a href='../index.html'>go home </a>"  
        }
    })();