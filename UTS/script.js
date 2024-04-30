document.getElementById('memberForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Mengambil nilai input dari form
    let nama = document.getElementById('nama').value;
    let email = document.getElementById('email').value;
    let hp = document.getElementById('hp').value;
    let url_foto = document.getElementById('url_foto').value;
    let usia = parseInt(document.getElementById('usia').value);

    // Membuat objek anggota baru
    let member = {
        nama: nama,
        email: email,
        hp: hp,
        url_foto: url_foto,
        usia: usia
    };

    // Mengecek apakah localStorage sudah ada data anggota sebelumnya
    let membersData = localStorage.getItem('wdev_npm') ? JSON.parse(localStorage.getItem('wdev_npm')) : [];

    // Menyimpan data anggota ke dalam array
    membersData.push(member);

    // Menyimpan data anggota ke dalam localStorage
    localStorage.setItem('wdev_npm', JSON.stringify(membersData));

    // Memanggil fungsi clearForm untuk mengosongkan form
    clearForm();

    // Memperbarui tampilan jumlah anggota, usia paling muda, dan usia paling tua
    updateStats();
});

// Fungsi untuk mengosongkan form
function clearForm() {
    document.getElementById('nama').value = "";
    document.getElementById('email').value = "";
    document.getElementById('hp').value = "";
    document.getElementById('url_foto').value = "";
    document.getElementById('usia').value = "";
}

// Fungsi untuk menghitung jumlah anggota, usia paling muda, dan usia paling tua
function updateStats() {
    // Mengecek apakah localStorage sudah ada data anggota
    let membersData = localStorage.getItem('wdev_npm') ? JSON.parse(localStorage.getItem('wdev_npm')) : [];

    let totalMembers = membersData.length;
    let youngestAge = Infinity;
    let oldestAge = 0;

    for (let member of membersData) {
        if (member.usia < youngestAge) {
            youngestAge = member.usia;
        }
        if (member.usia > oldestAge) {
            oldestAge = member.usia;
        }
    }

    console.log("Jumlah anggota:", totalMembers);
    console.log("Usia anggota paling muda:", youngestAge);
    console.log("Usia anggota paling tua:", oldestAge);
}

// Memanggil fungsi updateStats saat halaman dimuat
updateStats();
