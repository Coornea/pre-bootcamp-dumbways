/* 
Gaji /jam:

1. Golongan A = 1.000
2. Golongan B = 2.000
3. Golongan C = 3.000
4. Golongan E = 4.000

Rumus: Gaji per-golongan * waktu kerja * 30

upah lembur: 200
*/

const biodata = {
    nama: document.getElementById('name').value,
    golongan: document.getElementById('gol').value,
    lamaKerja: document.getElementById('time').value,
  };

function calcSalary(data) {
    
    let gajiPerhari = 0;
    let gajiBulanan = 0;
    let lembur = 0;
    let total = 0;

    if (biodata.golongan === "A") {
        gajiPerhari = biodata.lamaKerja * 1000; 
    } else if (biodata.golongan === "B"){
        gajiPerhari = biodata.lamaKerja * 2000;
    } else if (biodata.golongan === "C"){
        gajiPerhari = biodata.lamaKerja * 3000;
    } else if (biodata.golongan === "D"){
        gajiPerhari = biodata.lamaKerja * 4000;
    } else {}

    gajiBulanan = gajiPerhari * 30;
    lembur = 240 * 200;
    total = gajiBulanan + lembur;

    document.getElementById('print1').innerHTML =  biodata.nama;
    document.getElementById('print2').innerHTML =  biodata.golongan;
    document.getElementById('print3').innerHTML =  gajiPerhari;
    document.getElementById('print4').innerHTML =  gajiBulanan;
    document.getElementById('print5').innerHTML =  lembur;
    document.getElementById('print6').innerHTML =  total;

}
