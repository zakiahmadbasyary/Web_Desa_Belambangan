document.addEventListener("DOMContentLoaded", function () {
    const contents = document.querySelectorAll(".content");
  
    const observerOptions = {
      threshold: 0.2, // Elemen dianggap terlihat jika 20% terlihat di viewport
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Ketika elemen masuk viewport, tambahkan animasi
          entry.target.classList.add("show");
          entry.target.classList.remove("hidden");
        } else {
          // Ketika elemen keluar viewport, reset animasi
          entry.target.classList.remove("show");
          entry.target.classList.add("hidden");
        }
      });
    }, observerOptions);
  
    contents.forEach((content) => {
      observer.observe(content); // Pantau setiap elemen
    });
  });
  