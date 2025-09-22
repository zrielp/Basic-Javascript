// contoh penggunaan jika argument yang digunakan banyak
// ini menggunakan looping dan variable arguments yang memiliki tipe data Array
// argument berbeda dengan arguments, yang dimana arguments adalah tempat menyimpan semua argumen yang dikirimkan ke dalam fungsi
// argument hanya menyimpan dan dikirim ke fungsi hanya mengikuti parameter yang ada pada fungsi tersebut
function tambah() {
  var hasil = 0;
  for (var i = 0; i < arguments.length; i++) {
    // arguments[i] adalah untuk memanggil semua argument yang ada meskipun melebihi parameter yang ada pada fungsi
    hasil += arguments[i];
  }
  return hasil;
}

var coba = tambah(1, 2, 3, 4, 5, 6, 7);
console.log(coba);
