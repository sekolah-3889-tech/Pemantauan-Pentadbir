```javascript
function login() {

    // AMBIL NILAI INPUT
    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;

    const message =
        document.getElementById("message");


    // CONTOH AKAUN PENTADBIR
    // INI HANYA UNTUK PROTOTAIP

    const adminUsername = "admin";
    const adminPassword = "sakti123";


    // SEMAK LOGIN

    if (
        username === adminUsername &&
        password === adminPassword
    ) {

        message.style.color = "green";

        message.innerHTML =
            "✓ Log masuk berjaya. Membuka sistem...";


        // TUNGGU SEKEJAP SEBELUM REDIRECT

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
