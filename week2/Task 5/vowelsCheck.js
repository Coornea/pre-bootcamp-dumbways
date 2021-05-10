function vowelsCheck() {
    let alphabet = document.getElementById("alphabet").value;
    let alphabetUppercase = alphabet.toUpperCase();
    let isVocal = alphabetUppercase  == "A"
                || alphabetUppercase == "E"
                || alphabetUppercase == "I"
                || alphabetUppercase == "O"
                || alphabetUppercase == "U" ? "Huruf Vokal" : "Bukan Huruf Vocal";
    document.getElementById("result").innerHTML = `<div class='alert'><strong>Result</strong><br>Huruf ${alphabet} adalah ${isVocal}</div>`
}