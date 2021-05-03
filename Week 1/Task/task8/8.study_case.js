let age = document.getElementById('ages').value;
let classType = "";

function stdCase(age) {
    
if (age > 60){
        classType = "Lanjut Usia";
    } else if (age >=20 && age <= 60){
        classType = "Dewasa";
    } else if (age >= 11 && age <= 19){
        classType = "Remaja";
    } else if (age >=2 && age <= 10){
        classType = "Anak-anak";
    } else if (age > 0 && age <= 1) {
        classType = "Bayi";
    } else {
        classType = "-";
    }

    document.getElementById('print').innerHTML = "Umur " + age + " tahun adalah " + classType;

}