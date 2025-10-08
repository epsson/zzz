//tugas nomor 1 
console.log("Tugas Nomor 1: ");
let studentScores = [
    {
        name: "ibnu",
        score: 95,
    },
    {
        name: "ilham",
        score: 80,
    },
    {
        name: "raffi",
        score: 85,
    },
];
let nilaiTertinggi = studentScores.reduce((max, student) => student.score > max.score ? student : max, studentScores[0]);
console.log("Nilai tertinggi di kelas adalah:");
console.log(`Nama: ${nilaiTertinggi.name}, Nilai: ${nilaiTertinggi.score}`);
console.log("=========================================================================================================================");
//tugas nomor 2
//Array dari nama pembalap

 
console.log("Tugas Nomor 2: ");
var motoGP = [
    { 
        circuit: "Losail",
        location: "Qatar",
        winner: {
            firstName: "Andrea",
            lastName: "Dovizioso",
            country: "italy"
        }
    },
    {
        circuit: "Autodromo",
        location: "Argentina",
        winner: {
            firstName: "cal",
            lastName: "Crutchlow",
            country: "UK"
        }
    },
    {
        circuit: "De jerez",
        location: "spain",
        winner: {
            firstName: "Valentino",
            lastName: "Rossi",
            country: "italy"
        }
    },
    {
        circuit: "Hugelio",
        location: "Italy",
        winner: {
            firstName: "Andrea",
            lastName: "Dovizioso",
            country: "italy"
        }
    }
];



// Membuat objek kosong untuk menampung hasil pengelompokan berdasarkan negara pemenang
var kelompokNegara = {};  

// Melakukan perulangan pada setiap elemen (race) di dalam array motoGP
motoGP.forEach(race => {  

    // Menyimpan nama negara pemenang dari data race saat ini
    let country = race.winner.country;  

    // Jika negara tersebut belum ada di objek kelompokNegara, maka buatkan struktur awalnya
    if (!kelompokNegara[country]) {  
        kelompokNegara[country] = {  
            winningCircuits: [],   // Menyimpan daftar lintasan (sirkuit) yang dimenangkan oleh negara itu
            totalWins: 0           // Menghitung jumlah kemenangan negara itu
        };
    }

    // Menambahkan data kemenangan baru ke dalam daftar winningCircuits
    kelompokNegara[country].winningCircuits.push({  
        name: race.winner.firstName + " " + race.winner.lastName,   // Menggabungkan nama depan dan belakang pemenang
        winLocation: race.circuit + ", " + race.location            // Menyimpan lokasi kemenangan (sirkuit dan negara)
    });

    // Menambah total kemenangan negara tersebut sebanyak 1 setiap kali ditemukan pemenang dari negara itu
    kelompokNegara[country].totalWins++;  
});

// Menampilkan isi objek kelompokNegara secara lengkap (termasuk objek bersarang)
// Opsi { depth: null } digunakan agar semua level objek ditampilkan penuh di console
console.dir(kelompokNegara, { depth: null });  

