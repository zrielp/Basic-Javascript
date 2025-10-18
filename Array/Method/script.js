// METHOD PADA ARRAY

// 1. length
// Fungsinya adalah menghitung jumlah atau panjang array
var arr = ['apel', 'jeruk', 'mangga', 'durian', 'nangka'];
for (var i = 0; i < arr.length; i++) {
  console.log('Buah ke-' + (i + 1) + ': ' + arr[i]);
}
// Penggunaan method length pada looping (for) diatas akan menampilkan semua isi yg ada di dalam array

// 2. join
// Fungsinya adalah menggabungkan seluruh isi array menjadi sebuah string
var arr = ['apel', 'jeruk', 'mangga', 'durian', 'nangka'];
console.log(arr.join());
// Peenggunaan method join tersebut akan menghasilkan "apel,jeruk,manga,durian,nangka"
// Jika ingin mengganti tanda pemisahnya, bisa tambahkan di dalam kurung method
console.log(arr.join('/'));

// 3. push & pop
// push berfungsi untuk MENAMBAHKAN isi array DI AKHIR, tanpa melalui/menambahkan di array
arr.push('semangka', 'melon');
console.log(arr.join('/'));
// Hasilnya akan menambahkan string yg ada di dalam method push ke dalam array

// pop berfungsi untuk MENGHAPUS isi array DI AKHIR, tanpa melalui/menambahkan di array
arr.pop();
console.log(arr.join('/'));
// Hasilnya akan menghapus string terakhir yang berada di dalam array, yg di hapus adalah "melon"

// 4. unshift & shift
// unshift berfungsi untuk MENAMBAHKAN isi array DI AWAL, tanpa melalui/menambahkan di array
arr.unshift('salak', 'srikaya');
console.log(arr.join('/'));
// Hasilnya akan menambahkan string yg ada di dalam method unshift DI AWAL array

// shift berfungsi untuk MENGHAPUS isi array DI AWAL, tanpa melalui/menambahkan di array
arr.shift();
console.log(arr.join('/'));
// Hasilnya akan menghapus string pertama yang berada di dalam array, yg di hapus adalah "salak"
