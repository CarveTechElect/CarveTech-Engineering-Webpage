// Passport Upload
var imageBox = document.getElementById(imgBox);

var loadFile = function(event) {
  imgBox.style.backgroundImage = "url(" +URL.createObjectURL(event.target.files[0]) + ")";
}


// Form
var form = document.getElementById("signup");
var form = document.form["SignUp"]; // saving the form element

form.addEventListener("submit", (event) {
event.preventDefault(); // stops the form from being submitted
});

// Error Messages
var nameError = document.getElementById("name-error");
var addressError = document.getElementById("address-error");
var localGovtError = document.getElementById("localGovt-error");
var stateError = document.getElementById("state-error");
var countryError = document.getElementById("country-error");
var telError = docuemnt.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var dobError = document.getElementById("dob-error");
var genderError = document.getElementById("gender-error");
var maritalError = document.getElementById("marital-error");
var religionError = docuemnt.getElementById("religion-error");
var courseError = document.getElementById("course-error");
var durationError = document.getElementById("duration-error");
var timeError = document.getElementById("time-error");
var checkError = document.getElementById("checkbox-error");
var submitError = document.getElementById("submit-error");

// form validation functions
function validateName() {
// Name
var fullName = document.getElementById("fullname").value; // stores the value of fullname in a variable

// condition for validation
if(fullName.length == 0) { // condition to check if input is empty 
    nameError.innerHTML = "Name is required";
}
if(!fullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)) {
/* Checks is first Character is alphabet[A-Za-z], then one space \s{1},
then any character from A-Z */
return false;

nameError.innerHTML = "Write Full Name";
return false;
}
nameError.innerHTML = "<i class="fa-regular fa-circle-check"></i>"; // if no error in alpha is not met
return true;
}


// Contact Information
var address = document.getElementById("address");
var telephone = document.getElementById("telephone");
var email = document.getElementById("email");

// Personal Data
var dateOfBirth = document.getElementById("dob");
var sex = document.getElementById("genderStatus");
var maritalStatus = document.getElementById("maritalStatus");
var religion = document.getElementById("select_religion")
var nationality = document.getElementById("country");
var stateOfOrigin = document.getElementById("stateOfOrigin");
var localGovtArea = document.getElementById("local");

// Course Information
var selectCourse = document.getElementById("select_course");
var courseLength = document.getElementById("course_length");
var courseDuration = document.getElementById("course_duration");
var checkBox = document.getElementById("checkbox");

