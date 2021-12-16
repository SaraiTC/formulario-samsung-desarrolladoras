
    function mostrarCuenta(){
            
            var iban = document.getElementById("iban").value;
            var entity = document.getElementById("entity").value;
            var sucursal = document.getElementById("sucursal").value;
            var dc = document.getElementById("dc").value;
            var cuenta = document.getElementById("account").value;
            
            alert("Le informamos que su cuenta bancaria es: ES " + "-" + iban + "-" + entity + "-" + sucursal + "-" + dc + "-" + cuenta);
        }