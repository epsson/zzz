const students = ["ibnu", "ilham", "raffi", "raffa", "ojan"];

// Menampilkan seluruh isi array
console.log("Daftar siswa:");
for (let i = 0; i < students.length; i++) {
    console.log(`${i + 1}. ${students[i]}`);
}

// Menambah siswa baru
students.push("latip");
console.log("\nhasil setelah menambah nama:");
console.log(students);

// Menghapus siswa terakhir
students.pop();
console.log("\nhasil setelah menghapus nama terakhir:");
console.log(students);

//menghapus siswa pertama
students.shift();
console.log("\nhasil setelah menghapus nama pertama:");
console.log(students);

// Menambahkan siswa di awal array
students.unshift("denindra");
console.log("\nhasil setelah menambah nama di awal:");
console.log(students);

// Menampilkan jumlah siswa
console.log(`\nJumlah siswa: ${students.length}`); 

// Mengakses siswa tertentu
console.log(`\n Nama siswa pertama adalah: ${students[0]}`);