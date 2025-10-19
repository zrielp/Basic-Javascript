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
console.log(arr.join());
// Peenggunaan method join tersebut akan menghasilkan "apel,jeruk,manga,durian,nangka"
// Jika ingin mengganti tanda pemisahnya, bisa tambahkan di dalam kurung method
console.log(arr.join('/'));

// 3. push & pop
// push berfungsi untuk MENAMBAHKAN isi array DI AKHIR, tanpa melalui/menambahkan di array
arr.push('semangka', 'melon');
console.log(arr.join(', '));
// Hasilnya akan menambahkan string yg ada di dalam method push ke dalam array

// pop berfungsi untuk MENGHAPUS isi array DI AKHIR, tanpa melalui/menambahkan di array
arr.pop();
console.log(arr.join(', '));
// Hasilnya akan menghapus string terakhir yang berada di dalam array, yg di hapus adalah "melon"

// 4. unshift & shift
// unshift berfungsi untuk MENAMBAHKAN isi array DI AWAL, tanpa melalui/menambahkan di array
arr.unshift('salak', 'srikaya');
console.log(arr.join(' + '));
// Hasilnya akan menambahkan string yg ada di dalam method unshift DI AWAL array

// shift berfungsi untuk MENGHAPUS isi array DI AWAL, tanpa melalui/menambahkan di array
arr.shift();
console.log(arr.join(' + '));
// Hasilnya akan menghapus string pertama yang berada di dalam array, yg di hapus adalah "salak"

// 5. splice & slice
// splice berfungsi untuk MENAMBAH, MENGHAPUS, ATAU MENGGANTI isi array pada posisi tertentu
// rumus : splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
arr.splice(2, 0, 'anggur', 'starwberry');
console.log(arr.join(' - '));

// slice berfungsi untuk MENGAMBIL sebagian isi array dan membuat array baru
// rumus : slice(indexAwal, indexAkhir)             indexAkhir "TIDAK IKUT DIAMBIL"
var arr2 = arr.slice(1, 4);
console.log(arr2.join(' ~ '));

// 6. forEach & map
// forEach berfungsi untuk melakukan looping/pengulangan pada setiap elemen array
var angka = [1, 2, 3, 4, 5];
angka.forEach(function (e) {
  console.log(e);
});

arr.forEach(function (e, i) {
  console.log('Buah ke- ' + (i + 1) + ' adalah ' + e);
});

// map berfungsi untuk melakukan looping/pengulangan pada setiap elemen array dan menghasilkan array baru (mengembalikan array)
var angka1 = [1, 5, 3, 4];
var angka2 = angka1.map(function (e) {
  return e * 2;
});
console.log(angka2.join(' | '));

// 7. sort
// sort berfungsi untuk mengurutkan isi array
var angka3 = [1, 3, 9, 4, 2, 8, 5, 6];
angka3.sort();
console.log(angka3.join(' <> '));
// Hasilnya akan mengurutkan angka dari yang terkecil ke terbesar

// 8. filter & find
// filter berfungsi untuk menyaring isi array dan akan menampilkan banyak niali yg diminta/di filter
var angkaFilter = angka3.filter(function (e) {
  return e < 7;
});
console.log(angkaFilter.join(' || '));

// find berfungsi untuk mencari isi array dan akan menampilkan satu nilai yg pertama kali ditemukan sesuai yg dicari
var angkaFind = angka3.find(function (e) {
  return e == 7;
});
console.log(angkaFind);
