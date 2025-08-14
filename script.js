document.addEventListener("DOMContentLoaded", () => {
  // --- Efek Header saat Scroll ---
  const header = document.getElementById("main-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // --- Logika Menu Hamburger ---
  const hamburger = document.getElementById("hamburger");
  const nav = document.querySelector("header nav");
  const navLinks = document.querySelectorAll("header nav ul li a");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("active")) {
        nav.classList.remove("active");
        hamburger.classList.remove("active");
      }
    });
  });

  const fadeInElements = document.querySelectorAll(".fade-in");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeInElements.forEach((el) => {
    observer.observe(el);
  });

  window.addEventListener("scroll", function () {
    const scrollValue = window.scrollY;
    const shape1 = document.querySelector(".shape-1");
    const shape2 = document.querySelector(".shape-2");

    if (shape1 && shape2) {
      shape1.style.transform = `translateY(${scrollValue * 0.1}px)`;
      shape2.style.transform = `translateY(${scrollValue * 0.05}px)`;
    }
  });

  // Pembuatan Fitur Pengiriman Form Melalui Email
  (function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "toeIGIVYPQGN9BY20",
    });
  })();

  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    // these IDs from the previous steps
    emailjs.sendForm("service_hsskn2r", "template_2uvvuur", this).then(
      () => {
        // console.log("SUCCESS!");
        alertSuccess();
        document.getElementById("contact-form").reset();
      },
      (error) => {
        // console.log("FAILED...", error);
        alertError();
        document.getElementById("contact-form").reset();
      }
    );
  });
});

const alertSuccess = () => {
  Swal.fire({
    title: "✅ Email Berhasil Dikirim!",
    html: `
    <p style="font-size:16px; color:#4FC3F7; margin-top:10px;">
      Terima kasih sudah mengirimkan keluhan Anda.<br>
      Kami akan segera menanggapinya.
    </p>
  `,
    icon: "success",
    iconColor: "#4FC3F7",
    background: "#0B1E33",
    color: "#ffffff",
    confirmButtonText: "OK",
    confirmButtonColor: "#4FC3F7",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
};

const alertError = () => {
  Swal.fire({
    title: "❌ Gagal Mengirim Email!",
    html: `
    <p style="font-size:16px; color:#FF6B6B; margin-top:10px;">
      Maaf, terjadi kesalahan saat mengirim keluhan Anda.<br>
      Silakan periksa koneksi internet Anda dan coba lagi.
    </p>
  `,
    icon: "error",
    iconColor: "#FF6B6B",
    background: "#0B1E33",
    color: "#ffffff",
    confirmButtonText: "Coba Lagi",
    confirmButtonColor: "#FF6B6B",
    showClass: {
      popup: "animate__animated animate__shakeX",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
};
