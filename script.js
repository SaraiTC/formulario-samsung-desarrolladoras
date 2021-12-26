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

document
  .getElementById("location")
  .addEventListener("focusout", validarCodigoPostal);

function validarCodigoPostal() {
  var codigopostal = document.getElementById("postcode").value;
  var pro = document.getElementById("location").value;
  var formulario = document.getElementsByTagName("form").value;
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
    01,
    02,
    03,
    04,
    05,
    06,
    07,
    08,
    09,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
  ];

  
  if (
    
    codigopostal[parseInt(codigopostal.substring(0, 2))] ==
      codigosPostales[0] &&
    provincia == provincias[0]
  ) {
    verde = document.createElement("h3");
    verde.textContent = codigopostal + "\n" + " corresponde a " + provincia;
    verde.setAttribute("id", "verde");
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("verde").style.color = "#00e600";
  } else {
		rojo = document.createElement("h3");
    rojo.textContent = codigopostal + "\n" + " no corresponde a " + provincia;
    rojo.setAttribute("id", "rojo");
    document.getElementById("validacion").appendChild(rojo);
    document.getElementById("rojo").style.color = "#ff0000";
    				formulario.reset();	

  }
  
 
}
