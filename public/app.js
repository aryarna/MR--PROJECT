
// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARxYvtfsCgbhvP5srmOxv9jZ9EqoOKWsA",
    authDomain: "moneyproject-7c560.firebaseapp.com",
    projectId: "moneyproject-7c560",
    storageBucket: "moneyproject-7c560.appspot.com",
    messagingSenderId: "270202522248",
    appId: "1:270202522248:web:b4cc925df9bc3169eaed3d",
    measurementId: "G-H53TG5NGY6"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const messageElement = document.getElementById('message');

// Function to send OTP
function sendOTP(email) {
    return auth.sendSignInLinkToEmail(email, {
        url: 'http://localhost:8000/finishSignUp.html', // URL to redirect after sign-in
        handleCodeInApp: true
    });
}

// Handle form submission
document.getElementById('otpForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;

    sendOTP(email)
        .then(() => {
            // Save the email locally so we can use it to complete the sign-in
            window.localStorage.setItem('emailForSignIn', email);
            messageElement.textContent = 'OTP sent to your email!';
            messageElement.style.color = 'green';
        })
        .catch((error) => {
            console.error('Error sending OTP:', error);
            messageElement.textContent = `Error: ${error.message}`;
            messageElement.style.color = 'red';
        });
});
