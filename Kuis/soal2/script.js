let npm = 2226240001;
let nama = "Arif";
let nilai = [80, 70, 90, 85, 60, 88];

document.getElementById("npm").innerHTML = npm;
document.getElementById("nama").innerHTML = nama;

let nilaimax = 0;
for (const [i, d] of nilai.entries()) {
  if (d > nilaimax) {
    nilaimax = d;
  }
}
document.getElementById("nilaimax").innerHTML = nilaimax;
