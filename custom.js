var eye = document.getElementById('pass-icon');

eye.addEventListener("click" , function(){
    var pass = document.getElementById('password');
    if(pass.type == "password"){
        pass.type = "text";
        eye.classList.add("fa-eye")
        eye.classList.remove("fa-eye-slash")
    }
    else{
        pass.type = "password"
        eye.classList.remove("fa-eye")
        eye.classList.add("fa-eye-slash")
    }
})
function genPass(){
    var len = 15;
    var char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(){}[]|';
    passval = "";
    for(var i = 0, n = char.length; i < len; ++i){
        passval += char.charAt(Math.floor(Math.random() * n));
    }
    return passval;
}

var passwordGen = document.getElementById("pass-gen");
passwordGen.addEventListener("click" , function(){
    document.getElementById('password').value = genPass();
})