function showMessage() {
  var password = prompt("Enter the password:");
  if (password == "password") {
    document.getElementById("secret-message").style.display = "block";
  }
}
