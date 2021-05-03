
// let str = document.getElementById('input').value;
// let letter = document.getElementById('input2').value;

function charCount(str, letter) {

    str = document.getElementById('input').value;
    letter = document.getElementById('input2').value;

    let letterCount = 0;
    for(let position = 0; position < str.length; position++){
        if (str.charAt(position) == letter) {
            letterCount += 1;
        }
    }

    // return letterCount;
    document.getElementById('print').innerHTML = "Total huruf " + letter + " sebanyak " + letterCount + " buah.";
}


// console.log(charCount('superstar','r'))
