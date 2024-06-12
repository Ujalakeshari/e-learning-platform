document.addEventListener('DOMContentLoaded', () => {
    const eyeIcons = document.querySelectorAll('.eye-icon');
    const passwordFields = document.querySelectorAll('.password');

    eyeIcons.forEach((eyeIcon, index) => {
        eyeIcon.addEventListener('click', () => {
            const passwordField = passwordFields[index];
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                eyeIcon.classList.remove('bx-hide');
                eyeIcon.classList.add('bx-show');
            } else {
                passwordField.type = 'password';
                eyeIcon.classList.remove('bx-show');
                eyeIcon.classList.add('bx-hide');
            }
        });
    });
});
