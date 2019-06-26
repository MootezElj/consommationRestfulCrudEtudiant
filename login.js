(function() {


const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

    const username = getCookie("username");
    const password = getCookie("password");
    const role = getCookie("role");
    if (role=="Admin")
        {
          location.href = "admin/adminDashboard.html";
        }
      else  if (role=="Client")
        {
          location.href = "client/clientDashboard.html";
        }
    })();