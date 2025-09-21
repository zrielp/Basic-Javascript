function jumlahVolumeDuaKubus(a, b) {
  // yang ada pada dalam kurung di atas "(a, b)" adalah sebuah parameter

  var volumeA = a * a * a;
  var volumeB = b * b * b;
  var total = volumeA + volumeB;

  return total;
}

var a = parseInt(prompt('masukkan sisi kubus A : '));
var b = parseInt(prompt('masukkan sisi kubus B : '));
var hasil = jumlahVolumeDuaKubus(a, b);
// yang ada pada dalam kurung di bawah "(8, 3)" adalah sebuah argumen
alert('Hasilnya adalah ' + hasil);
