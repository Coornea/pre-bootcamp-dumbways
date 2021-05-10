let data = [];
function addArray() {
    let addValue = document.getElementById("array").value;
    data = addValue.split("");
    console.table(data);
    document.getElementById("resultArray").innerHTML = `<div class='alert'><strong>Result</strong><br>${data}<div>`;
    document.getElementById("delValue").disabled = false;
    document.getElementById("del").disabled = false;
}
function delArray() {
    let delValue = document.getElementById("delValue").value;
    for (let a = 0; a <= data.length -1; a++){
        if (data[a] == delValue) {
            delete data[a];
        }
    }
    console.table(data);
    document.getElementById("resultDelArray").innerHTML = `<div class='alert'><strong>Result After Delete</strong><br>${data}</div>`;
}