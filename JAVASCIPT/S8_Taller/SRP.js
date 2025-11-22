// aplicando el SRP 
class Usuario { 
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
  }
}

class ServicioUsuario {
  guardarEnBD(usuario) {  }
}

class ValidadorUsuario {
  validar(usuario) {  }
}

class Notificador {
  enviarCorreo(usuario) {  }
}
