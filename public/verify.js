const auth = firebase.auth();

// Function to verify OTP
function verifyOTP(verificationCode) {
    const email = window.localStorage.getItem('emailForSignIn');
    return auth.signInWithEmailLink(email, verificationCode);
}

// Handle form submission
document.getElementById('verifyForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const verificationCode = document.getElementById('verificationCode').value;

    verifyOTP(verificationCode)
        .then(() => {
            // Clear email from localStorage
            window.localStorage.removeItem('emailForSignIn');
            alert('Email verified successfully!');
        })
        .catch((error) => {
            console.error('Error verifying OTP:', error);
        });
});
