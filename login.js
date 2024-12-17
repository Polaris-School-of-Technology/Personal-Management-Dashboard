let currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (!currentUser) {
   alert("No user is logged in. Redirecting to login page...");
   window.location.href = "first.html";
} else {
   
   let welcomeMessage = document.getElementById("welcome-message");
   welcomeMessage.textContent = `Hello, ${currentUser.firstName} ${currentUser.lastName}! Welcome to your profile.`;
}
first.css