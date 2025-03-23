function tambahData() {
    let name = document.getElementById('nama').value;
    let nim = document.getElementById('nim').value;
    let prodi = document.getElementById('prodi').value;
    let univ = document.getElementById('univ').value;
    let angkatan = document.getElementById('angkatan').value;

    if (name === "" || nim === "" || prodi === "" || prodi === "" || angkatan === "") {
        alert("Data tidak boleh kosong!");
        return;
    }

    let table = document.getElementById('dataMahasiswa');

    let row = table.insertRow();
    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = nim;
    row.insertCell(2).innerText = prodi;
    row.insertCell(3).innerText = univ;
    row.insertCell(4).innerText = angkatan;

    alert("Data berhasil ditambahkan!");

    document.getElementById('nama').value = "";
    document.getElementById('nim').value = "";
    document.getElementById('prodi').value = "";
    document.getElementById('univ').value = "";
    document.getElementById('angkatan').value = "";
}