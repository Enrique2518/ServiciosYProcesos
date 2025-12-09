import java.util.Scanner;

public class problema2 {

    public static void main(String[] args) {
        
        System.out.println("Problema 2");

        Scanner sc = new Scanner(System.in);

        System.out.println("Introduce el numero x:");
        int x = sc.nextInt();

        while (x < 0 || x > 9) {
            System.out.println("Introduce el numero x de nuevo:");
            x = sc.nextInt();
        }

        System.out.println("Introduce el numero y:");
        int y = sc.nextInt();
        boolean contieneX = false;

        int i = y;
        while (i != 0 && !contieneX) {
            int digito = i % 10;
            if (digito == x) {
                contieneX = true;
            }
            i = i / 10;
        }

        if (contieneX) {
            System.out.println("SI");
        }else{
            System.out.println("NO");
        }

        sc.close();

    }
    
}
