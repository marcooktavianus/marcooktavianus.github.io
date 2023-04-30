// ambil semua link di navbar
const links = document.querySelectorAll(".nav-link");

// loop setiap link
links.forEach((link) => {
  // tambahkan event click pada setiap link
  link.addEventListener("click", function () {
    // hilangkan class active dari link yang sudah aktif
    const activeLink = document.querySelector(".nav-link.active");
    if (activeLink) {
      activeLink.classList.remove("active");
    }

    // tambahkan class active pada link yang baru di-klik
    this.classList.add("active");
  });
});
