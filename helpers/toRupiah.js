function toRupiah(num) {
  const str = String(num);
  let rupiah = 'Rp ';
  for (let i = 0; i < str.length; i++) {
    rupiah += str[i];
    if ((str.length - i - 1) % 3 == 0 && i != str.length-1) {
      rupiah += '.';
    }
  }
  rupiah += ',00'

  return rupiah;
}

// console.log(toRupiah(8000))

module.exports = toRupiah;