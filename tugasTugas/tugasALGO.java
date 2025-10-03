package tugasTugas;

public class tugasALGO {

    // Program untuk menghitung pangkat dua suatu bilangan secara iteratif
    public static void main(String[] args) {
        try (java.util.Scanner scanner = new java.util.Scanner(System.in)) {
            System.out.print("Masukkan bilangan yang ingin dipangkatkan dua: ");
            int n = scanner.nextInt();
            int hasil = 0;
            // Iterasi untuk menghitung pangkat dua
            for (int i = 0; i < n; i++) {
                hasil += n;
            }
            System.out.println(n + " pangkat dua adalah: " + hasil);
        }
        // Simulasi perhitungan data
        System.out.println("\nSimulasi perhitungan pangkat dua untuk 1 sampai 5:");
        for (int i = 1; i <= 5; i++) {
            int simHasil = 0;
            for (int j = 0; j < i; j++) {
                simHasil += i;
            }
            System.out.println(i + "^2 = " + simHasil);
        }

        // Analisis kompleksitas algoritma:
        // Kompleksitas waktu: O(n) karena terdapat satu loop sebanyak n kali.
    }

}
