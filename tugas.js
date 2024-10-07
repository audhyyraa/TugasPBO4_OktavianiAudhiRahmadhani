// Kelas Induk
class Kapal {
    constructor(nama, panjang, kapasitas) {
        this.nama = nama;
        this.panjang = panjang;
        this.kapasitas = kapasitas;
        this._status = "Di pelabuhan";
        this._kondisi = "Baik";  
    }

    berlayar() {
        this._status = "Berlayar";
        return `Kapal ${this.nama} sedang berlayar.`;
    }

    kembaliKePelabuhan() {
        this._status = "Di pelabuhan";
        return `Kapal ${this.nama} telah kembali ke pelabuhan.`;
    }

    getStatus() {
        return `Status kapal ${this.nama}: ${this._status}`;
    }

    getKondisi() {
        return `Kondisi kapal ${this.nama}: ${this._kondisi}`;
    }

    setKondisi(kondisiBaru) {
        this._kondisi = kondisiBaru;
        return `Kondisi kapal ${this.nama} telah diperbarui menjadi: ${this._kondisi}`;
    }

    // Polymorphism: Method ini akan di-override di kelas turunan
    deskripsi() {
        return `Kapal ${this.nama} dengan panjang ${this.panjang} meter dan kapasitas ${this.kapasitas}.`;
    }
}

// Kelas Kapal Penumpang (dengan penghapusan harga tiket)
class KapalPenumpang extends Kapal {
    constructor(nama, panjang, kapasitas) {
        super(nama, panjang, kapasitas);
    }

    // Override method deskripsi
    deskripsi() {
        return `Kapal Penumpang ${this.nama} dengan kapasitas ${this.kapasitas} penumpang.`;
    }
}

// Kelas Kapal Kargo
class KapalKargo extends Kapal {
    constructor(nama, panjang, kapasitas, jenisMuatan) {
        super(nama, panjang, kapasitas);
        this.jenisMuatan = jenisMuatan;
    }

    infoMuatan() {
        return `Kapal kargo ${this.nama} mengangkut ${this.jenisMuatan} dengan kapasitas ${this.kapasitas} ton.`;
    }

    // Override method deskripsi
    deskripsi() {
        return `Kapal Kargo ${this.nama} mengangkut ${this.jenisMuatan} dengan kapasitas ${this.kapasitas} ton.`;
    }
}

// Kelas Kapal Penangkap Ikan
class KapalPenangkapIkan extends Kapal {
    constructor(nama, panjang, kapasitas, jenisIkan) {
        super(nama, panjang, kapasitas);
        this.jenisIkan = jenisIkan;
    }

    infoPenangkapan() {
        return `Kapal penangkap ikan ${this.nama} khusus untuk menangkap ${this.jenisIkan}.`;
    }

    // Override method deskripsi
    deskripsi() {
        return `Kapal Penangkap Ikan ${this.nama} dengan kapasitas ${this.kapasitas} dan khusus menangkap ${this.jenisIkan}.`;
    }
}

// Kelas Kapal Perang
class KapalPerang extends Kapal {
    constructor(nama, panjang, kapasitas, jenisSenjata) {
        super(nama, panjang, kapasitas);
        this.jenisSenjata = jenisSenjata;
    }

    infoPersenjataan() {
        return `Kapal perang ${this.nama} dilengkapi dengan senjata ${this.jenisSenjata}.`;
    }

    // Override method deskripsi
    deskripsi() {
        return `Kapal Perang ${this.nama} dengan panjang ${this.panjang} meter dan persenjataan ${this.jenisSenjata}.`;
    }
}

// Kelas Kapal Penyelam
class KapalPenyelam extends Kapal {
    constructor(nama, panjang, kapasitas, kedalamanMaks) {
        super(nama, panjang, kapasitas);
        this.kedalamanMaks = kedalamanMaks;
    }

    infoKedalaman() {
        return `Kapal penyelam ${this.nama} dapat menyelam hingga kedalaman ${this.kedalamanMaks} meter.`;
    }

    // Override method deskripsi
    deskripsi() {
        return `Kapal Penyelam ${this.nama} dengan kapasitas ${this.kapasitas} dan mampu menyelam hingga ${this.kedalamanMaks} meter.`;
    }
}

// Kelas Kapal Feri
class KapalFeri extends Kapal {
    constructor(nama, panjang, kapasitas, jumlahKendaraan) {
        super(nama, panjang, kapasitas);
        this.jumlahKendaraan = jumlahKendaraan;
    }

    infoKendaraan() {
        return `Kapal feri ${this.nama} dapat mengangkut ${this.jumlahKendaraan} kendaraan.`;
    }

    // Override method deskripsi
    deskripsi() {
        return `Kapal Feri ${this.nama} dengan kapasitas ${this.kapasitas} penumpang dan ${this.jumlahKendaraan} kendaraan.`;
    }
}

// Kelas Kapal Penyelamat
class KapalPenyelamat extends Kapal {
    constructor(nama, panjang, kapasitas, kecepatanMaks) {
        super(nama, panjang, kapasitas);
        this.kecepatanMaks = kecepatanMaks;
    }

    infoKecepatan() {
        return `Kapal penyelamat ${this.nama} dapat berlayar dengan kecepatan maksimal ${this.kecepatanMaks} knot.`;
    }

    // Override method deskripsi
    deskripsi() {
        return `Kapal Penyelamat ${this.nama} memiliki kecepatan maksimal ${this.kecepatanMaks} knot.`;
    }
}

// Contoh Penggunaan
let kapalPenumpang = new KapalPenumpang("Kapal Nusantara", 100, 500);
let kapalKargo = new KapalKargo("Kapal Samudra", 200, 1000, "barang kontainer");
let kapalPenangkapIkan = new KapalPenangkapIkan("Kapal Lautan", 50, 200, "ikan tuna");
let kapalPerang = new KapalPerang("Kapal Garuda", 150, 100, "misil");
let kapalPenyelam = new KapalPenyelam("Kapal Submarine", 80, 50, 500);
let kapalFeri = new KapalFeri("Kapal Bahari", 120, 600, 100);
let kapalPenyelamat = new KapalPenyelamat("Kapal Rescue", 90, 30, 50);

console.log(kapalPenumpang.deskripsi());
console.log(kapalKargo.deskripsi());
console.log(kapalPenangkapIkan.deskripsi());
console.log(kapalPerang.deskripsi());
console.log(kapalPenyelam.deskripsi());
console.log(kapalFeri.deskripsi());
console.log(kapalPenyelamat.deskripsi());
