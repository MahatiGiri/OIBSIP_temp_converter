function tempConvert()
{
    celcius = document.getElementById("celcius").value;
    fahrenheit = document.getElementById("fahrenheit").value;
    kelvin = document.getElementById("kelvin").value;

    if(celcius != ' ')
    {
        fahrenheit = (parseFloat(celcius)* 9/5)+32;
        kelvin = (parseFloat(celcius) + 273.15);
    }
    else 
    {   
        celcius = (parseFloat(fahrenheit)- 32)* 5/9;
        celcius = (parseFloat(kelvin) - 273.15);
    }
    document.getElementById('kelvin').value= (kelvin);
    document.getElementById('celcius').value= (celcius);
    document.getElementById('fahrenheit').value= (fahrenheit);
}
document.getElementById('convert').onclick= tempConvert;