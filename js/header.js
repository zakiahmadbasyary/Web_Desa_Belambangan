document.addEventListener('DOMContentLoaded', function () {
    const images = [
      '../img/header/bg1.jpeg',
      '../img/header/bg2.jpeg',
      '../img/header/bg3.jpeg',
      '../img/header/bg4.jpeg',
    ];
  
    const masthead = document.querySelector('header.masthead');
  
    // Buat elemen background slide
    images.forEach((image, index) => {
      const slide = document.createElement('div');
      slide.classList.add('background-slide');
      if (index === 0) {
        slide.classList.add('active'); // Slide pertama langsung aktif
      } else {
        slide.classList.add('hidden'); // Slide lainnya disembunyikan
      }
      slide.style.backgroundImage = `url(${image})`;
      masthead.appendChild(slide);
    });
  
    let currentIndex = 0;
  
    // Fungsi untuk mengganti slide
    function changeSlide() {
      const slides = document.querySelectorAll('.background-slide');
      const totalSlides = slides.length;
  
      // Sembunyikan slide saat ini
      slides[currentIndex].classList.remove('active');
      slides[currentIndex].classList.add('hidden');
  
      // Tampilkan slide berikutnya
      currentIndex = (currentIndex + 1) % totalSlides; // Loop slide
      slides[currentIndex].classList.remove('hidden');
      slides[currentIndex].classList.add('active');
    }
  
    // Ganti slide setiap 5 detik
    setInterval(changeSlide, 5000);
  });
  