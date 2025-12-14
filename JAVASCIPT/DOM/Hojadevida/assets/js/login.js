document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    //leer usuarios guardados
    const users = JSON.parse(localStorage.getItem("users")) || [];

    //buscar usuario con correo o username 
    const userFound = users.find(
        u => (u.email === email || u.username === email) && (u.password === password));

    console.log("Usuario registrados:", users);
    console.log("Usuario ingresado:", email, password);

    if (!userFound) {
        alert("Correo o contraseña incorrectos. Inténtalo de nuevo.");
        return;
    }

    //guardar usuario actual 
    localStorage.setItem("currentUser", JSON.stringify(userFound));
    alert("Inicio de sesión exitoso. ¡Bienvenido " + userFound.nombres + "!");

    //redirigir a la página principal
    window.location.href = "dashboard.html";
});

//mostrar/ocultar contraseña 
document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        this.textContent = "Ocultar";
    } else {
        passwordInput.type = "password";
        this.textContent = "Mostrar";
    }
    
})