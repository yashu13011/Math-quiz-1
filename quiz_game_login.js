function addUser(){
    username_name = document.getElementById("user_name").value;
    password_name = document.getElementById("password").value;

    localStorage.setItem("Username" , username_name);
    localStorage.setItem("Password" , password_name);
}