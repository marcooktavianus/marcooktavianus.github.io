// NAVBAR ACTIVE
// Ambil semua tautan di navbar
const links = document.querySelectorAll(".nav-link");

// Loop setiap tautan
links.forEach((link) => {
  // Tambahkan event click pada setiap tautan
  link.addEventListener("click", function (event) {
    // Hilangkan kelas active dari tautan yang sudah aktif
    const activeLink = document.querySelector(".nav-link.active");
    if (activeLink) {
      activeLink.classList.remove("active");
    }

    // Tambahkan kelas active pada tautan yang baru diklik
    this.classList.add("active");

    // Nonaktifkan tautan "Home" jika yang diklik adalah tautan "About"
    if (this.getAttribute("href") === "#about") {
      const homeLink = document.querySelector('a[href="#home"]');
      homeLink.classList.remove("active");
    }

    event.preventDefault(); // Hindari perilaku default saat mengklik tautan

    // Ambil elemen target berdasarkan atribut href tautan yang diklik
    const target = document.querySelector(this.getAttribute("href"));

    // Gulir halaman secara halus ke elemen target menggunakan Smooth Scroll API
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

function activateNavbar() {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 50;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      window.pageYOffset >= sectionTop &&
      window.pageYOffset < sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      const currentLink = document.querySelector(
        'a[href="#' + sectionId + '"]'
      );

      if (currentLink) {
        currentLink.classList.add("active");
      }
    }
  });

  // Tambahkan penanganan khusus untuk link "Home"
  const homeLink = document.querySelector('a[href="#home"]');
  const isScrolledToTop = window.pageYOffset < window.innerHeight;

  if (isScrolledToTop) {
    homeLink.classList.add("active");
  } else {
    homeLink.classList.remove("active");
  }
}

window.addEventListener("DOMContentLoaded", activateNavbar);
window.addEventListener("scroll", activateNavbar);

window.addEventListener("DOMContentLoaded", function () {
  const homeLink = document.querySelector('a[href="#home"]');

  if (window.location.hash === "#home") {
    homeLink.classList.add("active");
  }
});
// NAVBAR AKTIF + NAVBAR SCROLL DONE

// VIDEO PORTFOLIO
// Mendapatkan elemen video
const video = document.getElementById("portfolio-video");

// Mendefinisikan fungsi untuk memulai atau menghentikan video saat di-scroll
function playVideoOnScroll() {
  // Mendapatkan posisi video relatif terhadap jendela browser
  const videoPosition = video.getBoundingClientRect();

  // Memeriksa apakah video berada di dalam tampilan layar (viewport)
  if (
    videoPosition.top >= 0 &&
    videoPosition.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
  ) {
    // Memulai video jika belum diputar
    if (video.paused) {
      video.play();
    }
  } else {
    // Jika video berada di luar tampilan layar, pause video
    video.pause();
  }
}

// Memanggil fungsi playVideoOnScroll saat DOM selesai dimuat
document.addEventListener("DOMContentLoaded", playVideoOnScroll);

// Memanggil fungsi playVideoOnScroll saat halaman selesai di-refresh
window.addEventListener("load", playVideoOnScroll);

// Menambahkan event listener untuk mendeteksi scroll
window.addEventListener("scroll", playVideoOnScroll);
