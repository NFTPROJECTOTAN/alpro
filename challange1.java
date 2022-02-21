import java.util.Scanner;

public class HelloWorld {
    public static void main(String[] args) {


        Scanner UserInput = new Scanner(System.in);

        System.out.print("selamat datang di program menghitung posisi suatu benda jatuh pada suatu waktu apakah anda ingin melanjutkannya? 1 untuk ya dan 0 untuk tidak");
        int pembukaaan = UserInput.nextInt();
        if (pembukaaan == 1) {
            System.out.print("gravity =");
            float gravity = UserInput.nextFloat();

            System.out.print("initialVelocity =");
            float initialVelocity = UserInput.nextFloat();

            System.out.print("fallingTime =");
            float fallingTime = UserInput.nextFloat();

            System.out.print("initialPosition =");
            float initialPosition = UserInput.nextFloat();

            double hasil = 0.5 * gravity * fallingTime * fallingTime;
            hasil = hasil + initialPosition;
            System.out.println("An object's position after" + " " + fallingTime + " " + "second is" + " " + hasil + "m.");
        } else {
            System.out.println("yah sayang sekali, selamat tinggal :)");
        }


        //   var waktu = 10;
        //   var gravitasi = 9.8;
        //  var ketinggian = 10;
        //    var kecepatan_awal = 5;


        //    var hasil = kecepatan_awal+gravitasi * ketinggian;
        //    System.out.println(hasil);
    }
}
