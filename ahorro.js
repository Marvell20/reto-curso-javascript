function dineroDisponible() {
    
    const ingresos = parseInt((document.getElementById("InputIngresos")).value);
    const gastos = parseInt((document.getElementById("InputGastos")).value);

    disponible = ingresos - gastos 

    return disponible
}

function capacidadDeAhorro(boton) {
    disponible = dineroDisponible()

    const custom = parseInt((document.getElementById("InputCustomPercent")).value);
    const resultadoDisponible = document.getElementById("disponible");
    const resultadoMensual = document.getElementById("ahorroMensual");
    const resultadoAnual = document.getElementById("ahorroAnual");
    
    const error = document.getElementById("error");
    error.innerHTML = "";
    
    if(disponible > 0){
        
        if (isNaN(boton)) {
            const porcentaje = boton.value;
            const totalDisponible = (disponible * (100 - porcentaje))/100;;
            const totalEnPorcentaje = (disponible * porcentaje)/100;
            
            resultadoDisponible.innerHTML = "$" + totalDisponible;
            resultadoMensual.innerHTML = "$" + totalEnPorcentaje;
            resultadoAnual.innerHTML = "$" + totalEnPorcentaje*12;
        } else {
            if (!isNaN(custom)) {
                const porcentaje = custom;
                const totalDisponible = (disponible * (100 - porcentaje))/100;
                const totalEnPorcentaje = (disponible * porcentaje)/100;
                
                resultadoDisponible.innerHTML = "$" + totalDisponible;
                resultadoMensual.innerHTML = "$" + totalEnPorcentaje;
                resultadoAnual.innerHTML = "$" + totalEnPorcentaje*12;
            }
        }

    }else{
        error.innerHTML = "Verifique los datos proporcionados nuevamente";
    }

}

function limpiar() {
    document.getElementById("InputIngresos").value = '';
    document.getElementById("InputGastos").value = '';
    document.getElementById("InputCustomPercent").value = '';

    document.getElementById("ahorroMensual").innerHTML = "$0.00";
    document.getElementById("ahorroAnual").innerHTML = "$0.00";
}