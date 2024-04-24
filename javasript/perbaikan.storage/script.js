// Ambil data npm dan nama dari localStorage dan tampilkan
let npmElement = document.getElementById("npm");
npmElement.innerHTML = localStorage.getItem("npm");

let namaElement = document.getElementById("nama");
namaElement.innerHTML = localStorage.getItem("nama");

// Data array
let hobi = ["baca", "game", "makan"];
localStorage.setItem("hobi", JSON.stringify(hobi));
localStorage.setItem("myhobi", JSON.stringify(hobi));

// Data object
let mhs = { npm: 2024240120, nama: "yudi" };

// Cara akses data objek
console.log(mhs.npm);
console.log(mhs.nama);

// Kombinasi array dan object
let nilai = [
    { kode_mk: "SI001", nama_mk: "Pemrograman Web" },
    { kode_mk: "SI002", nama_mk: "PAB" },
    { kode_mk: "SI002", nama_mk: "PAB" },
    { kode_mk: "SI002", nama_mk: "PAB" }
];
console.log(nilai[1].nama_mk);

// Simpan nilai ke dalam localStorage
localStorage.setItem("nilai", JSON.stringify(nilai));

// Tampilkan menggunakan for loop
let lsNilai = JSON.parse(localStorage.getItem("nilai"));
let listMkElement = document.getElementById("listMk");
listMkElement.innerHTML = lsNilai.map(data => `<li>${data.kode_mk} ${data.nama_mk}</li>`).join('');
