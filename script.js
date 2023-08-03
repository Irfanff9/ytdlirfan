var convertBtn = document.querySelector('.convert');
var convertBtnAudioOnly = document.querySelector('.convert-audio-only');
var title = document.querySelector('.heading');
var URLinput = document.querySelector('.URLinput');
var videoName = document.querySelector('.video-name');

convertBtn.addEventListener('click', () => {
  console.log(`URL: ${URLinput.value}`);
  console.log(`filename: ${videoName.value}`);
  sendURL(URLinput.value, videoName.value);
});

convertBtnAudioOnly.addEventListener('click', () => {
  console.log(`URL: ${URLinput.value}`);
  console.log(`filename: ${videoName.value}`);
  sendURLHigh(URLinput.value, videoName.value);
})

function sendURL(URL, videoName) {
  console.log(videoName);
  if (videoName) {
    window.location.href = `https://${window.location.hostname}/download?URL=${URL}&videoName=${videoName}`;
  } else {
    window.location.href = `https://${window.location.hostname}/download?URL=${URL}&videoName=video`;
  }
}

function sendURLHigh(URL, videoName) {
  title.innerHTML = "Converting...";
  if (videoName) {
    window.location.href = `https://${window.location.hostname}/downloadAudio?URL=${URL}&videoName=${videoName}`;
  } else {
    window.location.href = `https://${window.location.hostname}/downloadAudio?URL=${URL}&videoName=video`;
  }
}
