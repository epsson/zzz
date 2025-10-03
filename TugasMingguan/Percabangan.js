const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan nilai: ", (input) => {
  let nilai = parseInt(input);
  let grade;

  if (nilai >= 85 && nilai <= 100) {
    grade = "A";
  } else if (nilai >= 70 && nilai <= 84) {
    grade = "B";
  } else if (nilai >= 55 && nilai <= 69) {
    grade = "C";
  } else if (nilai >= 40 && nilai <= 54) {
    grade = "D";
  } else if (nilai >= 20 && nilai <= 40) {
    grade = "E";
  } else if (nilai >= 0 && nilai < 20) {
    grade = "kamu gagal, ulangi lagi ya!";
  } else {
    grade = "Nilai tidak valid!";
  }

  console.log("Hasil Nilai: " + grade);
  rl.close();
}

);
