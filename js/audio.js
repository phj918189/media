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

  function renderTrackInfo() {
    const currentTrack = tracks[state.currentTrackIndex] || tracks[0];

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
  }

  function updateActiveTrack() {
    if (!controlPlayIcon) {
      return;
    }

    controlPlayIcon.className = state.isPlaying ? "fa-solid fa-pause" : "fa-solid fa-play";

    trackAnchors.forEach(function (anchor, index) {
      anchor.classList.toggle("curr", index === state.currentTrackIndex);
    });
  }

  function syncUI() {
    renderTrackInfo();
    updateActiveTrack();
  }

  function playTrack(index) {
    const total = tracks.length;
    const normalizedIndex = ((index % total) + total) % total;
    const selectedTrack = tracks[normalizedIndex];

    state.currentTrackIndex = normalizedIndex;
    if (audio.getAttribute("src") !== selectedTrack.src) {
      audio.src = selectedTrack.src;
    }

    syncUI();

    const playPromise = audio.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(function () {
        state.isPlaying = false;
        syncUI();
      });
    }
  }

  function togglePlay() {
    if (state.isPlaying) {
      audio.pause();
      return;
    }

    const playPromise = audio.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(function () {
        state.isPlaying = false;
        syncUI();
      });
    }
  }

  function playPrev() {
    playTrack(state.currentTrackIndex - 1);
  }

  function playNext() {
    playTrack(state.currentTrackIndex + 1);
  }

  controlPlay.addEventListener("click", function (event) {
    event.preventDefault();
    togglePlay();
  });

  controlPrev.addEventListener("click", function (event) {
    event.preventDefault();
    playPrev();
  });

  controlNext.addEventListener("click", function (event) {
    event.preventDefault();
    playNext();
  });

  audio.addEventListener("play", function () {
    state.isPlaying = true;
    syncUI();
  });

  audio.addEventListener("pause", function () {
    state.isPlaying = false;
    syncUI();
  });

  audio.addEventListener("ended", function () {
    playNext();
  });

  window.changeSound = function (num) {
    playTrack(Number(num) - 1);
  };

  syncUI();
});
