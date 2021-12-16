function mostrarCuenta(){
   var iban = document.getElementById("iban").value;
   var entity = document.getElementById("entity").value;
   var sucursal = document.getElementById("sucursal").value;
   var dc = document.getElementById("dc").value;
   var cuenta = document.getElementById("account").value;
            
   alert("Le informamos que su cuenta bancaria es: ES " + "-" + iban + "-" + entity + "-" + sucursal + "-" + dc + "-" + cuenta);

}


function mostrarDia() {

   var dia = document.getElementById('date');
   var dia = new Date;
   var n = dia.getDay();
   var dias = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
   alert('La fecha seleccionada en el elemento de fecha es un ' + dias[n]);


  }