//validaciones del Menu kawaii
function validaciones() {
    let user = "cris"
    let pass2 = "4321"
    var nombre = document.getElementById("nombre").value;
    var contrasena = document.getElementById("passw").value;
    var mensaje = document.getElementById("MensajeError");
    var mensaje2 = document.getElementById("MensajeError2");
    mensaje.innerHTML=""
    mensaje2.innerHTML=""
    let acum = 0;
    var arreglo = [nombre, contrasena];
    var arreglo2 = [mensaje, mensaje2];
    for (let i = 0; i < arreglo.length; i++){
        if (arreglo[i] =="") {
            arreglo2[i].innerHTML = "caja faltante"
        } else {
            acum += 1;
        }
    }
    if(acum == arreglo.length){
        if (nombre == user && contra == pass2){
            window.location.href = "Menu.html"
        } else {
            alert("Contraseña Incorrecta")
        }
    } else {

    }
}

function validacion_capital(){
    var capital = document.getElementById("capital").value;
    var mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = "";

    if (capital === ""){
        mensaje.innerHTML = "Caja Vacia";
    } else{
        let verificar = isNaN(capital);
        if (verificar === true) {
            mensaje.innerHTML = "Caja Vacia";
        } else {
            let capital2 = Number.parseFloat(capital);
            if (!Number.isFinite(capital2) {
                mensaje.innerHTML = "El valor no es un numero Decimal";
                return;
            }
            capital2 = capital2.toFixed(2);
            if (capital2 <= 0){
                mensaje.innerHTML = "El numero debe ser mayor a 0";
            } else if (capital2 > 10000){
                mensaje.innerHTML = "El número debe ser menor o igual a 10000.";
            } else {
                
            }
        }
    }
}