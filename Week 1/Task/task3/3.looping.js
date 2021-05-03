

function loop1(numbers1){
    const number1 = document.getElementById('input1').value;
    let display =[];
        for(let i = 1; i <= numbers1.length; i++){
         display.push(`<p> ${i} </p>`);   
        }
        document.getElementById('print1').innerHTML = i.join("");
        return false;
}
console.log(loop1(15));

function loop2(numbers2){
    const number2 = document.getElementById('input2').value;
    let display =[];
        for(let a = 1; a <= numbers2.length; a++){
         display.push(`<p> ${a*a} </p>`);   
        }
        document.getElementById('print2').innerHTML = a.join("");
        return false;
}
console.log(loop2(23));


function loop3(numbers3){
    const number3 = document.getElementById('input3').value;
    let display =[];
        for(let x = 1; x <= numbers3.length; x++){
         display.push(`<p> ${x*3} </p>`);   
        }
        document.getElementById('print3').innerHTML = x.join("");
        return false;
}
console.log(loop3(8));

