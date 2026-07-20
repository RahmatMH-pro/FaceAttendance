const video = document.getElementById("video");
const status = document.getElementById("status");
const clock = document.getElementById("clock");
const date = document.getElementById("date");
const studentName = document.getElementById("studentName");

async function startCamera() {

    try {

        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        });

        video.srcObject = stream;

        await video.play();

        status.innerHTML = "🟢 Kamera Aktif";

    } catch (err) {

        console.log(err);

        status.innerHTML = "🔴 Kamera Tidak Aktif";

    }

}

function updateClock() {

    const now = new Date();

    clock.innerHTML = now.toLocaleTimeString("id-ID");

    date.innerHTML = now.toLocaleDateString("id-ID", {

        weekday: "long",

        day: "numeric",

        month: "long",

        year: "numeric"

    });

}

studentName.innerHTML = "👤 Menunggu Murid...";

setInterval(updateClock,1000);

updateClock();

startCamera();
