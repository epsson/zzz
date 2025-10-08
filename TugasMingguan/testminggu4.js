// Mendefinisikan objek 'mobil' menggunakan object literal
const mobil = {
  // Properti (Data/Spesifikasi Mobil)
  merek: "Honda",
  model: "Civic",
  tahun: 2024,
  warna: "Merah",
  kecepatanSaatIni: 0, // Dalam km/j
  mesinMenyala: false,

  // Metode (Aksi/Tindakan yang Bisa Dilakukan Mobil)
  nyalakanMesin: function() {
    if (this.mesinMenyala) {
      console.log("Mesin sudah menyala.");
    } else {
      this.mesinMenyala = true;
      console.log("Brumm... Mesin berhasil dinyalakan!");
    }
  },

  tambahKecepatan: function(jumlah) {
    if (this.mesinMenyala) {
      this.kecepatanSaatIni += jumlah;
      console.log(`Mobil berakselerasi. Kecepatan sekarang: ${this.kecepatanSaatIni} km/j.`);
    } else {
      console.log("Gagal! Nyalakan mesin terlebih dahulu.");
    }
  },

  rem: function(jumlah) {
    if (this.kecepatanSaatIni > 0) {
      this.kecepatanSaatIni -= jumlah;
      // Memastikan kecepatan tidak menjadi minus
      if (this.kecepatanSaatIni < 0) {
        this.kecepatanSaatIni = 0;
      }
      console.log(`Mobil melambat. Kecepatan sekarang: ${this.kecepatanSaatIni} km/j.`);
    } else {
      console.log("Mobil sudah berhenti.");
    }
  }
};

// --- Simulasi Penggunaan Mobil ---

// 1. Cek mobil di garasi
console.log(`Ini adalah mobil ${mobil.merek} ${mobil.model} warna ${mobil.warna}.`);
// Output: Ini adalah mobil Honda Civic warna Merah.

// 2. Coba tancap gas sebelum mesin nyala
mobil.tambahKecepatan(20);
// Output: Gagal! Nyalakan mesin terlebih dahulu.

// 3. Nyalakan mesin
mobil.nyalakanMesin();
// Output: Brumm... Mesin berhasil dinyalakan!

// 4. Mulai berakselerasi
mobil.tambahKecepatan(30); // Kecepatan jadi 30
mobil.tambahKecepatan(40); // Kecepatan jadi 70
// Output:
// Mobil berakselerasi. Kecepatan sekarang: 30 km/j.
// Mobil berakselerasi. Kecepatan sekarang: 70 km/j.

// 5. Mengerem saat mendekati lampu merah
mobil.rem(50);
// Output: Mobil melambat. Kecepatan sekarang: 20 km/j.

const acRumah = {
  // Properti (Status/Kondisi AC)
  merek: "Sharp",
  menyala: false,
  suhu: 25, // Suhu dalam Celcius
  mode: "dingin", // Mode bisa 'dingin', 'kipas', atau 'kering'

  // Metode (Aksi dari Tombol Remot)
  togglePower: function() {
    this.menyala = !this.menyala; // Membalik status (true jadi false, false jadi true)
    if (this.menyala) {
      console.log(`AC menyala. Mode: ${this.mode}, Suhu: ${this.suhu}°C.`);
    } else {
      console.log("AC dimatikan.");
    }
  },

  turunkanSuhu: function() {
    if (!this.menyala) {
      console.log("Tidak bisa mengatur suhu, AC masih mati.");
      return; // Hentikan fungsi
    }
    if (this.suhu > 18) { // Batas suhu terdingin
      this.suhu--;
      console.log(`Suhu diturunkan menjadi ${this.suhu}°C.`);
    } else {
      console.log("Suhu sudah mencapai batas minimum (18°C).");
    }
  },
  
  ubahMode: function(modeBaru) {
    if (!this.menyala) {
      console.log("Tidak bisa mengubah mode, AC masih mati.");
      return;
    }
    this.mode = modeBaru;
    console.log(`Mode diubah menjadi '${this.mode}'.`);
  }
};

// --- Simulasi Penggunaan Remot AC ---

// 1. Coba turunkan suhu saat AC masih mati
acRumah.turunkanSuhu();
// Output: Tidak bisa mengatur suhu, AC masih mati.

// 2. Tekan tombol power untuk menyalakan
acRumah.togglePower();
// Output: AC menyala. Mode: dingin, Suhu: 25°C.

// 3. Merasa gerah, turunkan suhu beberapa kali
acRumah.turunkanSuhu(); // Suhu jadi 24
acRumah.turunkanSuhu(); // Suhu jadi 23
// Output:
// Suhu diturunkan menjadi 24°C.
// Suhu diturunkan menjadi 23°C.

// 4. Ubah mode agar tidak terlalu dingin
acRumah.ubahMode("kipas");
// Output: Mode diubah menjadi 'kipas'.

// 5. Tekan tombol power lagi untuk mematikan
acRumah.togglePower();
// Output: AC dimatikan.*/


const studentData = {
    name : "ibnu",
    kelas : "TI24H",
    java_score : 90,
    python_score : 100,
    javascript_score : 70,
    infoStudent : function() {
        return(
            "name : " + this.name + "\n" +
            "kelas : " + this.kelas + "\n" +
            "java score : " + this.java_score + "\n" +
            "python score : " + this.python_score + "\n" +
            "javascript score : " + this.javascript_score
        )
    }
};
studentData["id_nnumber"] = "11223344"
studentData["name"] = "rifa"
delete studentData["python_score"];
console.log(studentData);
console.log(studentData.infoStudent());