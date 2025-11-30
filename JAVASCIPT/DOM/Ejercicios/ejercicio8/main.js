function validar(){
    let nombre = document.getElementById("nombre").value;

    if(nombre === ""){
        document.getElementById("error").textContent = "El campo nombre no puede estar vacío.";
    }else{
        document.getElementById("error").textContent = "";
        alert("Formulario enviado correctamente.");
    }
}

