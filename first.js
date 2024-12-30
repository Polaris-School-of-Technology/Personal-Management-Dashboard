let loginbtn = document.getElementById("login_btn");
let signUpPage = document.getElementById("signup");
let logInPage = document.getElementById("login");
let signupbtn = document.getElementById("signup_btn");
let signupSubmit = document.getElementById("signupbtn");
let loginSubmit = document.getElementById("loginbtn");


loginbtn.addEventListener('click', () => {
   signUpPage.style.display = 'none';
   logInPage.style.display = 'block';
});


signupbtn.addEventListener('click', () => {
   signUpPage.style.display = 'block';
   logInPage.style.display = 'none';
});


signupSubmit.addEventListener('click', (e) => {
   e.preventDefault();

   
   let firstName = document.getElementById("firstName").value;
   let lastName = document.getElementById("lastName").value;
   let email = document.getElementById("email").value;
   let password = document.getElementById("password").value;

   if (!email || !password || !firstName || !lastName) {
      alert("Please fill in all fields!");
      return;
   }

   if (localStorage.getItem(email)) {
      alert("User already registered!");
      return;
   }

   
   let newUser = { firstName, lastName, password, email };
   localStorage.setItem(email, JSON.stringify(newUser));
   alert("Registration successful!");
   loginbtn.click();
});


loginSubmit.addEventListener('click', (e) => {
   e.preventDefault();

   let email = document.getElementById("email_login").value;
   let password = document.getElementById("password_login").value;

   if (!email || !password) {
      alert("Please fill in all fields!");
      return;
   }

   
   let userData = JSON.parse(localStorage.getItem(email));

   if (!userData) {
      alert("User not found. Please sign up first.");
      return;
   }

   if (userData.password === password) {
      alert("Login successful!");
      localStorage.setItem("isLoggedIn", true); 
      window.location.href = "profile.html"; 
   } else {
      alert("Invalid email or password.");
   }
});


loginSubmit.addEventListener('click', (e) => {
    e.preventDefault();
 
    let email = document.getElementById("email_login").value;
    let password = document.getElementById("password_login").value;
 
    if (!email || !password) {
       alert("Please fill in all fields!");
       return;
    }
 
    
    let userData = JSON.parse(localStorage.getItem(email));
 
    if (!userData) {
       alert("User not found. Please sign up first.");
       return;
    }
 
    if (userData.password === password) {
       alert("Login successful!");
       localStorage.setItem("isLoggedIn", true); 
       localStorage.setItem("currentUser", JSON.stringify(userData)); 
       window.location.href = "profile.html"; 
    } else {
       alert("Invalid email or password.");
    }
 });