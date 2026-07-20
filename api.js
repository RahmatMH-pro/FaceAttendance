// =========================
// FACE ATTENDANCE API
// =========================

const API_URL = "https://script.google.com/macros/s/AKfycbxNypYFoJ04RneoVdg3PKgot-5fWorLnjp86PLFz73MZGK2dpCaFAHK2-jP1MUSIpCt/exec";

async function checkServer() {

    const serverStatus = document.getElementById("serverStatus");

    try {

        const response = await fetch(API_URL);

        const data = await response.json();

        if (data.status === "success") {

            serverStatus.innerHTML = "🟢 Connected";

        } else {

            serverStatus.innerHTML = "🔴 Error";

        }

    } catch (err) {

        console.log(err);

        serverStatus.innerHTML = "🔴 Offline";

    }

}

checkServer();
