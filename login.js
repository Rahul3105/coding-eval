function login(e) {
  e.preventDefault();
  let form = document.getElementById("login_form");
  let email = form.email.value;
  let password = form.password.value;
  authenticate(email, password);
}
function authenticate(email, password) {
  let signupLocalSto = localStorage.getItem("signup");
  let bool = false;
  if (signupLocalSto == null) {
    signupLocalSto = [];
  } else {
    signupLocalSto = JSON.parse(signupLocalSto);
  }
  for (let i = 0; i < signupLocalSto.length; i++) {
    if (
      signupLocalSto[i].email == email &&
      signupLocalSto[i].password == password
    ) {
      bool = true;
      break;
    }
  }
  if (bool) {
    alert("you have login succesfully");
  } else {
    alert("sorry we could not find any account with this info");
  }
}
