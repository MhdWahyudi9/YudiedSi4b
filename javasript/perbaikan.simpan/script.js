let inputNama = document.getElementById("nama");
let inputTestimoni = document.getElementById("testimoni");
let btnSimpan = document.getElementById("btnSimpan");
let list = document.getElementById("list");

let data = [];

btnSimpan.addEventListener("click", function () {
    let testimonialData = {
        nama: inputNama.value,
        testimoni: inputTestimoni.value,
    };

    if (localStorage.getItem("testimoni")) {
        data = JSON.parse(localStorage.getItem("testimoni"));
    }

    data.push(testimonialData);
    localStorage.setItem("testimoni", JSON.stringify(data));
    getData();
});

function getData() {
    list.innerHTML = "";

    if (localStorage.getItem("testimoni")) {
        data = JSON.parse(localStorage.getItem("testimoni"));
        data.forEach(function (row) {
            list.innerHTML += `<tr><td>${row.nama}</td><td>${row.testimoni}</td></tr>`;
        });
    }
}

getData();
