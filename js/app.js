var btnRefInicial = function(evento){
	location.href="sign_up.html";
};

var valNumCel = function(){
	var ascii = evento.keyCode;
		if (ascii == 8 || (ascii >= 48 && ascii <= 57)) {
			return true;
		} else {
			return false;
		}
};

var valLongCel =function(){
	var longitud = $(this).val().length;
		if (longitud == 9) {
			$("#verifCelular").removeAttr("disabled");
		} else {
			$("#verifCelular").attr("disabled", "disabled");
		}
};

var crearNumAle = function(){
	var numeroAleatorio = Math.random();
    var codigoVal = Math.floor(numeroAleatorio*89+99);
    var numValido = localStorage.setItem("numValidacion", codigoVal);
    alert("LAB -  "+localStorage.getItem("numValidacion"));
    location.href="validacion.html";
};

var valNumCode = function(){
	var ascii = evento.keyCode;
		if (ascii == 8 || (ascii >= 48 && ascii <= 57)) {
			return true;
		} else {
			return false;
		}
};

var valFocusCode = function(evento){
	var lengthCode = $(this).val().length;
	var ascii = evento.keyCode;
	if(lengthCode==1){
		$(this).next().focus();
	}
	if(ascii==8){
		$(this).prev().focus();
	}
};

var resetCodigo = function(){
	var numeroAleatorio = Math.random();
    var codigoVal = Math.floor(numeroAleatorio*89+99);
	window.localStorage.setItem("numValidacion",codigoVal);
	alert("LAB - " + window.localStorage.getItem("numValidacion"));
	$(".numValido").val("");
	$(".numValido").eq(0).focus();
	
};

var validarCode = function(evento){
	var numVal = localStorage.getItem("numValidacion");
    console.log(numVal);
    var numIngresado = $("#numVal1").val() + $("#numVal2").val() + $("#numVal3").val();
    if(numVal === numIngresado){
      location.href="sign_up2.html";
    }
};

var transfCadena = function(){
	var valor = $(this).val();
	var cadena = valor.charAt(0).toUpperCase() + valor.substr(1,valor.length).toLowerCase();
	$(this).val(cadena);
}

var valDatosForm = function(evento){
	/*
	var ascii = evento.keyCode;
		if ((ascii<97 || ascii>122) && (ascii<65 || ascii>90) && ascii!=45 && ascii!=241 && ascii!=209 && ascii!=32 && ascii!=225 && ascii!=233 && ascii!=237 && ascii!=243 && ascii!=250 && ascii!=193 && ascii!=201 && ascii!=205 && ascii!=211 && ascii!=218 && ascii!=91){
		return false;
	}
	else{
		return true;
	}
*/
};

var msjAlerta = $("#msjAlerta");

var validarLongName = function(){
	validar($("#nameVal"), 22);

};

var validarLongLast = function(){
	validar($("#lastVal"), 22);

};

var enviarDatos = function(){
	var regexCorreo = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		var validacionCorreo = $("#input-correo").val().match(regexCorreo);


	if(validacionCorreo){
      location.href="home_maps.html";
	}
};


function validar (dato, num){
	var elem = dato;
	if(elem) elem.val(elem.val().substr(0,num));
};

var enviarDatos = function(){
	localStorage.setItem("nameReg", $("#nameVal").val());
    localStorage.setItem("apeReg", $("#lasVal").val());
    localStorage.setItem("mailReg", $("mailVal").val());
	var emailRegex=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!emailRegex.test($("#mailVal").val())) {
        text = "Ingrese un correo válido.";
		alert(text);
	}else{
		location.href="home_map.html";	$("#usuarioLog").text(localStorage.getItem("nameReg"));
	};
    
};
  
var cargarPagina = function (){
	$("#sigValidacion").click(btnRefInicial);
	$("#celular").focus();
	$("#celular").keydown(valNumCel);
	$("#celular").keyup(valLongCel);
	$("#verifCelular").click(crearNumAle);
	$(".numValido").eq(0).focus();
	$(".numValido").keyup(valFocusCode);
	$(".numValido").keydown(valNumCode);
	$("#resetCode").click(resetCodigo);
	$("#btnValido").click(validarCode);
	$(".datos").eq(0).focus();
	$(".datos").blur(transfCadena);
	$(".datos").keypress(valDatosForm);
	$(".datos").eq(0).keydown(validarLongName);
	$(".datos").eq(1).keydown(validarLongLast);
	$("#btnRegistro").click(enviarDatos);
};


$(document).ready(cargarPagina);
