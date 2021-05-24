function fibonacciSequence() {
    let limit = parseInt(document.getElementById("until").value);
    let from = parseInt(document.getElementById("from").value);
    let fibonacci = [];
    let number;
    for (let i = 0; i <= limit; i++){
        if (i < 2) {
            number = i;
        } else {
            number = fibonacci[i - 1] + fibonacci[i - 2];
        }
        fibonacci.push(number);
    }

    const newfibonacci = fibonacci.filter((numbers) => {
        return  numbers > from;
    });
    // document.getElementById("from").disabled = false;
    // document.getElementById("buttonFilter").disabled = false;
    document.getElementById("result2").innerHTML = `<div class='alert'><strong>Hasil diatas ${fibonacci} </strong><br>${newfibonacci}<div>`
}
