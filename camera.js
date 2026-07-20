const video=document.getElementById("video");

const status=document.getElementById("status");

async function startCamera(){

try{

const stream=await navigator.mediaDevices.getUserMedia({

video:true,

audio:false

});

video.srcObject=stream;

await video.play();

status.innerHTML="📷 Kamera Aktif";

}
catch(err){

status.innerHTML=err.message;

console.log(err);

}

}

startCamera();
