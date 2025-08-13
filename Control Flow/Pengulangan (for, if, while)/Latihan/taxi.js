// for (var i = 0; i < 10; i++) {
//   console.log('Taxi No. ' + i + ' berangkat dengan lancar');
// }

var totalTaxi = 10;
var taxiBeroperasi = 6;
var noTaxi = 1;
// while (noTaxi <= taxiBeroperasi) {
//   console.log('Taxi No. ' + noTaxi + ' berangkat dengan lancar.');
//   noTaxi++;
// }

for (noTaxi; noTaxi <= totalTaxi; noTaxi++) {
  if (noTaxi < 7) {
    console.log('Taxi No. ' + noTaxi + ' berangkat dengan lancar.');
  } else {
    console.log('Taxi No. ' + noTaxi + ' tidak siap untuk berangkat.');
  }
}
