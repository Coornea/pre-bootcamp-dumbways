function reverse() {
    
    let number = document.getElementById("num").value;

    document.getElementById('print').innerHTML = number.split('').reverse().join('');

}