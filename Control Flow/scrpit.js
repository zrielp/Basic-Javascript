// PENGULANGANAN (looping) CONTROL FLOW

alert('mulai');
// contoh ini digunakan untuk menampilkan popup alert yang ada di dalam "for" sebanyak hasil yg diminta berniali false, jika masih bernila true maka akan terus diulang
// pada contoh ini akan menampilkan alert sebanyak 5 kali
for (var i = 0; i < 5; i++) {
  alert('ini contoh control flow ke-' + i);
}
alert('selesai');

// PENGKONDISIAN CONTROL FLOW

// digunakan var supaya angka yg dimasukkan di prompt bisa digunakan karena ada di dalam var angka
var angka = prompt('Masukkan angka: ');

// jika angka yang dimasukkan adalah bilangan genap, maka akan menampilkan alert bahwa angka tersebut adalah bilangan genap
// jika angka yang dimasukkan adalah bilangan ganjil, maka akan menampilkan alert bahwa angka tersebut adalah bilangan ganjil
// pada contoh ini akan menampilkan alert sesuai dengan angka yang dimasukkan
if (angka % 2 === 0) {
  alert('Angka ' + angka + ' adalah bilangan genap');
} else {
  alert('Angka ' + angka + ' adalah bilangan ganjil');
}

// Artinya jika angka habis dibagi 2, maka akan menghasilkan "sisa bagi ===" 0, maka angka tersebut adalah bilangan genap
