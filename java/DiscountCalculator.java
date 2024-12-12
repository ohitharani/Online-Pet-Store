import java.util.Scanner;

public class DiscountCalculator {

    // Method to apply a discount
    public static double applyDiscount(double price, double discountPercentage) {
        if (discountPercentage < 0 || discountPercentage > 100) {
            throw new IllegalArgumentException("Invalid discount percentage");
        }
        return price - (price * (discountPercentage / 100));
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Input original price
        System.out.print("Enter the original price: $");
        double originalPrice = scanner.nextDouble();

        // Input promo code
        System.out.print("Enter promo code (or leave empty): ");
        scanner.nextLine(); // Consume newline
        String promoCode = scanner.nextLine();

        // Apply discount based on promo code
        double finalPrice;
        if ("XMAS20".equalsIgnoreCase(promoCode)) {
            finalPrice = applyDiscount(originalPrice, 20.0);
            System.out.println("Promo code applied! You saved 20%.");
        } else {
            finalPrice = originalPrice;
            System.out.println("No valid promo code applied.");
        }

        // Display final price
        System.out.printf("Final price: $%.2f%n", finalPrice);

        scanner.close();
    }
}
