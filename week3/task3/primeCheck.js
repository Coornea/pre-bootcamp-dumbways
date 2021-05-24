
const number = document.getElementById ('input').value;
let display = "";

const primeCheck = (number) => {
    let pembagi = 0;
    for(let i = 1; i <= number; i++){
        if (number % i === 0) {
            pembagi++
        }
    }
    if (pembagi === 2) {
        display = "Bilangan Prima";
    } else {
        display = "bukan Bilangan Prima";
    }

    document.getElementById ('print').innerHTML = number + " adalah " + display;
}



