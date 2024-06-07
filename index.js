import { thayDoiGiaTri } from "./method.js";
let arr = [11, 17, 19, 25, 22, 31, 37];
document.getElementById("btnCapNhat").onclick = function (e) {
  //input: giá trị cần thay : number, giá trị mới :number
  let x = +document.getElementById("nhapGiaTriCanDoi").value;
  let y = +document.getElementById("nhapGiaTriMoi").value;
  //output: arr
  //progress:
  let ketQua = thayDoiGiaTri(x, y, arr);
  if (ketQua) {
    document.getElementById("ketQua").innerHTML = "cập nhật thành công";
    document.getElementById("arrNumber").innerHTML = arr;
  } else {
    document.getElementById(
      "ketQua"
    ).innerHTML = `không tìm thấy ${x} trong mảng [${arr}]`;
  }
};

// document.getElementById("themSo").onclick = function (e) {
//   //input: thêm số vào mảng: number
//   let themSo = document.querySelector("#nhapMang").value;
//   let arr = [];
//   for (let i of themSo) {
//     let number = themSo[i];
//     arr.push(number);
//   }
//   // arr.push(themSo);
//   document.getElementById("arrBT").innerHTML = arr;
// };

const inputField = document.getElementById("nhapMang");
const addButton = document.getElementById("themSo");
const displayLine = document.getElementById("arrBT");

const items = []; // Array to store values

addButton.addEventListener("click", () => {
  const value = +inputField.value.trim();

  if (value) {
    items.push(value);
    updateDisplayLine();
    inputField.value = ""; // Clear input field after adding
  }
  console.log(items);
});

function updateDisplayLine() {
  displayLine.textContent = items.join(", ");
}

document.getElementById("btnTinhTong").onclick = function (e) {
  //input: items[]
  //output: tổng:number
  let tong = 0;
  //progress:
  for (let i in items) {
    tong += items[i];
  }
  //in kết quả ra màn hình:
  document.getElementById("ketQua1").innerHTML = tong;
};

document.getElementById("btnDemSoDuong").onclick = function (e) {
  //input: items[]
  //output: đếm số dương: number
  let dem = 0;
  //progress:
  for (let i in items) {
    if (items[i] > 0) {
      dem++;
    }
  }
  //in kết quả ra màn hình
  document.getElementById("ketQua2").innerHTML = dem;
};

document.getElementById("btnTimSoDuong").onclick = function (e) {
  //input: items
  //output: soDuongMin:number
  let soDuongMin = items[0];
  //progress:
  for (let i of items) {
    if (i > 0) {
      if (i < soDuongMin) {
        soDuongMin = i;
      }
    } else {
      soDuongMin = "không tìm thấy số dương trong mảng";
    }
  }
  //in kết quả ra màn hình
  document.getElementById("ketQua3").innerHTML = soDuongMin;
};

document.getElementById("btnTimSoChan").onclick = function (e) {
  //input: items[]
  //output: soChan
  let soChan = items[0];
  //progress:
  for (let i of items) {
    if (i % 2 === 0) {
      soChan = i;
    }
  }
  //in kết quả ra màn hình
  document.getElementById("ketQua4").innerHTML = soChan;
};
document.getElementById("btnSapXep").onclick = function (e) {
  //input: items[]
  //output: items[]
  items.sort((a, b) => a - b);
  //in kết quả ra màn hình
  document.getElementById("ketQua5").innerHTML = items;
};

document.getElementById("btnTimSoNguyen").onclick = function (e) {
  //input: items
  //output: số nguyên tố
  let soNT = items[0];
  //progress:
  for (let i of items) {
    let checkSNT = timSoNT(i);
    if (i === 1) {
      checkSNT = false;
    }
    if (checkSNT) {
      soNT = i;
      break;
    }
  }
  //in kết quả ra màn hình
  document.getElementById("ketQua6").innerHTML = soNT;
};

function timSoNT(n) {
  let checkSNT = true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      checkSNT = false;
      break;
    }
  }
  return checkSNT;
}
