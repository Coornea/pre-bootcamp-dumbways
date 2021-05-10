function isPrime(number){
    let count = 2;
    while(count < number){
        if(number % count !== 0){
          count++;
          continue;
        }
        console.log(`bukan prima ${number}`);
        return false;
    }
    console.log(`prima ${number}`);
    return true;
 }
 function primeNumberRange(){
    let from = parseInt(document.getElementById("from").value);
    let to = parseInt(document.getElementById("to").value); 
    let primeNumber = [];
    for(let number = from; number <= to; number++){
       if(isPrime(number)){
        if(number != 1){
            primeNumber.push(number);
        }
       }
    }
    if(primeNumber.length != 0){
        document.getElementById("result").innerHTML = `<div class='alert'><strong>Result</strong><br>Bilangan Prima dari Angka ${from} sampai ${to} Adalah ${primeNumber}</div>`
    }else{
        document.getElementById("result").innerHTML = `<div class='alert'><strong>Result</strong><br>Tidak Ada Bilangan Prima dari Angka ${from} sampai ${to}</div>`
    }
 }