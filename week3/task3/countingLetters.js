function charCount(str, letter) {

    str = document.getElementById('input2').value;
    letter = document.getElementById('input3').value;

    let letterCount = 0;
    for(let position = 0; position < str.length; position++){
        if (str.charAt(position) == letter) {
            letterCount += 1;
        }
    }

    // return letterCount;
    document.getElementById('print2').innerHTML = "Total huruf " + letter + " sebanyak " + letterCount + " buah.";
}