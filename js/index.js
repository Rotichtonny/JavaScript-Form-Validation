function register(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let password2 = document.getElementById('password2').value;
    let msg = document.getElementById('msg');

    if (name == '' || email == '' || password == '' || password2 == '') {
        msg.className = "alert alert-danger"
        msg.innerHTML = 'Please Fill All The Blank Fields!'
    } else {
        if (name.length < 3) {
            msg.className = "alert alert-danger"
            msg.innerHTML = 'The Name Must Be At least More Than Three Characters'
        } else {
            let atpos = email.indexOf("@");
            let dotpos = email.lastIndexOf(".")
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
                msg.className = "alert alert-danger"
                msg.innerHTML = 'Please Use A Valid Email Address!'
            } else {
                if (password != password2) {
                    msg.className = "alert alert-danger"
                    msg.innerHTML = 'The Passwords Do Not Match!'
                } else {
                    msg.className = "alert alert-success"
                    msg.innerHTML = name + ' is registered with email ' + email;
                }
            }
        }
    }

}
document.getElementById('regForm').addEventListener('submit', register, false);