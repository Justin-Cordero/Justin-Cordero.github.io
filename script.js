const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link');
const progress = document.querySelector('.progress-bars-wrapper');
const progressBarPercents = [97, 89, 85, 87, 80, 70, 50];

window.addEventListener("scroll", () => {
    mainFn();
});

const mainFn = () => {
    if(window.pageYOffset >= navbarOffsetTop) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }

    sections.forEach((section, i) => {
        if(window.pageYOffset >= section.offsetTop - 10) {
            navbarLinks.forEach(navbarLink => {
                navbarLink.classList.remove('change');
            });
            navbarLinks[i].classList.add('change');
        }
    });

    if(window.pageYOffset + window.innerHeight >= progress.offsetTop) {
        document.querySelectorAll('.progress-percent').forEach((el, i) => {
            el.style.width = `${progressBarPercents[i]}%`;
            el.previousElementSibling.firstElementChild.textContent = progressBarPercents[i];
        });
    }
}

mainFn();

window.addEventListener('resize', () => {
    window.location.reload();
});

// Small Screen Navbar Menu
var checkbox = document.querySelector( '#myInput' );
var icon = document.querySelector( '#menuToggle span' );
var listener = function( e ) {
  if( e.target != checkbox && e.target != icon ) {
    checkbox.checked = false;
    document.removeEventListener( 'click', listener );
  }
};

checkbox.addEventListener( 'click', function(){
  if( this.checked ) {
    document.addEventListener( 'click', listener );
  } 
});
