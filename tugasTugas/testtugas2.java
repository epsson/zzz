package tugasTugas;

import java.util.Scanner;

public class testtugas2 {
    public static long hitungPangkatDua(int bilangan) {
        // Menangani input negatif dengan mengubahnya menjadi positif,
        // karena (-n)^2 = n^2.
        int n = Math.abs(bilangan);

        long hasil = 0; // Variabel untuk menyimpan hasil akhir, dimulai dari 0.

        // Loop akan berjalan sebanyak 'n' kali.
        for (int i = 0; i < n; i++) {
            // Pada setiap iterasi, tambahkan 'n' ke variabel hasil.
            hasil += n;
        }

        return hasil;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Masukkan sebuah bilangan bulat: ");
        int angka = input.nextInt();

        long hasilPangkat = hitungPangkatDua(angka);

        System.out.println("Hasil pangkat dua dari " + angka + " adalah: " + hasilPangkat);

        input.close();
    }
}