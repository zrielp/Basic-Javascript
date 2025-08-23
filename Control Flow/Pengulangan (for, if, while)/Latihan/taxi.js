// latihan 1
// for (var i = 0; i < 10; i++) {
//   console.log('Taxi No. ' + i + ' berangkat dengan lancar');
// }

// latihan 2
var totalTaxi = 10;
var taxiBeroperasi = 6;
var noTaxi = 1;
// while (noTaxi <= taxiBeroperasi) {
//   console.log('Taxi No. ' + noTaxi + ' berangkat dengan lancar.');
//   noTaxi++;
// }

// latihan 3
for (noTaxi; noTaxi <= totalTaxi; noTaxi++) {
  if (noTaxi <= 6) {
    console.log('Taxi No. ' + noTaxi + ' berangkat dengan lancar.');
    // latihan 4
  } else if (noTaxi === 8) {
    console.log('Taxi No. ' + noTaxi + ' sedang dalam lembur.');
    //
  } else {
    console.log('Taxi No. ' + noTaxi + ' tidak siap untuk berangkat.');
  }
}
