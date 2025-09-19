var tanya = true;
while (tanya) {
  var p = prompt('Masukkan pilihan: gunting, batu, atau kertas');

  var computer = Math.random();
  if (computer < 0.34) {
    computer = 'gunting';
  } else if (computer >= 0.34 && computer < 0.67) {
    computer = 'batu';
  } else {
    computer = 'kertas';
  }

  var hasil = '';
  if (p === computer) {
    hasil = 'SERI!';
  } else if (p === 'gunting') {
    //   if (computer === 'batu') {
    //     hasil = 'KALAH!';
    //   } else {
    //     hasil = 'MENANG!';
    //   }

    // atau bisa di mudahkan dengan code berikut :
    hasil = computer === 'batu' ? 'KALAH!' : 'MENANG!';
  } else if (p === 'batu') {
    //   if (computer === 'kertas') {
    //     hasil = 'KALAH!';
    //   } else {
    //     hasil = 'MENANG!';
    //   }
    hasil = computer === 'kertas' ? 'KALAH!' : 'MENANG!';
  } else if (p === 'kertas') {
    //   if (computer === 'gunting') {
    //     hasil = 'KALAH!';
    //   } else {
    //     hasil = 'MENANG!';
    //   }
    hasil = computer === 'gunting' ? 'KALAH!' : 'MENANG!';
  } else {
    hasil = 'Memasukkan pilihan yang salah!';
  }

  alert(
    'Kamu memilih : ' +
      p +
      ' dan komputer memilih : ' +
      computer +
      '\nMaka hasilnya adalah kamu ' +
      hasil
  );

  tanya = confirm('Main lagi?');
}

alert('Terima kasih sudah bermain!');
