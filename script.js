var loader;

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.1);
        }, 30);
    }
}

function displayContent() {
    loader.style.display = 'none';
    document.getElementById('everything').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('loader');
    loadNow(1);
});


const toggle = document.getElementsByClassName('toggle')[0]
const navbarlinks = document.getElementsByClassName('navbar-links')[0]

toggle.addEventListener('click', () => {
  navbarlinks.classList.toggle('active')
})


// function scroll() {
//   console.log("called")
//   var elem = document.getElementById('about');
//   var y = elem.getBoundingClientRect().top + window.pageYOffset;
//   window.scrollTo({top: y, behavior: 'smooth'});
// }









/*const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});*/