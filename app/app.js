const humberger = document.querySelector('.humberger');
const navbar = document.querySelector('.navbar-menu');
const navLinks = document.querySelectorAll(".navbar-link");

humberger.addEventListener('click', () => {
  navbar.classList.toggle('active');
  humberger.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    humberger.classList.remove("active"); // ✅ sudah bener, bukan "hamburger"
    navbar.classList.remove("active");
  });
});

  const images = ["images/foto1.jpg", "images/foto2.jpg", "images/foto3.jpg","images/foto4.jpg","images/foto5.jpg"];
  let index = 0;
  const slideImg = document.getElementById("slide-images");

  setInterval(() => {
    index = (index + 1) % images.length;
    slideImg.style.opacity = 0; // animasi fade
    setTimeout(() => {
      slideImg.src = images[index];
      slideImg.style.opacity = 1;
    }, 500);
  }, 4000);

  const imagesKamar = ["images/kamar.jpg","images/kamar1.jpg","images/kamar2.jpg"]; 
  let index1 = 0;
  const slideImage = document.querySelector(".images-slide-room");

  setInterval(() => {
    index1 = (index1 + 1) % imagesKamar.length;
    slideImage.style.opacity = 0;
    setTimeout(() => {
    slideImage.src = imagesKamar[index1];
    slideImage.style.opacity = 1;
  },500);
},4000);

  const imagesToilet = ["images/toilet.jpg","images/toilet2.jpg"];
  let index2 = 0;
  const slideImageToilet = document.querySelector(".images-slide-toilet");

  setInterval(() => {
    index2 = (index2 + 1) % imagesToilet.length;
    slideImageToilet.style.opacity = 0;
    setTimeout(() => {
    slideImageToilet.src = imagesToilet[index2];
    slideImageToilet.style.opacity = 1;
  },500);
},4000);
