function signup(e) {
  e.preventDefault();
  let form = document.getElementById("signupForm");
  let name = form.name.value;
  let email = form.email.value;
  let password = form.password.value;
  let rePassword = form.rePassword.value;
  if (name == "") alert("Please type your name");
  else if (email == "") alert("Please type your email");
  else if (password == "") alert("Please type your pass");
  else if (rePassword == "") alert("Please type your re-pass");
  else if (password != rePassword) {
    alert("Your password is not matching");
    form.password.value = "";
    form.rePassword.value = "";
  } else {
    addSignupInfoLocalSto(name, email, password);
    form.password.value = "";
    form.rePassword.value = "";
    form.name.value = "";
    form.email.value = "";
  }
}
function addSignupInfoLocalSto(name, email, password) {
  let objOfSignup = new Signup(name, email, password);
  let signupLocalSto = localStorage.getItem("signup");
  let bool = true;
  if (signupLocalSto == null) {
    signupLocalSto = [];
  } else {
    signupLocalSto = JSON.parse(signupLocalSto);
  }
  for (let i = 0; i < signupLocalSto.length; i++) {
    if (signupLocalSto[i].email == email) {
      bool = false;
      break;
    }
  }
  if (bool) {
    signupLocalSto.push(objOfSignup);
    localStorage.setItem("signup", JSON.stringify(signupLocalSto));

    alert("you have signed up successfully");
  } else {
    alert("user already exist");
  }
}

function Signup(n, e, p) {
  this.name = n;
  this.email = e;
  this.password = p;
}
