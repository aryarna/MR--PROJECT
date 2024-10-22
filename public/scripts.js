// Handle login form submission
$('#loginForm').submit(function(event) {
    event.preventDefault();
    let loginUsername = $('#loginUsername').val();
    let loginPassword = $('#loginPassword').val();
    
    // Simulate login validation (replace with actual backend logic)
    // Example: Check if username and password match
    if (loginUsername === "demo" && loginPassword === "demo") {
      $('#loginError').addClass('d-none'); // Hide error message if shown
      $('#loginSuccess').removeClass('d-none'); // Display success message
      setTimeout(function() {
        window.location.href = 'home.html'; // Redirect after delay
      }, 2000); // 2000 milliseconds = 2 seconds (adjust as needed)
    } else {
      $('#loginSuccess').addClass('d-none'); // Hide success message if shown
      $('#loginError').removeClass('d-none'); // Display error message
    }
  });
  