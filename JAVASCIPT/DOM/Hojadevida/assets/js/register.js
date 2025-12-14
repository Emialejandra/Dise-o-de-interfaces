const formRegistro=document.getElementById('registroForm');

formRegistro.addEventListener("submit",function(e){
    e.preventDefault();

    const user={
        nombres:document.getElementById('nombres').value,
        apellidos:document.getElementById('apellidos').value,
        cedula:document.getElementById('cedula').value,
        fechaNac:document.getElementById('fecha').value,
        email:document.getElementById('email').value,
        direccion:document.getElementById('direccion').value,
        password:document.getElementById('password').value
    };
    console.log("Usuario registrado:",user);

    //leer usuarios previos
    const users=JSON.parse(localStorage.getItem("users"))||[];

    //agregar nuevo usuario
    users.push(user);

    //guardar en localStorage
    localStorage.setItem("users",JSON.stringify(users));
    alert("Registro exitoso. Ahora puedes iniciar sesión.");

    //redirigir al login 
    window.location.href="login.html";
    
});