
const C = document.getElementById('input').value;
const R = document.getElementById('input').value;
const F = document.getElementById('input').value;
const K = document.getElementById('input').value;
const temp1 = document.getElementById('suhu1').value;
const temp2 = document.getElementById('suhu2').value;

function convertTemp(temp1,temp2) {
    let count = 0;
    if (temp1 == Celcius) {
        switch (check) {
            case temp2 == Reamur:
                count = 4/5*C;
                break;
            case temp2 == Fahrenheit:
                count = 9/5*C + 32;
                break;
            case temp2 == Kelvin:
                count = C + 273;
            default:
                break;
        }
        document.getElementById('print').innerHTML= count;
    } else if (temp1 == Reamur){
        switch (check) {
            case temp2 == Celcius:
                count = 5/4*R;
                break;
            case temp2 == Fahrenheit:
                count = 9/4*R + 32;
                break;
            case temp2 == Kelvin:
                count = 5/4*R + 273;
            default:
                break;
        }
        document.getElementById('print').innerHTML= count;
    } else if (temp1 == Fahrenheit){
        switch (check) {
            case temp2 == Celcius:
                count = 5/9(F-32);
                break;
            case temp2 == Reamur:
                count = 4/9(F-32);
                break;
            case temp2 == Kelvin:
                count = 5/9(F-32)+273;
            default:
                break;
        }
        document.getElementById('print').innerHTML= count;
    } else if (temp1 == Kelvin){
        switch (check) {
            case temp2 == Celcius:
                count = K-273;
                break;
            case temp2 == Reamur:
                count = 4/5(K-273);
                break;
            case temp2 == Fahrenheit:
                count = 9/5(K-273)+32;
            default:
                break;
        }
        document.getElementById('print').innerHTML= count;
    } else{
        document.getElementById('print').innerHTML= " - ";
    }
}