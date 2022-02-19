const imagenes = [{nombre : "taburete", img: "TabureteSalud.jpg"}]


$(document).ready(function(){ 
    //pagina de inicio
    $('#principal').html('<div class="container-fluid p-4 d-flex justify-content-center align-items-center flex-column"><h1 class="mb-5 text-center m-5">Tu mejor yo</h1><p class="m-3">En este sitio encontrarás la información mas relevante en cuanto a fitness, entrenamiento, nutrición, idiomas, mentalidad y como avanzar en las áreas mas importantes de tu vida, información la cuál me ha llevado recopilar mas de 10 años de estudio y experiencia aplicandola a mi mismo y a mis clientes.</p><P class="m-3">Disclaimer: <strong>No soy médico,</strong>(aunque estudie medicina por 3 años donde aprendí de anatomía, bioquímica y fisiología) Por favor consulta un médico antes de aplicar los conceptos que encontraras en este sitio <del>Si tu médico tiene sobrepeso, es cardiologo y es hipertenso, o simplemente no aplica nada de los consejos que te da, cambia de médico</del></P></div>');
    $("#principal").hide().fadeIn(3500);
  
    //seccion descanso y recuperacion
    $("#descansoEncabezado").css("background", "#16222a50").css('opacity' , '0')
   

    $('#descansoBody').html(`<div class="mb-4 container-fluid" style="width: 33%"><img class="img-fluid imgContenido" id="taburete" src="../img/salud/${imagenes[0].img}"></div><p class="p-3 m-2">La falta de sueño causa multitud de accidentes y lesiones, además elevar el riesgo de casi todas las enfermedades crónicas conocidas. Por si esto fuera poco, dificulta el progreso tanto de la ganancia muscular como de la pérdida de peso.</p>`); 

    
//animaciones---------------------->
$('#calculadora').css('opacity', 0.1)
        
let calculadora = document.getElementById('calculadora');
let alturaCalculadora = calculadora.offsetTop;

let descansoEncabezado = document.getElementById('descansoEncabezado');
let alturaDescansoEncabezado = descansoEncabezado.offsetTop;

$(window).scroll(function(){
    if($(this).scrollTop() > alturaDescansoEncabezado - 200){
        $('#descansoEncabezado').slideDown(2000).animate({
            opacity: '1',
            }, 2000)
        }

        if($(this).scrollTop() > alturaCalculadora){
            $('#calculadora').slideDown(2000).animate({
            opacity: '1',
            width: '50rem',
            }, 2000)
        }
    })
    
});