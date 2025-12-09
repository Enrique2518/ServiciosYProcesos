import java.util.Scanner;

public class problema1 {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Problema 1");

        int x = sc.nextInt();
        boolean esPar = false;

        while (x != 0 && !esPar) {
            if (x % 2 == 0) {
                esPar = true;
            } else {
                esPar = false;
            }
            x = sc.nextInt();
        }

        if (esPar) {
            System.out.println("SI");
        }else{
            System.out.println("NO");
        }

        sc.close();
        
    }
}