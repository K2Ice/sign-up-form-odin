const submitButton = document.getElementById('btnSubmit');


const username = document.getElementById('username');
const usernameError = document.querySelector('#username + span');

const lastname = document.getElementById('lastname');
const lastnameError = document.querySelector('#lastname + span');

const email = document.getElementById('email');
const emailError = document.querySelector('#email + span');

const phonenumber = document.getElementById('phonenumber');
const phonenumberError = document.querySelector('#phonenumber + span');


const password = document.getElementById('password');
const passwordError = document.querySelector('#password + span');


const confirmPassword = document.getElementById('confirmPassword')
const confirmPasswordError = document.querySelector('#confirmPassword + span');

const handleSubmit = (e) => {
  e.preventDefault();


  if(username.value.length !== 0){
    usernameError.style.display = "none";
  }else{
    usernameError.style.display = "block";
  }


  if(lastname.value.length !== 0){
    lastnameError.style.display = "none";
  }else{
    lastnameError.style.display = "block";
  }


  if(email.value.length !== 0 && email.value.indexOf('@') !== -1){
    emailError.style.display = "none";
  }else{
    emailError.style.display = "block";
  }


  if(phonenumber.value.length !== 0){
    phonenumberError.style.display = "none";
  }else{
    phonenumberError.style.display = "block";
  }


  if(password.value.length !== 0){
    passwordError.style.display = "none";
  }else{
    passwordError.style.display = "block";
  }

  if(password.value === confirmPassword.value){
    confirmPasswordError.style.display = "none";
  } else{
    confirmPasswordError.style.display = "block";

  }
}

submitButton.addEventListener('click', handleSubmit)