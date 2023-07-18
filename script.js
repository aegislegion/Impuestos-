var Ingresos;
var Egresos;
var utilidad;
var impuesto;

function Calcular() {
var Ingresos = parseFloat(document.getElementById("num1").value);
var Egresos = parseFloat(document.getElementById("num2").value);
var utilidad = Ingresos - Egresos;
var impuesto=0;

if  ((0 <  utilidad ) && (utilidad< 9950)) {
    impuesto= utilidad*0.10; 
} else if ((9950<utilidad)&&(utilidad < 40525)){
    impuesto=((utilidad-9950)*0.12) + 995;
} else if ((40525<utilidad)&&(utilidad < 86375)){
    impuesto=((utilidad-40525)*0.22) + 4663.88;
} else if ((86375<utilidad)&&(utilidad < 164725)){
    impuesto= ((utilidad-86375)*0.24) + 14750.66;
} else if ((164725<utilidad)&&(utilidad < 209425)){
    impuesto=((utilidad-164725)*0.32) + 33602.42;
} else if ((209425<utilidad)&&(utilidad < 523600)){
    impuesto=((utilidad-209425)*0.35) + 47842.10;
} else{
    impuesto=((utilidad-523601)*0.37) + 157803;};

alert("El resultado es:"+impuesto);
}

