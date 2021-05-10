function multiplicationTable() {
    let row = parseInt(document.getElementById("row").value);
    let limit = parseInt(document.getElementById("limit").value);
    let table = [];

    for (let i = 1; i <= row; i++){
        for (let j = 1; j <= limit; j++){
            //table.push([i], [j], [i * j]);
            table.push(`${i} * ${j} = ${i*j} <br>`);
        }
    }
    document.getElementById("result").innerHTML = `<div class='alert'><strong>Result</strong><br>${table.join("")}</div>`
}