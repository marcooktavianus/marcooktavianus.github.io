// Mendapatkan elemen video
const video = document.getElementById("portfolio-video");

// Mendapatkan posisi video relatif terhadap jendela browser
const videoPosition = video.getBoundingClientRect().top;

// Mendefinisikan fungsi untuk memulai video saat di-scroll
function playVideoOnScroll() {
  // Mendapatkan posisi scroll saat ini
  const scrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  // Memeriksa apakah posisi scroll telah mencapai posisi video
  if (scrollPosition >= videoPosition) {
    // Memulai video
    video.play();
  } else {
    // Jika posisi scroll tidak mencapai video, pause video
    video.pause();
  }
}

// Menambahkan event listener untuk mendeteksi scroll
window.addEventListener("scroll", playVideoOnScroll);
