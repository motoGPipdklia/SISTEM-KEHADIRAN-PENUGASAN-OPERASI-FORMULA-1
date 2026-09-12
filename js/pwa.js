"use strict";

let deferredInstallPrompt = null;

function isIOS() {
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
}

function isStandalone() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}

function getInstallButton() {
  return document.getElementById("btnInstallPwa");
}

function getIOSHint() {
  return document.getElementById("iosInstallHint");
}

function kemasKiniPaparanPwa() {
  const btn = getInstallButton();
  const iosHint = getIOSHint();

  if (isStandalone()) {
    if (btn) btn.hidden = true;
    if (iosHint) iosHint.hidden = true;
    return;
  }

  if (isIOS()) {
    if (btn) btn.hidden = true;
    if (iosHint) iosHint.hidden = false;
  } else {
    if (iosHint) iosHint.hidden = true;
  }
}

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;

  const btn = getInstallButton();
  if (btn && !isStandalone()) {
    btn.hidden = false;
  }
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  const btn = getInstallButton();
  if (btn) btn.hidden = true;
});

async function pasangPwa() {
  if (!deferredInstallPrompt) {
    kemasKiniPaparanPwa();
    return;
  }

  deferredInstallPrompt.prompt();

  try {
    await deferredInstallPrompt.userChoice;
  } finally {
    deferredInstallPrompt = null;
    kemasKiniPaparanPwa();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = getInstallButton();

  if (btn) {
    btn.addEventListener("click", pasangPwa);
  }

  kemasKiniPaparanPwa();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("./service-worker.js")
        .catch((error) => {
          console.error("Service Worker gagal didaftarkan:", error);
        });
    });
  }
});