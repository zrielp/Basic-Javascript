// for (var i = 0; i < 10; i++) {
//   console.log('Taxi No. ' + i + ' berangkat dengan lancar');
// }

var totalTaxi = 10;
var taxiBeroperasi = 6;
var noTaxi = 1;
while (noTaxi <= taxiBeroperasi) {
  console.log('Taxi No. ' + noTaxi + ' berangkat dengan lancar.');
  noTaxi++;
}

for (noTaxi = taxiBeroperasi + 1; noTaxi <= totalTaxi; noTaxi++) {
  console.log('Taxi No. ' + noTaxi + ' tidak berangkat.');
}
