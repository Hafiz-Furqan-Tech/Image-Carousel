let images = [
  "images/pexels-photo.jpg",
  "images/pexels-photo-1366909.jpeg",
  "images/pexels-photo-1761279.jpeg",
  "images/pexels-photo-2086622.jpeg",
  "images/pexels-photo-707344.jpeg"
];

const img = document.querySelector(".slide");
let currentIndex = 0;

const showImage = (index, animationIn, animationOut) => {
  img.classList.remove("animate-in-right", "animate-out-left", "animate-in-left", "animate-out-right");
  img.classList.add(animationOut);

  setTimeout(() => {
    img.src = images[index];
    img.classList.remove("animate-out-left", "animate-out-right");
    img.classList.add(animationIn);
  }, 1000); 
};

let nextBtn = () => {
  let newIndex = currentIndex + 1;
  
  if (newIndex >= images.length) {
    newIndex = 0; 
  }

  showImage(newIndex, "animate-in-right", "animate-out-left");
  currentIndex = newIndex;
};

let prevBtn = () => {
  let newIndex = currentIndex - 1;
  
  if (newIndex < 0) {
    newIndex = images.length - 1; 
  }

  showImage(newIndex, "animate-in-left", "animate-out-right");
  currentIndex = newIndex;
};

img.src = images[currentIndex];
