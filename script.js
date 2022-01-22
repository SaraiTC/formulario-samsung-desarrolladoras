// Funciones de los botones de Mostrar contenidos

function mostrarCuenta() {
  var iban = document.getElementById("iban").value;
  var entity = document.getElementById("entity").value;
  var sucursal = document.getElementById("sucursal").value;
  var dc = document.getElementById("dc").value;
  var cuenta = document.getElementById("account").value;

  alert(
    "Le informamos que su cuenta bancaria es: ES " +
      "-" +
      iban +
      "-" +
      entity +
      "-" +
      sucursal +
      "-" +
      dc +
      "-" +
      cuenta
  );
}

function mostrarDia() {
  var dia = document.getElementById("date");
  var dia = new Date();
  var n = dia.getDay();
  var dias = new Array(
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado"
  );
  alert("La fecha seleccionada en el elemento de fecha es un " + dias[n]);
}

// VALIDACIÓN DE CÓDIGO POSTAL Y PROVINCIA

document
  .getElementById("location")
  .addEventListener("focusout", validarCodigoPostalConProvincia);

function validarCodigoPostalConProvincia() {
  var codigopostal = document.getElementById("postcode").value;
  var pro = document.getElementById("location").value;
  var provincia = pro.toUpperCase();
  var provincias = [
    "ALAVA",
    "ALBACETE",
    "ALICANTE",
    "ALMERIA",
    "AVILA",
    "BADAJOZ",
    "ISLAS BALEARES",
    "BARCELONA",
    "BURGOS",
    "CACERES",
    "CADIZ",
    "CASTELLON",
    "CIUDAD REAL",
    "CORDOBA",
    "LA CORUNHA",
    "CUENCA",
    "GERONA",
    "GRANADA",
    "GUADALAJARA",
    "GUIPUZCOA",
    "HUELVA",
    "HUESCA",
    "JAEN",
    "LEON",
    "LERIDA",
    "LA RIOJA",
    "LUGO",
    "MADRID",
    "MALAGA",
    "MURCIA",
    "NAVARRA",
    "ORENSE",
    "ASTURIAS",
    "PALENCIA",
    "LAS PALMAS",
    "PONTEVEDRA",
    "SALAMANCA",
    "SANTA CRUZ DE TENERIFE",
    "CANTABRIA",
    "SEGOVIA",
    "SEVILLA",
    "SORIA",
    "TARRAGONA",
    "TERUEL",
    "TOLEDO",
    "VALENCIA",
    "VALLADOLID",
    "VIZCAYA",
    "ZAMORA",
    "ZARAGOZA",
    "CEUTA",
    "MELILLA",
  ];
  var codigosPostales = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
  ];

  
  if ( 
    codigopostal.substring(0, 2) ==
      codigosPostales[0] &&
    provincia == provincias[0]
  ) {
    verde = document.createElement("h3");
    verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
    verde.setAttribute("id", "verde");
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("verde").style.color = "#00e600";
  } else if (
     codigopostal.substring(0, 2) ==
       codigosPostales[1] &&
     provincia == provincias[1]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
     codigopostal.substring(0, 2) ==
       codigosPostales[2] &&
     provincia == provincias[2]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
    } else if (
     codigopostal.substring(0, 2) ==
       codigosPostales[3] &&
     provincia == provincias[3]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
     codigopostal.substring(0, 2) ==
       codigosPostales[4] &&
     provincia == provincias[4]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
     codigopostal.substring(0, 2) ==
       codigosPostales[5] &&
     provincia == provincias[5]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[6] &&
     provincia == provincias[6]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[7] &&
     provincia == provincias[7]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[8] &&
     provincia == provincias[8]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[9] &&
     provincia == provincias[9]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[10] &&
     provincia == provincias[10]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[11] &&
     provincia == provincias[11]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[12] &&
     provincia == provincias[12]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[13] &&
     provincia == provincias[13]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[14] &&
     provincia == provincias[14]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[15] &&
     provincia == provincias[15]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[16] &&
     provincia == provincias[16]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[17] &&
     provincia == provincias[17]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[18] &&
     provincia == provincias[18]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[19] &&
     provincia == provincias[19]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[20] &&
     provincia == provincias[20]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[21] &&
     provincia == provincias[21]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[22] &&
     provincia == provincias[22]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[23] &&
     provincia == provincias[23]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600"; 
    } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[24] &&
     provincia == provincias[24]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600"; 
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[25] &&
     provincia == provincias[25]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[26] &&
     provincia == provincias[26]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[27] &&
     provincia == provincias[27]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[28] &&
     provincia == provincias[28]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[29] &&
     provincia == provincias[29]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[30] &&
     provincia == provincias[30]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[31] &&
     provincia == provincias[31]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[32] &&
     provincia == provincias[32]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[33] &&
     provincia == provincias[33]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[34] &&
     provincia == provincias[34]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[35] &&
     provincia == provincias[35]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[36] &&
     provincia == provincias[36]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[37] &&
     provincia == provincias[37]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[38] &&
     provincia == provincias[38]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[39] &&
     provincia == provincias[39]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[40] &&
     provincia == provincias[40]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[41] &&
     provincia == provincias[41]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[42] &&
     provincia == provincias[42]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[43] &&
     provincia == provincias[43]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[44] &&
     provincia == provincias[44]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[45] &&
     provincia == provincias[45]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[46] &&
     provincia == provincias[46]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[47] &&
     provincia == provincias[47]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[48] &&
     provincia == provincias[48]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[49] &&
     provincia == provincias[49]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[50] &&
     provincia == provincias[50]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else if (
      codigopostal.substring(0, 2)  ==
       codigosPostales[51] &&
     provincia == provincias[51]
   ) {
     verde = document.createElement("h3");
     verde.textContent = codigopostal + "\n" + "  CORRESPONDE A " + provincia;
     verde.setAttribute("id", "verde");
     document.getElementById("validacion").appendChild(verde);
     document.getElementById("verde").style.color = "#00e600";
   } else {
		rojo = document.createElement("h3");
    rojo.textContent = codigopostal + "\n" + " no  CORRESPONDE A " + provincia;
    rojo.setAttribute("id", "rojo");
    document.getElementById("validacion").appendChild(rojo);
    document.getElementById("rojo").style.color = "#ff0000";
}
} 

  // VALIDACION DEL CAMPO CÓDIGO POSTAL
  
document
  .getElementById("postcode")
  .addEventListener("focusout", validarCodigoPostal);


function validarCodigoPostal(){
  var codigopostal = document.getElementById("postcode").value;
  var formulario = document.getElementById("myform");

  if (codigopostal < 0 || codigopostal > 52999 || isNaN(codigopostal)) {
    alert("Introduce un código postal correcto");
    formulario.reset();
  } else if ((codigopostal == "") | (codigopostal == " ")) {
    alert("El campo código postal no puede quedar en blanco o con espacios");
    formulario.reset();
  } else if (codigopostal.length < 5) {
    alert("El código postal debe tener 5 caracteres");
    formulario.reset();
  }
  }


  // VALIDACION DEL CAMPO PROVINCIA

  function validarProvincia() {
    var pro = document.getElementById("location").value;
    var provincia = pro.toUpperCase();
    var formulario = document.getElementById("myform");
    var provincias = [
      "ALAVA",
      "ALBACETE",
      "ALICANTE",
      "ALMERIA",
      "AVILA",
      "BADAJOZ",
      "ISLAS BALEARES",
      "BARCELONA",
      "BURGOS",
      "CACERES",
      "CADIZ",
      "CASTELLON",
      "CIUDAD REAL",
      "CORDOBA",
      "LA CORUNHA",
      "CUENCA",
      "GERONA",
      "GRANADA",
      "GUADALAJARA",
      "GUIPUZCOA",
      "HUELVA",
      "HUESCA",
      "JAEN",
      "LEON",
      "LERIDA",
      "LA RIOJA",
      "LUGO",
      "MADRID",
      "MALAGA",
      "MURCIA",
      "NAVARRA",
      "ORENSE",
      "ASTURIAS",
      "PALENCIA",
      "LAS PALMAS",
      "PONTEVEDRA",
      "SALAMANCA",
      "SANTA CRUZ DE TENERIFE",
      "CANTABRIA",
      "SEGOVIA",
      "SEVILLA",
      "SORIA",
      "TARRAGONA",
      "TERUEL",
      "TOLEDO",
      "VALENCIA",
      "VALLADOLID",
      "VIZCAYA",
      "ZAMORA",
      "ZARAGOZA",
      "CEUTA",
      "MELILLA",
    ];

    if (provincias.indexOf(provincia) < 0) {
      alert("Introduce una provincia válida, por favor.");
      formulario.reset();
    }
  }

  
