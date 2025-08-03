// PENGULANGANAN (looping) CONTROL FLOW

// FOR
// contoh ini digunakan untuk menampilkan popup alert yang ada di dalam "for" hingga hasilnya bernilai false
// pada contoh ini akan menampilkan alert sebanyak 5 kali
alert('mulai');
for (var i = 0; i < 5; i++) {
  //(inisilaisasi; kondisi; increment)
  alert('ini contoh control flow (Pengulangan) ke-' + i);
}
alert('selesai');

// IF
// digunakan var supaya angka yg dimasukkan di prompt bisa digunakan karena inputnya akan masuk di dalam "var angka"
var angka = prompt('Masukkan angka: ');
if (angka % 2 === 0) {
  alert('Angka ' + angka + ' adalah bilangan genap');
} else {
  alert('Angka ' + angka + ' adalah bilangan ganjil');
}
// Artinya jika angka habis dibagi (%) 2, maka akan menghasilkan "sisa bagi === (sama dengan)" 0, maka angka tersebut adalah bilangan genap
// jika tidak habis dibagi 2, maka akan menghasilkan "sisa bagi !== (tidak sama dengan)" 0, maka angka tersebut adalah bilangan ganjil

// WHILE
// nilai awal atau inisialisasi)
// while (kondisi/kondisi terminasi) {
//   aksi
// increment/decrement
// }

var nilaiAwal = 1;
while (nilaiAwal <= 10) {
  console.log('Hello World! ' + nilaiAwal);
  nilaiAwal++;
}
