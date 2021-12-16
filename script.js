// En las funciones que vienen a continuación utilizo la función swal del CDN de Sweet Alert
     function mostrarValoracion(){
           
            var valoracion = document.getElementById("valoracion").value;

            
            swal("Tu valoración es de " + valoracion);
        }

    function mostrarCuenta(){
            
            var iban = document.getElementById("iban").value;
            var entity = document.getElementById("entity").value;
            var sucursal = document.getElementById("sucursal").value;
            var dc = document.getElementById("dc").value;
            var cuenta = document.getElementById("account").value;
            
            swal("Le informamos que su cuenta bancaria es: ES " + "-" + iban + "-" + entity + "-" + sucursal + "-" + dc + "-" + cuenta);
            console.log("country");
        }

    function mostrarDia () {
        
    }