

//tampilkan nama_mk pemrograman web
console.log(nilai[0].kode_mk);let npm = document.getElementById("npm") 
npm.innerHTML = localStorage.getItem("npm");

let nama = document.getElementById("nama") 
npm.innerHTML = localStorage.getItem("nama");

//Data array//
let  hobi = ["baca", "game", "makan"]
localStorage.setItem("hobi", hobi)
localStorage.setItem("myhobi", JSON.stringify(hobi));

//data object//
let mhs = {npm: 2024240120, nama: "yudi"};

//cara Akses
console.log(mhs.npm)
console.log(mhs.nama)

//kombinasi array dan object
let nilai = [
    {kode_mk: "SI001", nama_mk: "Pemrograman Web"},
    {kode_mk: "SI002", nama_mk: "PAB"},
    {kode_mk: "SI002", nama_mk: "PAB"},
    {kode_mk: "SI002", nama_mk: "PAB"},
];
console.log(nilai[1].nama_mk);

//simpan nilai ke dalam localstorage
localStorage.setItem("nilai", JSON.stringify(nilai));

//tampil menggunakan for atau foreach
let lsNilai = JSON.parse(localStorage.getItem("nilai"));
for(const[index, data] of lsNilai.entries()) {
    console.log (data.kode_mk);
    console.log (data.nama_mk);

    //tapilkan data mk ke dalam <ul id="listMk">
    document.getElementById("listMk").innerHTML += `<li> ${data.kode_mk} ${data.nama_mk} <li>`;
}
