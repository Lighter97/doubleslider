getVals = () => {
  // Берём значения у слайдеров
  const slides = document.querySelectorAll("input");
  let slide1 = parseFloat(slides[0].value);
  let slide2 = parseFloat(slides[1].value);

  // Если они меняются местами - свапаем их
  if (slide1 > slide2) {
    let tmp = slide2;
    slide2 = slide1;
    slide1 = tmp;
  }

  // И отображаем текст
  const text = document.querySelector(".rangeValues");
  text.innerHTML = `${slide1.toFixed(1)} - ${slide2.toFixed(1)}`;
}

// Функцию - в каждый слайдер
const sliderContainer = document.querySelector(".rangeSlider");
sliderContainer.childNodes.forEach(element => {
  if (element.nodeType !== 3) {
    element.addEventListener('input', getVals);
  }
});
