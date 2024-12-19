let display = document.getElementById("display");
let input = "";

function tambahNilai(angka) {
  input += angka;
  display.innerText = input;
}

function hapusTampilan() {
  document.getElementById("display").innerHTML = "0";
}

function konversiBiner() {
  let desimal = parseInt(input);

  if (desimal >= 0) {
    let biner = "";

    while (desimal > 0) {
      biner = (desimal % 2) + biner;
      desimal = Math.floor(desimal / 2);
    }

    display.innerText = biner || "0";
  } else {
    display.innerText = "Invalid";
  }

  input = "";
}

function hapus() {
  const hasil = document.getElementById("display").innerHTML;
  const hapus = hasil.slice(0, -1); // menghapus digit terakhir
  document.getElementById("display").innerHTML = hapus;
}
