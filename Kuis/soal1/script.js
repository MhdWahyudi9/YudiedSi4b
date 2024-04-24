let nama = "Arif";
let hobi = ["Baca", "Bermain Game", "Belajar Coding"];

// lanjutkan script ini ya ...
document.getElementById("nama").innerHTML = nama;
document.getElementById("hobi").innerHTML = hobi[2];

for (const [i, data] of hobi.entries()) {
  document.getElementById("listhobi").innerHTML += `<li>${data}</li>`;
}
