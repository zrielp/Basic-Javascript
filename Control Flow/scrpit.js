// // PENGULANGANAN (looping) CONTROL FLOW

// // FOR
// // contoh ini digunakan untuk menampilkan popup alert yang ada di dalam "for" hingga hasilnya bernilai false
// // pada contoh ini akan menampilkan alert sebanyak 5 kali
// alert('mulai');
// for (var i = 0; i < 5; i++) {
//   //(inisilaisasi; kondisi; increment)
//   alert('ini contoh Pengulangan menggunakan for ke-' + i);
// }
// alert('selesai');

// // WHILE
// // nilai awal atau inisialisasi)
// // while (kondisi/kondisi terminasi) {
// //   aksi
// // increment/decrement
// // }
// var nilaiAwal = 9;
// while (nilaiAwal <= 10) {
//   console.log('ini adalah pengulangan while' + nilaiAwal);
//   nilaiAwal++;
// }

// // PENGKONDISIAN / PERCABANGAN
// // IF
// // digunakan var supaya angka yg dimasukkan di prompt bisa digunakan karena inputnya akan masuk di dalam "var angka"
// var angka = prompt('Masukkan angka: ');
// if (angka % 2 === 0) {
//   alert(
//     'Angka ' +
//       angka +
//       ' adalah bilangan genap, ini pengulangan menggunakan IF dan ELSE'
//   );
// } else {
//   alert(
//     'Angka ' +
//       angka +
//       ' adalah bilangan ganjil, ini pengulangan menggunakan IF dan ELSE'
//   );
// }
// Artinya jika angka habis dibagi (%) 2, maka akan menghasilkan "sisa bagi === (sama dengan)" 0, maka angka tersebut adalah bilangan genap
// jika tidak habis dibagi 2, maka akan menghasilkan "sisa bagi !== (tidak sama dengan)" 0, maka angka tersebut adalah bilangan ganjil

// SWITCH
var angka = prompt('Masukkan angka: ');
switch (angka) {
  case '1':
    alert('anda memasukkan angka 1');
    break;
  case '2':
    alert('anda memasukkan angka 2');
    break;
  case '3':
    alert('anda memasukkan angka 3');
    break;
  default:
    alert('angka yang anda masukkan salah');
}
