document.getElementById ("welcome"). innerHTML = "Selamat Datang";
document.getElementById ("nama"). innerHTML = "<b> Ahmad <b>";
document.getElementById ("email"). innerHTML = "<b> hmad@test.com <b>";
console.log("Hanya BIsa Dilihat di Console");

//variabel//
let nama = "";
let email = "";
let data = [];

// function//
function Tampil() {
    console.log ("Button di tekan");
    //simpan value txtnama ke dalam variabel "nama"//
    //simpan value txtEmail ke dalam variabel "email"//
    nama = document.getElementById ("txtNama").value;
    email = document.getElementById ("txtEmail").value;
    console.log(nama);

    //ubah konten p id "nama"//
    document.getElementById("nama").innerHTML = nama;
    document.getElementById("email").innerHTML = email;

    //disimpan kedalam array data//
    data.push(nama);
    console.log(data);
}