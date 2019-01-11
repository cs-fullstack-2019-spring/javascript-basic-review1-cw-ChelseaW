// You will be asked the Fahrenheit
// Then their will be a conversion to Celcius

var FTEMP = parseInt (prompt("What is the temperature in Fahrenheit? "));

var CTEMP = Math.round((FTEMP - 32) * 5 / 9);
{
    console.log(FTEMP + " in Fahrenheit " + CTEMP + " in Celcius " )
}
