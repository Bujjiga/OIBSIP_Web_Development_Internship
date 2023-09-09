var celsius = document.getElementById("celsius");
var fahrenheit = document.getElementById("fahrenheit");

function cele(){
    var output = ( parseFloat(celsius.value) * 9/5 ) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}
function fare(){
    var output = ( parseFloat(fahrenheit.value) - 32) * 5/9;
    celsius.value = parseFloat( output.toFixed(2));

}