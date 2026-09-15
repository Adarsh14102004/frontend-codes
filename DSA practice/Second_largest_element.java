
public class Second_largest_element {
    public static void main(String args[]) {
        int largest = Integer.MIN_VALUE;
        int second = Integer.MIN_VALUE;
        int arr[] = { 1, 2, 3, 4, 5 };
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > largest) {
                second = largest;
                largest = arr[i];

            } else if (arr[i] > second && arr[i] != largest) {
                second = arr[i];
            }
        }
        System.out.println("Second largest element is: " + second);
    }

}