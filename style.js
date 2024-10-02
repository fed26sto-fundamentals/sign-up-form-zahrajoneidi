
function validatePasswords() {
    console.info('salam')
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    // const passwordError = document.getElementById('passwordError');

    // Clear any previous errors
    // passwordError.textContent = '';
    document.getElementById('password').classList.remove('is-invalid');
    document.getElementById('confirmPassword').classList.remove('is-invalid');

    if (password !== confirmPassword) {
        // passwordError.textContent = 'Passwords do not match.';
        document.getElementById('password').classList.add('is-invalid');
        document.getElementById('confirmPassword').classList.add('is-invalid');
        return false; // Prevent form submission
    }

    return true; // Allow form submission if passwords match
}