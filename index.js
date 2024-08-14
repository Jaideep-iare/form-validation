  //validate username

function check_the_name(name_of_the_user) {
  if (name_of_the_user.value.length < 5) {
    name_of_the_user.setCustomValidity(
      "Name should be atleast five characters!"
    );
    name_of_the_user.reportValidity();
  } else {
    name_of_the_user.setCustomValidity("");
  }
}

    //validate phone number
function check_the_phone(phone) {

  if(isNaN(phone.value)){
    phone.setCustomValidity(
      "Phone number should only include numbers. Not character"
    );
    phone.reportValidity();
  }  
  else if (phone.value.length != 10) {
    phone.setCustomValidity(
      "Phone number should be 10 digits! You entered "+phone.value.length+" digits"
    );
    phone.reportValidity();
  }
  
  else {
    phone.setCustomValidity("");
  }
}

    //validate email
function check_the_email(email) {
  if (email.value.includes("@") && email.value.includes(".")) {
    email.setCustomValidity("");
  }
  
  else {
    email.setCustomValidity("Invalid Email. You should include @ and .");
    email.reportValidity();
  }
}


    //validate password
function check_the_password(password, name_of_the_user) {
  if (password.value.length<8) {
    password.setCustomValidity("password is not strong. Enter atleast 8 characters");
    password.reportValidity();
  }
  else if(password.value == "password"){
    password.setCustomValidity("password is not strong.");
    password.reportValidity();
  }
  else if(password.value==name_of_the_user.value){
    password.setCustomValidity("Username cannot be Password");
    password.reportValidity();
  }
  else {
    password.setCustomValidity("");
  }
}

    //validate confirm password
function check_the_cpassword(password, cpassword) {
  if (password.value != cpassword.value) {
    cpassword.setCustomValidity("Confirm Password should match Entered password!");
    cpassword.reportValidity();
    
  } else {
    cpassword.setCustomValidity("");
  }
}





var phone = document.getElementById("phone");
var password = document.getElementById("password");
var cpassword = document.getElementById("confirm-password");
var email = document.getElementById("email");
var name_of_the_user = document.getElementById("name");

name_of_the_user.addEventListener("input", () =>
  check_the_name(name_of_the_user)
);
email.addEventListener("input", () => check_the_email(email));
phone.addEventListener("input", () => check_the_phone(phone));
password.addEventListener("input", () => check_the_password(password,name_of_the_user));
cpassword.addEventListener("input", () => check_the_cpassword(password, cpassword));



