import java.util.Scanner;

public class problema5 {
    public static void main(String[] args) {

        System.out.println("Problema 5");

        Scanner sc = new Scanner(System.in);
        
        System.out.println("Introduce la palabra p:");
        String p = sc.next();
        
        boolean trobada = false;
        String paraula;

        int contador = 0;
        
        System.out.println("Introduce una palabra:");
        while (sc.hasNext()) {
            paraula = sc.next();
            
            if (paraula.equals(".")) {
                break;
            }
            
            if (paraula.equals(p)) {
                trobada = true;
                contador++;
            }
        
        }
        
        if (trobada) {
            System.out.println(contador);
        } else {
            System.out.println("NO");
        }
        
        sc.close();
    }
}