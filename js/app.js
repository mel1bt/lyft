
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
   
  
  $("#valCelular").click(function(evento){
    
    
    var numeroAleatorio = Math.random();
    var codigoVal = Math.floor(numeroAleatorio*89+99);
    var numValido = localStorage.setItem("numValidacion", codigoVal);
    alert("LAB -  "+localStorage.getItem("numValidacion"));
    location.href="validacion.html";
  });
    
  $("#btnValido").click(function(evento){
    var numVal = localStorage.getItem("numValidacion");
    console.log(numVal);
    var numIngresado = $("#numVal1").val() + $("#numVal2").val() + $("#numVal3").val();
    //console.log(numIngresado);
    if(numVal === numIngresado){
      //alert("bienn");
      location.href="sign_up2.html";
    }
  });
  
  $("#btnRegistro").click(function(evento){
    var nombre = localStorage.setItem("nameReg", $("#nameVal").val);
    var apellido = localStorage.setItem("apeReg", $("#lasVal").val);
    var email = localStorage.setItem("mailReg", $("mailVal").val);
    alert("bien"+ localStorage.getItem("nameReg"));
    //location.href="home_map.html";
  });
  /*
  $("#map").googleMap({
    zoom: 10,
    coords: [48.895651, 2.290569], 
    type: "ROADMAP"
  });*/
  
  
  
   
});
