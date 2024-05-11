document.getElementById("compressBtn").addEventListener("click", function () {
  const audioFileInput = document.getElementById("audioFileInput");
  const audioFile = audioFileInput.files[0];

  if (audioFile) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const audioData = e.target.result;
      compressAudio(audioData);
    };

    reader.readAsArrayBuffer(audioFile);
  } else {
    alert("Please select an audio file.");
  }
});

function compressAudio(audioData) {
  // Simulated compression process
  // Replace this with your actual compression logic
  // For demonstration purposes, it will just simulate a compressed file download
  const compressedAudioData = audioData.slice(0, audioData.byteLength / 2);

  // Create a Blob from the compressed audio data
  const blob = new Blob([compressedAudioData], { type: "audio/mp3" });

  // Create a download link for the compressed audio
  const downloadLink = document.getElementById("downloadLink");
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.style.display = "block";

  // Auto-download the compressed audio file
  downloadLink.click();
}
