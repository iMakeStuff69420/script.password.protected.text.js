function checkPassword() {
  var password = document.getElementById("password").value;

  if (password == "1234") {
    document.getElementById("message").style.display = "block";
  } else {
    alert("Incorrect password. Please try again.");
  }
}
