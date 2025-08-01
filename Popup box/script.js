// Memunculkan popup alert
alert('jangan dibuka!');
alert('sumpah jangann!');
alert('dibilang jangan!');

// Memunculkan popup prompt (terdapat box)
// tambahan var atau variabel digunakan untuk menyimpan nilai yang dimasukkan pengguna ke dalam variabel
var nama = prompt('Masukkan nama Anda:');
alert('Nama Anda adalah: ' + nama);

// Memunculkan popup confirm (terdapat box dengan tombol OK dan Cancel)
var konfirmasi = confirm('Kamu yakin nih mau lanjut?');
if (konfirmasi) {
  alert('Selamat datang, ' + nama + '!');
} else {
  alert('Jangan nyesel yaa');
}

// Kombinasi Popup
var nama = prompt('Masukkan nama Anda:');
if (nama) {
  var konfirmasi = confirm('Bener nama kamu ' + nama + '?');
  if (konfirmasi) {
    alert('Selamat datang, ' + nama + '!');
  } else {
    alert('Refresh lagi ya, ' + nama + '!');
  }
} else {
  alert('Nama tidak boleh kosong!');
}
