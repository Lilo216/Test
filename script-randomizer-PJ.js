function pilihPJ() {
    let nama = document.getElementById("namaInput").value
        .split("\n")
        .map(n => n.trim())
        .filter(n => n !== "");

    let jumlahMatkul = parseInt(document.getElementById("jumlahMatkul").value);

    if (nama.length === 0 || !jumlahMatkul) {
        alert("Isi data terlebih dahulu");
        return;
    }

    if (jumlahMatkul > nama.length) {
        alert("Jumlah matkul melebihi jumlah nama");
        return;
    }

    // Acak nama
    for (let i = nama.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [nama[i], nama[j]] = [nama[j], nama[i]];
    }

    let hasil = nama.slice(0, jumlahMatkul);

    let output = "<h3>Hasil Random:</h3>";

    hasil.forEach((orang, index) => {
        output += `<div class="card">${index + 1}. ${orang}</div>`;
    });

    document.getElementById("hasil").innerHTML = output;
}

