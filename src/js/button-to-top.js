// Функция для определения прокрутки
function handleScroll() {
  const scrollToTopButton = document.getElementById("scrollToTopButton");
  if (window.pageYOffset > (0.5 * window.innerHeight)) {
    scrollToTopButton.style.visibility = "visible";
    scrollToTopButton.style.opacity = 0.5;
  } else {
    scrollToTopButton.style.visibility = "hidden";
    scrollToTopButton.style.opacity = 0;
  }
}

// Функция для плавной прокрутки к верху страницы
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Обработчик прокрутки
window.addEventListener("scroll", handleScroll);

// Обработчик нажатия на кнопку
document.getElementById("scrollToTopButton").addEventListener("click", scrollToTop);