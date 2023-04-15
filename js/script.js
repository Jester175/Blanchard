document.addEventListener("DOMContentLoaded", () => {
  //Hero Swiper
  const heroSwiper = new Swiper(".hero__swiper", {
    // Optional parameters
    slidesPerView: 1,
    loop: false,
    speed: 1000,
  });

  // Gallery
  var swiper = new Swiper(".picture__swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 1,
    speed: 1000,
    loop: false,

    pagination: {
      el: ".picture-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".picture-button-next",
      prevEl: ".picture-button-prev",
    },

    breakpoints: {
      576: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 38,
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      1600: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
    },
  });

  //Accordion
  $(".accordion").accordion({
    heightStyle: "content",
    active: 0,
    collapsible: true,
  });

  //Events Swiper
  const eventSwiper = new Swiper(".events__swiper", {
    // Optional parameters
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 50,
    loop: true,
    speed: 1000,

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      prevEl: ".events__button-prev",
      nextEl: ".events__button-next",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        loop: false,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
        loop: false,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 27,
        loop: false,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
        loop: false,
      },
    },
  });

  // Projects Swiper
  const projectSwiper = new Swiper(".projects-swiper", {
    // Optional parameters
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    loop: false,
    speed: 1100,

    // Navigation arrows
    navigation: {
      nextEl: ".projects-button-next",
      prevEl: ".projects-button-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50,
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
    },
  });

  //Map
  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.758468, 37.601088],
      zoom: 15,
      controls: ["zoomControl", "geolocationControl"],
    });

    var myPlacemark = new ymaps.Placemark(
      [55.758468, 37.601088],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../img/contacts/markplace.svg",
        iconImageSize: [20, 20],
      }
    );

    myMap.geoObjects.add(myPlacemark);
  }

  // Select
  const element = document.querySelector("#gallery__select");
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: "",
  });

  //Form validation
  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+375 (99)-999-99-99");
  im.mask(selector);
  const validation = new JustValidate("#form");

  validation.addField("#tel", [
    {
      rule: "required",
      errorMessage: "Недопустимый формат",
    },
    {
      rule: "function",
      validator() {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 9;
      },
      errorMessage: "Недопустимый формат",
    },
  ]);

  //PopUp
  const pictureImg = document.querySelectorAll(".picture__img");
  const popup = document.querySelector(".popup");
  const popupExit = document.querySelector(".popup__exit");

  pictureImg.forEach((img) => {
    img.addEventListener("click", () => {
      popup.classList.add("popup--active");
      document.body.classList.add("scroll--hidden");
    });
  });

  popupExit.addEventListener("click", () => {
    popup.classList.remove("popup--active");
    document.body.classList.remove("scroll--hidden");
  });

  //Burger-menu

  const burgerMenu = document.querySelector(".burger-menu");
  const navMenu = document.querySelector(".header-top__nav");
  const headerLink = document.querySelectorAll(".header-top__link");

  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("burger-menu--active");
    navMenu.classList.toggle("header__nav--active");
    document.body.classList.toggle("scroll--hidden");
  });

  headerLink.forEach((link) => {
    link.addEventListener("click", () => {
      burgerMenu.classList.remove("burger-menu--active");
      navMenu.classList.remove("header__nav--active");
      document.body.classList.remove("scroll--hidden");
    });
  });

  //Tippy

  tippy(".tooltip1", {
    content:
      "Пример современных тенденций — современная методология разработки",
    theme: "tomato",
    color: "white",
  });

  tippy(".tooltip2", {
    content:
      "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции",
    theme: "tomato",
    color: "white",
  });

  tippy(".tooltip3", {
    content: "В стремлении повысить качество",
    theme: "tomato tomato3",
    color: "white",
  });

  //Tabs

  const catalogBtn = document.querySelectorAll(".link__person");
  const catalogPerson = document.querySelectorAll(".catalog__preview-person");

  catalogBtn.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      const path = e.currentTarget.dataset.path;
      catalogPerson.forEach((person) =>
        person.classList.remove("catalog__preview--active")
      );
      document
        .querySelector(`[data-path="${path}"]`)
        .classList.add("catalog__preview--active");
    });
  });

  //Dropdown

  const dropdownBtn = document.querySelectorAll(".dropdown__title-btn");
  const dropdownList = document.querySelectorAll(".dropdown__wrapper");
  const dropdownArrow = document.querySelectorAll(".dropdown__title-icon");

  dropdownBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let currentbtn = e.currentTarget;
      let drop = currentbtn
        .closest(".dropdown__item")
        .querySelector(".dropdown__wrapper");
      let arrow = currentbtn
        .closest(".dropdown__title-btn")
        .querySelector(".dropdown__title-icon");
      dropdownList.forEach((btn) => {
        if (btn !== drop) {
          btn.classList.remove("dropdown__wrapper--active");
        }
      });
      dropdownArrow.forEach((btn) => {
        if (btn !== arrow) {
          btn.classList.remove("dropdown__title-icon--active");
        }
      });
      drop.classList.toggle("dropdown__wrapper--active");
      arrow.classList.toggle("dropdown__title-icon--active");
    });
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown__list")) {
      dropdownList.forEach((btn) => {
        btn.classList.remove("dropdown__wrapper--active");
      });
    }
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown__title-btn")) {
      dropdownArrow.forEach((btn) => {
        btn.classList.remove("dropdown__title-icon--active");
      });
    }
  });

  const searchForm = document.querySelector(".form__search");
  const search = document.querySelector(".search");
  const searchInput = document.querySelector(".input__search");
  const searchExit = document.querySelector(".search__exit");

  search.addEventListener("click", () => {
    searchForm.classList.add("form__search--active");
    search.classList.add("search--active");
    searchInput.classList.add("input__search--active");
    searchExit.classList.add("search__exit--active");

    searchExit.addEventListener("click", () => {
      searchForm.classList.remove("form__search--active");
      search.classList.remove("search--active");
      searchInput.classList.remove("input__search--active");
      searchExit.classList.remove("search__exit--active");
    });
  });
});
