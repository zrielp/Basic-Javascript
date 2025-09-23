function looping(n) {
  // Base Case = kondisi akhir dari rekursif yang menghasilkan nilai
  // tujuannya sama dengan melakukan looping atau perulangan dengan for atau while
  if (n === 0) {
    return;
  }

  console.log(n);
  looping(n - 1);
}

looping(12);
