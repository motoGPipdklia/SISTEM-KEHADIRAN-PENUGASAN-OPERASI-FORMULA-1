"use strict";

/* ================================================================
   SKPO — PORTAL OPERASI
   Pautan utama kekal sebagai pautan HTML agar portal masih berfungsi
   walaupun JavaScript gagal dimuatkan.
================================================================ */

(function mulakanPortalSKPO() {
  const tahunSemasa = document.getElementById("tahunSemasa");
  const kadOperasi = document.querySelectorAll(".operation-card");

  if (tahunSemasa) {
    tahunSemasa.textContent = String(new Date().getFullYear());
  }

  kadOperasi.forEach((kad) => {
    kad.addEventListener("click", () => {
      const namaOperasi = kad.dataset.operation || "operasi";
      document.title = `Membuka ${namaOperasi} | SKPO`;
    });

    /*
      Enter berfungsi secara asal untuk pautan. Kod ini menambah sokongan
      kekunci Space supaya kad terasa seperti pilihan aplikasi.
    */
    kad.addEventListener("keydown", (event) => {
      if (event.key !== " ") return;

      event.preventDefault();
      window.location.assign(kad.href);
    });
  });
})();
