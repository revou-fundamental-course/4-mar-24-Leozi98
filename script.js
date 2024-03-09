// Fungsi untuk menghitung BMI berdasarkan input pengguna
function hitungBMI() {
    // Mengambil nilai dari elemen-elemen input
    var nama = document.getElementById("name").value;
    var jenisKelamin = document.querySelector('input[name="gender"]:checked').value;
    var usia = document.getElementById("age").value;
    var berat = document.getElementById("weight").value;
    var tinggi = document.getElementById("height").value;

    // Menghitung nilai BMI menggunakan fungsi hitungNilaiBMI
    var bmi = hitungNilaiBMI(berat, tinggi);
    // Mendapatkan kategori BMI menggunakan fungsi dapatkanKategoriBMI
    var kategori = dapatkanKategoriBMI(bmi);
    
    // Menampilkan hasil BMI dan input dari pengguna
    var hasil = `BMI Anda: ${bmi.toFixed(2)} (${kategori})<br><br>
                <strong>Data Kamu:</strong><br>
                Nama: ${nama}<br>
                Jenis Kelamin: ${jenisKelamin}<br>
                Usia: ${usia}<br>
                Berat: ${berat} kg<br>
                Tinggi: ${tinggi} cm<br>`;

    // Saran tambahan berdasarkan kategori BMI
    switch (kategori) {
        case 'Kurus':
            hasil += '<br>Saran: Anda mungkin perlu menambah berat badan untuk kesehatan yang lebih baik.';
            break;
        case 'Berat normal':
            hasil += '<br>Saran: Pertahankan diet seimbang dan olahraga teratur untuk kesehatan yang baik.';
            break;
        case 'Kelebihan berat badan':
            hasil += '<br>Saran: Pertimbangkan untuk menurunkan berat badan melalui diet dan olahraga.';
            break;
        case 'Obesitas':
            hasil += '<br>Saran: Penting untuk berkonsultasi dengan profesional kesehatan untuk pengelolaan berat badan.';
            break;
        default:
            break;
    }

    // Menampilkan hasil di elemen dengan id "result"
    var elemenHasil = document.getElementById("result");
    elemenHasil.innerHTML = hasil;
}

// Fungsi untuk menghitung nilai BMI
function hitungNilaiBMI(berat, tinggi) {
    var tinggiMeter = tinggi / 100; // Mengubah tinggi dalam cm menjadi meter
    return berat / (tinggiMeter * tinggiMeter); // Menghitung BMI menggunakan rumus
}

// Fungsi untuk mendapatkan kategori BMI berdasarkan nilai BMI
function dapatkanKategoriBMI(bmi) {
    if (bmi < 18.5) {
        return "Kurus";
    } else if (bmi < 25) {
        return "Berat normal";
    } else if (bmi < 30) {
        return "Kelebihan berat badan";
    } else {
        return "Obesitas";
    }
}

// Fungsi untuk mereset nilai-nilai form
function resetForm() {
    // Mengosongkan nilai-nilai form
    document.getElementById("name").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("age").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").innerHTML = ""; // Mengosongkan hasil yang ditampilkan
}

// Fungsi untuk mengunduh hasil BMI dalam bentuk teks
function unduhHasil() {
    // Mengambil teks hasil dari elemen dengan id "result"
    var teksHasil = document.getElementById("result").innerText;
    // Membuat blob dari teks hasil
    var blob = new Blob([teksHasil], { type: "text/plain;charset=utf-8" });
    // Mengunduh blob sebagai file teks dengan nama "Hasil_BMI.txt"
    saveAs(blob, "Hasil_BMI.txt");
}
