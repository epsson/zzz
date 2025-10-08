let produk = {
    nama: "Mouse Wireless",
    harga: 150000,
    stok: 25,
    tampilkanProduk: function() {
        console.log(`${this.nama}z - Harga: Rp${this.harga}, Stok: ${this.stok} unit`);
    }
}

//Tambahakan properti baru diskon
produk.diskon = 0.1; // Diskon 10%

//Hitung harga setelah diskon
let hargaDiskon = produk.harga - (produk.harga * produk.diskon);
console.log(`Harga setelah diskon: Rp${hargaDiskon}`);

//win + titik = emoji ANJAYYYYY