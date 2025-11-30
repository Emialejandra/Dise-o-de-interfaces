let formRegistro=document.getElementById('formRegistro');
formRegistro.addEventListener('submit',function(e){
    e.preventDefault();
    const datos={
        nombre: document.getElementById('regNombres').value,
        apellidos: document.getElementById('regApellidos').value,
        cedula: document.getElementById('regCedula').value,
        fechaNacimiento: document.getElementById('regfecha').value,
        email: document.getElementById('regEmail').value,
        direccion: document.getElementById('regdireccion').value,
        usuario: document.getElementById('regusuario').value,
        password: document.getElementById('regPassword').value
    };
    console.log('Datos capturados: ', datos);
    // guardar en localStorage como JSON
    localStorage.setItem('usuario', JSON.stringify(datos));
    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    formRegistro.reset();
});

//LOGIN
let formLogin=document.getElementById('formLogin');
formLogin.addEventListener('submit',function(e){
    e.preventDefault();

    const usuarioIngresado=document.getElementById('loginUsuario').value;
    const passwordIngresado=document.getElementById('loginPassword').value;    
    const usuarioGuardado=JSON.parse(localStorage.getItem('usuario'));

    if(!datosGuardados){
        alert('No hay usuarios registrados');
        return;
    }
    if(usuarioIngresado===datosGuardados.usuario&& passwordIngresado===datosGuardados.password){
        mostrarSistema(datosGuardados);

    } else{
        alert('Usuario o contraseña incorrectos. Inténtalo de nuevo.');
    }
});

// mostrar sistema después del login
function mostrarSistema(datos){
document.getElementById('registroCard').classList.add('hidden');
document.getElementById('loginCard').classList.add('hidden');

document.getElementById('sistemaCard').classList.remove('hidden');

document.getElementById('bienvenida').textContent='Hola,' + datos.nombre + ' ' + datos.apellidos;
// mostrar datos en una lista 
const lista=document.getElementById('datosUsuario');
lista.innerHTML=`
    <li><strong>Cedula:</strong> ${datos.cedula}</li>
    <li><strong>Fecha de Nacimiento:</strong> ${datos.fechaNacimiento}</li>
    <li><strong>Email:</strong> ${datos.email}</li>
    <li><strong>Dirección:</strong> ${datos.direccion}</li>
    <li><strong>Usuario:</strong> ${datos.usuario}</li>
`;
}

// cerrar sesión
document.getElementById('cerrarSesion').addEventListener('click', ()=>{
    document.getElementById('sistemaCard').classList.add('hidden');
    document.getElementById('registroCard').classList.remove('hidden');
    document.getElementById('loginCard').classList.remove('hidden');
});