const prompt = require("prompt-sync")()

let belanja = prompt("Masukkan total belanja:")  
belanja = parseInt(belanja)

let total

if (belanja > 100000) {
  total = belanja - (belanja * 0.5); 
  console.log("Total belanja setelah diskon 50% = Rp " + total);
  console.log("selamat anda dapat diskon!")
} else {
  total = belanja;
  console.log("Total belanja = Rp " + total);
  console.log("yahaha kurang gak dapet diskon~")
}
