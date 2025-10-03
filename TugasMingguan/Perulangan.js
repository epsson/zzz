// Menggunakan perulangan FOR
console.log("Bilangan ganjil 1-20 (FOR):");
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Menggunakan perulangan WHILE
console.log("Bilangan ganjil 1-20 (WHILE):");
let j = 1;
while (j <= 20) {
    if (j % 2 !== 0) {
        console.log(j);
    }
    j++;
}