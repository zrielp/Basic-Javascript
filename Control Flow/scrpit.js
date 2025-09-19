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
var item = prompt(
  'Masukkan nama makanan / minuman: \n (cth: ayam, babi, ikan, susu, alkohol, kopi) '
);
switch (item) {
  case 'ayam':
    alert('anda memilih makanan yang HALAL');
    break;
  // fungsi "break" adalah agar setelah menampilkan alert, maka program akan langsung keluar.
  // jika tidak menggunakan "break", maka program akan dilanjutkan ke case berikutnya
  case 'babi':
    alert('anda memilih makanan yang HARAM');
    break;

  // contoh menghilangkan "break" yang benar
  case 'susu':
  case 'ayam':
  case 'ikan':
  case 'kopi':
    // jika codenya seperti ini tanpa break dan alert di setiap case, maka hasilnya akan menampilkan alert pada case terakhir
    // jadi jika user menginput nama makanan/minuman di atas maka hasilnya akan menampilkan alert pada case terakhir
    alert('anda memilih minuman yang HALAL');
    break;
  case 'alkohol':
  case 'babi':
    alert('anda memilih minuman yang HARAM');
    break;
  default:
    alert('Makanan / minuman tidak tersedia');
}
