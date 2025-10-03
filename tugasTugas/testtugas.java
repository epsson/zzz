package tugasTugas;

import java.util.Scanner;

public class testtugas {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        System.out.print("Masukkan bilangan: ");
        int n = input.nextInt();
        
        int hasil = 0;
        
        // Iterasi: n^2 = n + n + n ... sebanyak n kali
        for (int i = 0; i < n; i++) {
            hasil += n;
        }
        
        System.out.println("Hasil dari " + n + "^2 = " + hasil);
        
        input.close();
    }
}
