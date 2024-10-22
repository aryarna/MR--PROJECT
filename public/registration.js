document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Simulate registration (for demonstration)
    const registrationMessage = document.getElementById("registrationMessage");
    registrationMessage.textContent = `Registration successful for ${username} with email ${email}. Please login.`;
    registrationMessage.style.color = "green";
  
    // Redirect to login page after a delay
    setTimeout(function() {
      window.location.href = 'login.html';
    }, 2000); // 2 seconds delay
  });
  