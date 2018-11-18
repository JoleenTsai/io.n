function sessionCheck() {
    //If no user session, go to login page
    if (!localStorage.getItem('lot17a-session')) {
        window.location = './'
    }
    else {
        // dispay user in navbar
        document.getElementById('userFirst').innerText = localStorage.getItem('lot17a-firstname')
        document.getElementById('userLast').innerText = localStorage.getItem('lot17a-lastname')
        document.getElementById('userPhoto').setAttribute('src', localStorage.getItem('lot17a-imageURL'))
    }
}
//Button Logout
function logout() {
    localStorage.removeItem('lot17a-session')
    localStorage.removeItem('lot17a-firstname')
    localStorage.removeItem('lot17a-lastname')
    localStorage.removeItem('lot17a-imageURL')
    sessionCheck()
}
    sessionCheck()