import java.util.Scanner;

public class problema6 {
    public static void main(String[] args) {

        System.out.println("Problema 6");

        Scanner sc = new Scanner(System.in);
        
        System.out.println("Escribe la secuencia de paréntesis:");
        String secuencia = sc.nextLine().trim();
        
        int balance = 0;  
        
        for (int i = 0; i < secuencia.length(); i++) {
            char c = secuencia.charAt(i);
            
            if (c == '(') {
                balance++;  
            } else if (c == ')') {
                balance--;  
            }
            
            if (balance < 0) {
                break;
            }
        }
        
        if (balance == 0) {
            System.out.println("yes");
        } else {
            System.out.println("no");
        }
        
        sc.close();
    }
}