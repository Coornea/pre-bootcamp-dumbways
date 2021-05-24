function concatenateArray() {
    let array1 = parseInt(document.getElementById("array1").value).toString().split("");
    let array2 = parseInt(document.getElementById("array2").value).toString().split("");
    for (let i = 0; i <= array1.length - 1; i++){
        for (let a = 0; a <= array2.length - 1; a++){
            if (array1[i] == array2[a])
            {
                array1[i] = "q";
            }
        }
    }
    //sortir
    let finalArray = array1.concat(array2).sort();

    //jumlah hapus data array
    let limitPop = finalArray.toString().split("q").length - 1;

    //hapus data
    finalArray.splice(finalArray.length - limitPop, limitPop);

    //for each
    //finalArray.forEach(number => console.log(number));
    finalArray.map(number => console.log(number));
    
    //reduce
    const sumArray = finalArray.reduce((accumulator, currentValue) => accumulator + currentValue);
    document.getElementById('result').innerHTML = `Ada ${limitPop} Data array yang sama`;
    document.getElementById("result1").innerHTML = `<div class='alert'><strong>Sum Result</strong><br> ${finalArray}</div>`;

}