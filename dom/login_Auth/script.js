// script.js

// Function to handle form submission
function handleLogin(event) {
  event.preventDefault(); // Prevent default form submission

  // Get username and password from form
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Retrieve user data from localStorage
  var users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if the user exists and credentials match
  var authenticatedUser = users.find(
    (user) => user.username === username && user.password === password
  );

  if (authenticatedUser) {
    alert("Login successful!");
    // You can redirect or perform any action after successful login
  } else {
    alert("Invalid username or password");
  }
}

// Attach form submission handler
document.getElementById("loginForm").addEventListener("submit", handleLogin);
// Function to handle user registration

function handleRegistration(event) {
  var username = document.getElementById("addusername").value;
  var password = document.getElementById("addpassword").value;

  // Retrieve existing users from localStorage
  var users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if username is already taken
  var existingUser = users.find((user) => user.username === username);

  if (existingUser) {
    alert("Username already exists. Please choose a different one.");
  } else {
    // Add new user to the list
    users.push({ username: username, password: password });

    // Store updated user list in localStorage
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful!");
  }
}
document
  .getElementById("addUser")
  .addEventListener("submit", handleRegistration);
