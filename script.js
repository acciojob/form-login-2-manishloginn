//your JS code here. If required.

const submitButton = document.getElementById("submitButton");
const data = {};
 
function showAlert() {
  event.preventDefault();
  data.firstName = document.getElementById("firstName").value;
  data.lastName = document.getElementById("lastName").value;
  data.phoneNumber = document.getElementById("phoneNumber").value;
  data.emailID = document.getElementById("emailID").value;
 
  alert(
    "First Name: " +
      data.firstName +
      "\nLast Name: " +
      data.lastName +
      "\nPhone Number: " +
      data.phoneNumber +
      "\nEmail ID: " +
      data.emailID
  );
}
 
submitButton.addEventListener("click", showAlert);
