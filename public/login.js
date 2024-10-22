document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Retrieve stored user data
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const loginUsername = document.getElementById('loginUsername').value;
  const loginPassword = document.getElementById('loginPassword').value;
  const loginMessage = document.getElementById('loginMessage');

  // Check if user exists and credentials match
  if (storedUser && storedUser.username === loginUsername && storedUser.password === loginPassword) {
    loginMessage.innerHTML = '<span class="text-success">Login successful!</span>';

    // Redirect to home page
    setTimeout(() => {
      window.location.href = 'home.html';
    }, 2000); // 2 seconds delay before redirect
  } else {
    loginMessage.innerHTML = '<span class="text-danger">Login unsuccessful. Please check your username and password.</span>';
  }
});


/*
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;
    const loginMessage = document.getElementById('loginMessage');
  
    if (storedUser && storedUser.username === loginUsername && storedUser.password === loginPassword) {
      loginMessage.innerHTML = '<span class="text-success">Login successful!</span>';
      // Redirect to the homepage or another page
      setTimeout(() => {
        window.location.href = 'home.html';
      }, 2000);
    } else {
      loginMessage.innerHTML = '<span class="text-danger">Login unsuccessful. Please check your username and password.</span>';
    }
  });
  */