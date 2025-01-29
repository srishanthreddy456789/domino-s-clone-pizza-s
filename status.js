let redirectFlag = JSON.parse(localStorage.getItem("loggedin"));

if (redirectFlag === false) {
  window.location.href = "login.html";
}

let showStatus = null;
window.onload = myFunction;
function myFunction() {
  console.log("in my funmc also here");
  showStatus = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("paymentstatus").style.display = "block";
}
