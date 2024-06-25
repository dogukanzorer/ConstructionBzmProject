let navbar = document.querySelector(".header .navbar");
let searchForm = document.querySelector(".header .search-form");
let contactInfo = document.querySelector(".contact-info");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
};

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
};

document.querySelector("#info-btn").onclick = () => {
  contactInfo.classList.add("active");
};

document.querySelector("#close-contact-info").onclick = () => {
  contactInfo.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  contactInfo.classList.remove("active");
};

//info google Map
function redirectToGoogleMaps() {
  // Google Maps üzerinde belirtilen koordinatlara yönlendirme
  var lat = 41.64725;
  var lng = 41.635097;
  var googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
  window.location.href = googleMapsUrl;
}

//E-mail Yönlendirme!
function redirectToEmail() {
  // Kullanıcının e-posta istemcisini açarak belirli bir e-posta adresine yönlendirme
  var email = "bzmltd@hotmail.com";
  window.location.href = `mailto:${email}`;
}

// Başlangıç Logo scripti
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    const content = document.querySelector(".content");
    setTimeout(function () {
      preloader.classList.add("hide");
      setTimeout(function () {
        preloader.style.display = "none";
        content.style.display = "block";
      }, 2000); // 1 saniye animasyon süresinden sonra preloader tamamen gizlenir
    }, 2300); // 2000 milisaniye (2 saniye) gecikme
  });
});

//Slider Swiper script
var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 1900, // 1 saniye (1000 milisaniye)
    disableOnInteraction: false, // Kullanıcı bir slaytı elle geçtiğinde otomatik kaydırmayı durdurma
  },
  speed: 1500,
});

// About'taki boxların içndeki değerler
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");
  const speed = 200; // Hız ayarı

  const updateCount = (counter) => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      requestAnimationFrame(() => updateCount(counter));
    } else {
      counter.innerText = target;
    }
  };

  const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        updateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersect, {
    threshold: 1.0,
  });

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});

//Projeler kısmında Slide

document.addEventListener("DOMContentLoaded", () => {
  // Next Group Modal
  const modalNextGroup = document.getElementById("modalNextGroup");
  const btnOpenNextGroup = document.getElementById("openModalNextGroup");
  const spanCloseNextGroup = document.getElementById("closeModalNextGroup");
  const slidesNextGroup = modalNextGroup.querySelectorAll(".photo-gallery img");
  let currentIndexNextGroup = 0;

  btnOpenNextGroup.onclick = () => {
    modalNextGroup.style.display = "block";
    showSlide(slidesNextGroup, currentIndexNextGroup);
    
  };

  spanCloseNextGroup.onclick = () => {
    modalNextGroup.style.display = "none";
  };

  window.onclick = (event) => {
    if (event.target == modalNextGroup) {
      modalNextGroup.style.display = "none";
    }
  };

  // Alliance Modal
  const modalAlliance = document.getElementById("modalAlliance");
  const btnOpenAlliance = document.getElementById("openModalAlliance");
  const spanCloseAlliance = document.getElementById("closeModalAlliance");
  const slidesAlliance = modalAlliance.querySelectorAll(".photo-gallery img");
  let currentIndexAlliance = 0;

  btnOpenAlliance.onclick = () => {
    modalAlliance.style.display = "block";
    showSlide(slidesAlliance, currentIndexAlliance);
  };

  spanCloseAlliance.onclick = () => {
    modalAlliance.style.display = "none";
  };

  window.onclick = (event) => {
    if (event.target == modalAlliance) {
      modalAlliance.style.display = "none";
    }
  };

  function showSlide(slides, index) {
    slides.forEach((slide) => {
      slide.style.display = "none";
    });
    slides[index].style.display = "block";
  }

  function plusSlideNextGroup(n) {
    currentIndexNextGroup += n;
    if (currentIndexNextGroup >= slidesNextGroup.length) {
      currentIndexNextGroup = 0;
    }
    if (currentIndexNextGroup < 0) {
      currentIndexNextGroup = slidesNextGroup.length - 1;
    }
    showSlide(slidesNextGroup, currentIndexNextGroup);
  }

  function plusSlideAlliance(n) {
    currentIndexAlliance += n;
    if (currentIndexAlliance >= slidesAlliance.length) {
      currentIndexAlliance = 0;
    }
    if (currentIndexAlliance < 0) {
      currentIndexAlliance = slidesAlliance.length - 1;
    }
    showSlide(slidesAlliance, currentIndexAlliance);
  }

  const btnNextNextGroup = document.getElementById("nextNextGroup");
  const btnPrevNextGroup = document.getElementById("prevNextGroup");
  const btnNextAlliance = document.getElementById("nextAlliance");
  const btnPrevAlliance = document.getElementById("prevAlliance");

  btnNextNextGroup.onclick = () => {
    plusSlideNextGroup(1);
  };

  btnPrevNextGroup.onclick = () => {
    plusSlideNextGroup(-1);
  };

  btnNextAlliance.onclick = () => {
    plusSlideAlliance(1);
  };

  btnPrevAlliance.onclick = () => {
    plusSlideAlliance(-1);
  };
});

// Projeler slide kısım bitişi

//Emailjs service

function sendMail(event) {
  event.preventDefault(); // Formun otomatik olarak submit edilmesini engeller

  let params = {
    from_name: document.getElementById("name").value,
    country: document.getElementById("country").value,
    email: document.getElementById("email").value,
    phone: iti.getNumber(), // intlTelInput ile alınan tam numara
    subject: "New message from " + document.getElementById("name").value,
    message: document.getElementById("message").value,
    to_name: "Recipient" // Sabit bir değer, gerekirse dinamik hale getirilebilir
  };

  emailjs.send("service_qr4s8ut", "template_5slsk3q", params)
    .then(function(response) {
      alert("Email Gönderildi!");
    }, function(error) {
      alert("Email Gönderilemedi! Hata: " + error.text);
    });
}

//swipeer slide blog

var swiper = new Swiper(".blogs-slider",{
  loop:true,
  grabCursor:true,
  spaceBetween:20,
  breakpoints:{
    640:{
      slidesPerView: 1,
    },
    768:{
      slidesPerView: 2,
    },
    991:{
      slidesPerView: 3,
    },

  },
});