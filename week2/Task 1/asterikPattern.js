function asterikPattern(){
    let counter,col;
    let row = document.getElementById("row").value;
    let pattern =[];
    let object = document.getElementById("object").value;
    // console.log(row);
    
    for(counter=1;counter<=row;counter++){
        for(col=1; col<=counter; col++){
            pattern.push(object);
        }
            pattern.push("<br>");
    }
    pattern = pattern.join("");

    // document.getElementById("result").innerHTML = `<hr>Result<br><br>${pattern}`
    document.getElementById("result").innerHTML = `<div class='alert'><strong>Result</strong><br><br>${pattern}</div>`
}