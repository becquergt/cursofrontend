document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !email.includes('@')) {
        alert('Correo inválido');
    } else if (!password) {
        alert('Contraseña inválida');
    } else {
        alert('Sesión iniciada');
    }
});
