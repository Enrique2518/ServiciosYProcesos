import java.util.Scanner;

public class problema3 {
    public static void main(String[] args) {

        System.out.println("Problema 3");

        Scanner sc = new Scanner(System.in);
        
        System.out.println("Introduce la palabra p:");
        String p = sc.next();
        
        boolean trobada = false;
        String paraula;
        
        System.out.println("Introduce una palabra:");
        while (sc.hasNext()) {
            paraula = sc.next();
            
            if (paraula.equals(".")) {
                break;
            }
            
            if (paraula.equals(p)) {
                trobada = true;
                break;
            }
        
            if (paraula.compareTo(p) > 0) {
                break;
            }
        }
        
        if (trobada) {
            System.out.println("SI");
        } else {
            System.out.println("NO");
        }
        
        sc.close();
    }
}