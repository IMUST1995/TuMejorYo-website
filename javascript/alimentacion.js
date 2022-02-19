
function validarFormulario(){
    let edad = document.getElementById("edad").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let formCalculator = document.getElementById("formCalculator")
    let advertencia = document.createElement("p")
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    if((parseInt(edad) <= 0) || (edad >= 120)){
        advertencia.innerHTML = "<p class= 'text-white bg-danger text-center py-1'>Ingresa una edad válida</p>"
        formCalculator.appendChild(advertencia)
    }
    else if((edad) == ""){
        advertencia.innerHTML = "<p class= 'text-white bg-danger text-center py-1'>El campo edad está vacío</p>"
        formCalculator.appendChild(advertencia);
    }
    else if((parseInt(altura) <= 100) || (altura >= 230)){
        advertencia.innerHTML = "<p class= 'text-white bg-danger text-center py-1'>Ingresa una altura válida</p>"
        formCalculator.appendChild(advertencia)
    }
    else if((altura) == ""){
        advertencia.innerHTML = "<p class= 'text-white bg-danger text-center py-1'>El campo altura está vacío</p>"
        formCalculator.appendChild(advertencia)
    }
    else if((parseInt(peso) <= 0) || (peso >= 400)){ 
        advertencia.innerHTML = "<p class= 'text-white bg-danger text-center py-1'>Ingresa un peso válido</p>"
        formCalculator.appendChild(advertencia)
    }
    else if((peso) == ""){
        advertencia.innerHTML = "<p class= 'text-white bg-danger text-center py-1'>El campo peso está vacío</p>"
        formCalculator.appendChild(advertencia)
    }
    else if((nombre) == ""){
        advertencia.innerHTML = "<p class= 'text-white bg-danger text-center py-1'>El campo nombre está vacío</p>"
        formCalculator.appendChild(advertencia)
    }
    else if((apellido) == ""){
        advertencia.innerHTML = "<p class= 'text-white bg-danger text-center py-1'>El campo apellido está vacío</p>"
        formCalculator.appendChild(advertencia)
    }
    else if((email) == ""){
        advertencia.innerHTML = "<p class= 'text-white bg-danger text-center py-1'>El campo email está vacío</p>"
        formCalculator.appendChild(advertencia)
    }
    else{
        calculadora(edad, peso, altura, formCalculator)
    }
}

function calculadora (edad, peso, altura, objetivo){
    let genero = "male"
    let resultado = 0
    if(genero == "male"){
        resultado = ((10 * parseInt(peso)) + (6.25 * parseInt(altura)) - (5 * parseInt(edad)) + 5).toFixed()
    }
    else if(genero == "female"){
        resultado = ((10 * parseInt(peso)) + (6.25 * parseInt(altura)) - (5 * parseInt(edad)) - 161).toFixed()
    }
    resultado = `<strong>${resultado}</strong> Calorias`
    let print = document.createElement("p")
    print.innerHTML = resultado
    print.id = "resultadoCalculadora"
    objetivo.appendChild(print)

};
/* si se cumplen las condiciones la funcion validarFormulario() ejecutara y pasara los parametros a la funcion calculadora(); */
document.getElementById("enviar").addEventListener("click", validarFormulario);
