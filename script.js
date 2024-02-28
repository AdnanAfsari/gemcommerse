var swiperThumbsVertical = new Swiper(".product_Swiper_thumbs", {
  spaceBetween: 16,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 7
    },
    551: {
      slidesPerView: 4,
      spaceBetween: 16
    }
  },
  navigation: {
    nextEl: ".product-thumbs-swiper-button-next",
    prevEl: ".product-thumbs-swiper-button-prev",
  },
  on: {
      resize: function () {
          var windowWidth = window.innerWidth;
          
          if(windowWidth <= 550){
              swiperThumbsVertical.changeDirection('horizontal');
          }else{
            swiperThumbsVertical.changeDirection('vertical');
          }
      }
    },
});

var swiper = new Swiper(".product_Swiper_main", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1,
  thumbs: {
    swiper: swiperThumbsVertical,
  }
});
 
 var swiper = new Swiper(".instagram_Swiper", {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 8,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

var swiper = new Swiper(".review_Swiper", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 8,
    navigation: {
        nextEl: ".review-swiper-button-next",
        prevEl: ".review-swiper-button-prev",
    }
});

var swiper = new Swiper(".matching_Swiper", {
    breakpoints: {
        320: {
        slidesPerView: 1
        },
        765: {
        slidesPerView: 2,
        spaceBetween: 15
        },
        1150: {
        slidesPerView: 3,
        spaceBetween: 30
        }
    },
    loop: true,
    navigation: {
        nextEl: ".matching-swiper-button-next",
        prevEl: ".matching-swiper-button-prev",
    }
});

const buttonElement = document.querySelectorAll('.tablinks');
const tabContent = document.querySelectorAll(".tabcontent");

tabContent[0].style.display = "flex";

buttonElement.forEach(function (i) {
  i.addEventListener('click', function (event) {

    for (let x = 0; x < buttonElement.length; x++) {
      if (event.target.id == buttonElement[x].id) {
        buttonElement[x].className = buttonElement[x].className.replace(" active", "");
        tabContent[x].style.display = "flex";
        event.currentTarget.className += " active";
      } else {
        tabContent[x].style.display = "none";
        buttonElement[x].className = buttonElement[x].className.replace(" active", "");
      }
    }

  });
});

// FAQ Accordian
document.addEventListener('DOMContentLoaded', function () {
  const accordions = document.querySelectorAll('.faq_info');

  accordions.forEach(function (accordion) {
    const open = accordion.querySelector('.open');
    const question = accordion.querySelector('.faq_question');
    const answer = accordion.querySelector('.faq_answer');
    const arrowIcon = accordion.querySelector('.faq_arrow-icon');

    open.addEventListener('click', function () {
      const isOpen = accordion.classList.contains('open');

      // Toggle open class
      accordion.classList.toggle('open');

      // Toggle answer visibility
      answer.style.display = isOpen ? 'none' : 'block';

      // Rotate arrow icon
      arrowIcon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
    });
  });
});

const quantityContainer = document.querySelector(".quantity");
const minusBtn = quantityContainer.querySelector(".minus");
const plusBtn = quantityContainer.querySelector(".plus");
const inputBox = quantityContainer.querySelector(".input-box");

updateButtonStates();

quantityContainer.addEventListener("click", handleButtonClick);
inputBox.addEventListener("input", handleQuantityChange);

function updateButtonStates() {
  const value = parseInt(inputBox.value);
  minusBtn.disabled = value <= 1;
  plusBtn.disabled = value >= parseInt(inputBox.max);
}

function handleButtonClick(event) {
  if (event.target.classList.contains("minus")) {
    decreaseValue();
  } else if (event.target.classList.contains("plus")) {
    increaseValue();
  }
}

function decreaseValue() {
  let value = parseInt(inputBox.value);
  value = isNaN(value) ? 1 : Math.max(value - 1, 1);
  inputBox.value = value;
  updateButtonStates();
  handleQuantityChange();
}

function increaseValue() {
  let value = parseInt(inputBox.value);
  value = isNaN(value) ? 1 : Math.min(value + 1, parseInt(inputBox.max));
  inputBox.value = value;
  updateButtonStates();
  handleQuantityChange();
}

function handleQuantityChange() {
  let value = parseInt(inputBox.value);
  value = isNaN(value) ? 1 : value;

  // Execute your code here based on the updated quantity value
  console.log("Quantity changed:", value);
}


