$(document).ready(function(){
  $("#sigValidacion").click(function(evento){
    location.href="sign_up.html";
  });
  $("#celular").keydown(function(evento) {
		var ascii = evento.keyCode;
		if (ascii == 8 || (ascii >= 48 && ascii <= 57)) {
			return true;
		} else {
			return false;
		}
	});
  $("#celular").keyup(function(evento) {
    var longitud = $(this).val().length;
		if (longitud == 9) {
			$("#valCelular").removeAttr("disabled");
		} else {
			$("#valCelular").attr("disabled", "disabled");
		}
	});
   
  var codigoVal="";
  $("#valCelular").click(function(evento){
    
    location.href="validacion.html";
     var numeroAleatorio = Math.random();
  codigoVal = "LAB-"+ Math.floor(numeroAleatorio*1000);
    alert("Tu codigo para validar es" + codigoVal);
  });
  

  
  $("#btnValido").click(function(evento){
    
    console.log(codigoVal);
    if($("#numValido").val() == codigoVal){
      location.href="sign_up2.html";
    }
  });
  
   
});
/*
Funcionaliadaes para lyft
 validar para que solo se ingrese ##
 Validar que sean 9 # como max.
 Generar un codigo aleatorio con la estructura LAB-XYZ
 Validar lo obvio
 floor
 math round
 math 
 random
 */
/*

// Funcionalidades para Lyft

// - Validar que solo se ingresen #s
// - Validar que sean 9 #s como max.
// - Generar un código aleatorio con la estructura LAB-XYZ
// - Validar lo obvio

$(document).ready(function() {
	$("#numero").keydown(function(evento) {
		var ascii = evento.keyCode;
		if (ascii == 8 || (ascii >= 48 && ascii <= 57)) {
			return true;
		} else {
			return false;
		}
	});

	$("#numero").keyup(function(evento) {
		var longitud = $(this).val().length;
		if (longitud == 9) {
			$("#siguiente").attr("href", "signup.html");
		} else {
			$("#siguiente").removeAttr("href");
		}
	});
});*/