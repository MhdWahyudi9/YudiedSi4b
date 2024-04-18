let inputnama = document.getElementById("nama");
let inputtestimoni = document.getElementById ("testimoni");
let btnsimpan = document.getElementById ("btnsimpan");
let list = document.getElementById ("list");

let data = []

btnSimpan.addEventListener("click", function () {
    if (localStorage.getItem("testimoni")) {
        data = JSON.parse(localStorage.getItem("testimoni"));
        data.push({
            nama: inputnama.value,
            testimoni: inputtestimoni.value,
        });
    } else{
        data.push({
            nama: inputnama.value,
            testimoni: inputtestimoni.value,
        });
    }
    localStorage.setItem("testimoni", JSON.stringify(data));
});

function getData () {

    list.innerHTML = "";

    if (localStorage.getItem("testimoni")) {
        data = JSON.parse(localStorage.getItem("testimoni"));
        for (const [index, row] of data.entries()) {
            // list.innerHTML += `<tr>${row.nama} ${row.testimoni}</r>`;
            list.innerHTML += `<tr><td>${row.nama}</td><td>${row.testimoni}</td></tr>`;
        }
    }
}

getData ();
