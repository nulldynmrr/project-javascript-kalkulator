let countHitung = 0;
function tambahNilai(value) {
  if (countHitung === 0) {
    document.getElementById("display").innerHTML += value;
  } else {
    document.getElementById("memory").innerHTML =
      document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML += value;
  }
}

function hapusTampilan() {
  document.getElementById("memory").innerHTML = "";
  document.getElementById("display").innerHTML = "0";
}

function hitungHasil() {
  const hitung = document.getElementById("display").innerHTML;
  console.log("h" + hitung);
  try {
    const hasil = eval(hitung);
    document.getElementById("memory").innerHTML = hitung;
    document.getElementById("display").innerHTML = hasil;
  } catch (error) {
    document.getElementById("memory").innerHTML = "";
    document.getElementById("display").innerHTML = "error";
  }
}

function hapus() {
  const hasil = document.getElementById("display").innerHTML;
  const hapus = hasil.slice(0, -1); // menghapus digit terakhir
  document.getElementById("display").innerHTML = hapus;
}
