```javascript
function login() {

    // Ambil maklumat daripada borang

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;

    const message =
        document.getElementById("message");


    // ================================
    // AKAUN PENTADBIR
    // ================================

    const ADMIN_USERNAME = "admin";

    const ADMIN_PASSWORD = "sakti123";


    // ================================
    // SEMAK LOGIN
    // ================================

    if (
        username === ADMIN_USERNAME &&
        password === ADMIN_PASSWORD
    ) {

        message.style.color = "green";

        message.innerHTML =
            "✓ Log masuk berjaya. Sila tunggu...";


        // ================================
        // LINK SISTEM PEMANTAUAN PUAN
        // ================================

        setTimeout(function () {

            window.location.href =
                "https://sakti-pemantauan-one.vercel.app/rekod-baharu";

        }, 1000);


    } else {

        message.style.color = "red";

        message.innerHTML =
            "✕ ID pengguna atau kata laluan tidak betul.";

    }

}
```