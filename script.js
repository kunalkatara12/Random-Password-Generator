var password = document.getElementById("password");
function generatePassword() {
  var chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 12;
  var newPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    var rand = Math.floor(Math.random() * chars.length);
    newPassword += chars.substring(rand, rand + 1);
  }
  password.value = newPassword;
}

function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 999);
  document.execCommand("copy");
}
