const sliderImages = document.querySelectorAll('.slide-in');


function checkSlide(event) {
  sliderImages.forEach(image => {
    //half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;
    
    //bottom of the img
    const imageBotton = image.offsetTop + image.height;
    // console.log(imageBotton);
    

    const isHalfShown = slideInAt > image.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBotton;


    if(isHalfShown && isNotScrolledPast) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });

}




window.addEventListener('scroll', debounce(checkSlide));









function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

