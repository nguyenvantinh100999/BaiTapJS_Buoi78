export function thayDoiGiaTri(x, y, arr) {
  let ketQua = false;
  for (let index in arr) {
    if (x === arr[index]) {
      arr[index] = y;
      ketQua = true;
    }
  }
  return ketQua; //output
}
