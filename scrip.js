
const button = document.getElementById("reset-button");

button.onclick = function () {
  const txtArea = document.querySelector("[name='user-input']");
  txtArea.value = "";
};