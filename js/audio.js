const tracks = [
  { src: "./images/music/music1.mp3", title: "All By Myself", artist: "Defconn" },
  { src: "./images/music/music2.mp3", title: "MANIAC", artist: "Stray Kids" },
  { src: "./images/music/music3.mp3", title: "운동하자", artist: "건이" },
  { src: "./images/music/music4.mp3", title: "울끈불끈 사랑", artist: "Gwanna" }
];

document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("main_audio");
  const controlPrev = document.getElementById("controlPrev");
  const controlPlay = document.getElementById("controlPlay");
  const controlNext = document.getElementById("controlNext");
  const controlPlayIcon = controlPlay ? controlPlay.querySelector("i") : null;
  const playerImage = document.querySelector(".playerImg img");
  const titleElement = document.querySelector(".playerWrap dt");
  const artistElement = document.querySelector(".playerWrap dd");
  const trackAnchors = Array.from(document.querySelectorAll(".playInfo li a"));

  if (!audio || !controlPrev || !controlPlay || !controlNext || !controlPlayIcon) {
    return;
  }

  const state = {
    isPlaying: false,
    currentTrackIndex: 0
  };

  function updateUI() {
    const currentTrack = tracks[state.currentTrackIndex];

    if (titleElement) {
      titleElement.textContent = currentTrack.title;
    }

    if (artistElement) {
      artistElement.textContent = currentTrack.artist;
    }

    if (playerImage) {
      playerImage.src = "./images/music/plates_" + (state.currentTrackIndex + 1) + ".png";
      playerImage.classList.toggle("current", state.isPlaying);
    }

    controlPlayIcon.className = state.isPlaying ? "fa-solid fa-pause" : "fa-solid fa-play";

    trackAnchors.forEach(function (anchor, index) {
      anchor.classList.toggle("curr", index === state.currentTrackIndex);
    });
  }

  function playTrack(index) {
    const total = tracks.length;
    const normalizedIndex = ((index % total) + total) % total;
    const selectedTrack = tracks[normalizedIndex];

    state.currentTrackIndex = normalizedIndex;
    audio.src = selectedTrack.src;

    updateUI();

    const playPromise = audio.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(function () {
        state.isPlaying = false;
        updateUI();
      });
    }
  }

  function togglePlayPause() {
    if (state.isPlaying) {
      audio.pause();
      return;
    }

    const playPromise = audio.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(function () {
        state.isPlaying = false;
        updateUI();
      });
    }
  }

  function playPrevTrack() {
    playTrack(state.currentTrackIndex - 1);
  }

  function playNextTrack() {
    playTrack(state.currentTrackIndex + 1);
  }

  controlPlay.addEventListener("click", function (event) {
    event.preventDefault();
    togglePlayPause();
  });

  controlPrev.addEventListener("click", function (event) {
    event.preventDefault();
    playPrevTrack();
  });

  controlNext.addEventListener("click", function (event) {
    event.preventDefault();
    playNextTrack();
  });

  audio.addEventListener("play", function () {
    state.isPlaying = true;
    updateUI();
  });

  audio.addEventListener("pause", function () {
    state.isPlaying = false;
    updateUI();
  });

  audio.addEventListener("ended", function () {
    playNextTrack();
  });

  window.changeSound = function (num) {
    playTrack(Number(num) - 1);
  };

  updateUI();
});
