
/* 
    A = > 90
    B = 70 - 85
    C = 50 - 69
    D = 30 - 49
    E = < 29 
*/

let num = document.getElementById('con').value;
let grade = "";

function convertValue(num) {


    if (num >= 86 && num <= 100) {
        grade = "A";
    } else if (num >= 70 && num <= 85) {
        grade = "B";
    } else if (num >= 50 && num <= 69) {
        grade = "C";
    } else if (num >= 30 && num <= 49) {
        grade = "D";
    } else if (num > 0 && num <= 29) {
        grade = "E";
    } else {
        grade = "-";
    }

    document.getElementById('print').innerHTML = "Nilai konversi adalah " + grade;

}


