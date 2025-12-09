import java.util.Scanner;

public class problema4 {
    public static void main(String[] args) {

        System.out.println("Problema 4");

        Scanner sc = new Scanner(System.in);
        
        System.out.println("Introduce el numero p:");
        int p = sc.nextInt();
        String resultado = "";
        boolean insertado = false;
        
        while (sc.hasNextInt()) {
            System.out.println("Introduce una sequencia de numeros ascendente:");
            int num = sc.nextInt();
            
            if (!insertado && p <= num) {
                if (!resultado.isEmpty()) {
                    resultado += " ";
                }
                resultado += p;
                insertado = true;
            }
            
            if (!resultado.isEmpty() && (!insertado || insertado && p != num)) {
                resultado += " ";
            }
            resultado += num;
        }
        
        if (!insertado) {
            if (!resultado.isEmpty()) {
                resultado += " ";
            }
            resultado += p;
        }
        
        System.out.println(resultado);
        
        sc.close();
    }
}