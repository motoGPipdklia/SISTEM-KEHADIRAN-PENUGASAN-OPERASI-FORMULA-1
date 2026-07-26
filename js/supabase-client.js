/* ================================================================
   SKPO — SAMBUNGAN SUPABASE

   Fail ini mesti dimuatkan selepas:
   1. @supabase/supabase-js@2
   2. js/api-config.js
================================================================ */

(function mulakanSupabaseSKPO() {
  "use strict";

  window.SKPO_SUPABASE_READY = false;
  window.SKPO_SUPABASE_ERROR = "";

  try {
    const konfigurasi = window.SKPO_CONFIG || {};

    const projectUrlInput = String(
      konfigurasi.SUPABASE_URL || ""
    ).trim();

    /*
      Ambil origin projek sahaja. Ini turut membetulkan konfigurasi yang
      tersilap ditampal sebagai /functions/v1/... atau /auth/v1/....
    */
    let projectUrl = "";

    try {
      const url = new URL(projectUrlInput);

      if (
        url.protocol !== "https:" ||
        !url.hostname.endsWith(".supabase.co")
      ) {
        throw new Error("Domain Supabase tidak sah.");
      }

      projectUrl = url.origin;
    } catch (_) {
      throw new Error(
        "SUPABASE_URL tidak sah. Gunakan URL projek seperti https://PROJECT-ID.supabase.co"
      );
    }

    /*
      Menyokong kedua-dua nama kerana projek Supabase lama mungkin
      menggunakan ANON_KEY manakala projek baharu menggunakan
      PUBLISHABLE_KEY.
    */
    const publishableKey = String(
      konfigurasi.SUPABASE_PUBLISHABLE_KEY ||
      konfigurasi.SUPABASE_ANON_KEY ||
      ""
    ).trim();

    if (!projectUrl || !publishableKey) {
      throw new Error(
        "Project URL atau Publishable Key belum dimasukkan dalam js/api-config.js."
      );
    }

    if (
      !window.supabase ||
      typeof window.supabase.createClient !== "function"
    ) {
      throw new Error(
        "Pustaka Supabase tidak berjaya dimuatkan daripada CDN."
      );
    }

    /*
      Jangan gunakan: const supabase = ...
      Nama tersebut boleh bertembung dengan window.supabase daripada CDN.
    */
    const klienSKPO = window.supabase.createClient(
      projectUrl,
      publishableKey,
      {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true,
          storageKey: "skpo-supabase-auth"
        },
        global: {
          headers: {
            "X-Client-Info": "skpo-github-pages"
          }
        }
      }
    );

    window.supabaseClient = klienSKPO;
    window.skpoSupabase = klienSKPO;
    window.SKPO_SUPABASE_READY = true;

    console.info("SKPO: Sambungan Supabase telah dimulakan.");
  } catch (error) {
    window.supabaseClient = null;
    window.skpoSupabase = null;
    window.SKPO_SUPABASE_READY = false;/* ================================================================
   SKPO FORMULA 1 — SAMBUNGAN SUPABASE

   Fail ini mesti dimuatkan selepas:
   1. @supabase/supabase-js@2
   2. js/api-config.js
================================================================ */

(function mulakanSupabaseSKPOFormula1() {
  "use strict";

  const KUNCI_SESI_SUPABASE_F1 = "skpo-f1-supabase-auth";
  const NAMA_KLIEN_F1 = "skpo-f1-github-pages";

  window.SKPO_SUPABASE_READY = false;
  window.SKPO_SUPABASE_ERROR = "";

  try {
    const konfigurasi = window.SKPO_CONFIG || {};

    const projectUrlInput = String(
      konfigurasi.SUPABASE_URL || ""
    ).trim();

    /*
      Ambil alamat asal projek sahaja.

      Ini turut membetulkan konfigurasi yang tersilap dimasukkan sebagai:
      /functions/v1/...
      /auth/v1/...
    */
    let projectUrl = "";

    try {
      const url = new URL(projectUrlInput);

      if (
        url.protocol !== "https:" ||
        !url.hostname.endsWith(".supabase.co")
      ) {
        throw new Error("Domain Supabase Formula 1 tidak sah.");
      }

      projectUrl = url.origin;
    } catch (_) {
      throw new Error(
        "SUPABASE_URL Formula 1 tidak sah. Gunakan URL projek seperti https://PROJECT-ID.supabase.co"
      );
    }

    /*
      Menyokong Publishable Key bagi projek baharu dan Anon Key
      bagi projek Supabase yang menggunakan format lama.
    */
    const publishableKey = String(
      konfigurasi.SUPABASE_PUBLISHABLE_KEY ||
      konfigurasi.SUPABASE_ANON_KEY ||
      ""
    ).trim();

    if (!projectUrl || !publishableKey) {
      throw new Error(
        "Project URL atau Publishable Key Formula 1 belum dimasukkan dalam js/api-config.js."
      );
    }

    if (
      !window.supabase ||
      typeof window.supabase.createClient !== "function"
    ) {
      throw new Error(
        "Pustaka Supabase tidak berjaya dimuatkan daripada CDN."
      );
    }

    /*
      Gunakan nama klien yang khusus supaya tidak bertembung dengan
      window.supabase daripada pustaka CDN.
    */
    const klienSKPOFormula1 = window.supabase.createClient(
      projectUrl,
      publishableKey,
      {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true,

          /*
            Kunci sesi khusus Formula 1.

            Jangan gunakan "skpo-supabase-auth" kerana kunci tersebut
            digunakan oleh sistem MotoGP.
          */
          storageKey: KUNCI_SESI_SUPABASE_F1
        },

        global: {
          headers: {
            "X-Client-Info": NAMA_KLIEN_F1
          }
        }
      }
    );

    /*
      Nama global dikekalkan supaya semua fail JavaScript yang disalin
      daripada MotoGP masih boleh menggunakan window.supabaseClient.
    */
    window.supabaseClient = klienSKPOFormula1;
    window.skpoSupabase = klienSKPOFormula1;
    window.SKPO_SUPABASE_READY = true;

    console.info(
      "SKPO Formula 1: Sambungan Supabase telah dimulakan."
    );
  } catch (error) {
    window.supabaseClient = null;
    window.skpoSupabase = null;
    window.SKPO_SUPABASE_READY = false;

    window.SKPO_SUPABASE_ERROR =
      error?.message ||
      "Sambungan Supabase Formula 1 gagal dimulakan.";

    console.error(
      "SKPO Formula 1: Sambungan Supabase gagal:",
      error
    );
  }
})();
    window.SKPO_SUPABASE_ERROR =
      error?.message || "Sambungan Supabase gagal dimulakan.";

    console.error(
      "SKPO: Sambungan Supabase gagal:",
      error
    );
  }
})();
