function sessionCheck() {
    //If no user session, go to login page
    if (!localStorage.getItem('lot17a-session')) {
        window.location = './'
    }
    else {
        // >> TODO <<
        // dispay user in navbar
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