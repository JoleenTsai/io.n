function login(){
    event.preventDefault()
    // clear warning messages
    document.getElementById('loginMessage').innerHTML = "Welcome! Please log into your account."
    document.getElementById('loginMessage').className = ""
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    //check if username and password were entered
    if (username && password){

        fetch(`/login/${username}-${password}`)
        .then(r => r.json())
        .then(response =>{
            if (response.verified) {
                localStorage.setItem('lot17a-session', response.user_name)
                localStorage.setItem('lot17a-firstname', response.first_name)
                localStorage.setItem('lot17a-lastname', response.last_name)
                localStorage.setItem('lot17a-imageURL', `./assets/Images/user.employee.images/user/${response.user_name}.jpeg`)
                sessionCheck()
            } else {
                // Warn user, login info was incorrect
                document.getElementById('loginMessage').innerHTML = "Username and/or password do not match our records"
                document.getElementById('loginMessage').className = "red-text"
            }
        })
        .catch(e => {
            // Warn user, login info was incorrect
            document.getElementById('loginMessage').innerHTML = "Username and/or password do not match our records"
            document.getElementById('loginMessage').className = "red-text"
            console.error(e)
        })
    } else {
        // Implore user for username and password
        document.getElementById('loginMessage').innerHTML = "Username and password required!"
        document.getElementById('loginMessage').className = "red-text"
    }
}

function admin (){
    // Notify user they need to call someone for help
    document.getElementById('loginMessage').innerHTML = "Contact your network administrator."
    document.getElementById('loginMessage').className = "red-text"
}

function sessionCheck() {
    if (localStorage.getItem('lot17a-session')) {
        window.location = './dashboard.html'
    }
}

sessionCheck()