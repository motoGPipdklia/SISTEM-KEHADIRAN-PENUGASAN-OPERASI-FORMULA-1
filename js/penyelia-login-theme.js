"use strict";

/*
  Tambahan ini hanya membersihkan borang selepas logout.
  Fungsi asal Urusetia, laporan dan SITREP tidak diubah.
*/
(function pasangTemaLoginUrusetiaF1() {
  const logoutAsal = window.logoutPenyelia;

  if (typeof logoutAsal !== "function") return;

  window.logoutPenyelia = async function logoutPenyeliaBersih(...args) {
    const hasil = await logoutAsal.apply(this, args);
    const noBadan = document.getElementById("noBadan");
    const password = document.getElementById("password");
    const status = document.getElementById("loginStatus");

    if (noBadan) noBadan.value = "";
    if (password) password.value = "";

    if (status) {
      status.innerHTML = "";
      status.className = "status hidden";
      status.style.display = "none";
    }

    window.scrollTo(0, 0);
    noBadan?.focus();
    return hasil;
  };
})();

