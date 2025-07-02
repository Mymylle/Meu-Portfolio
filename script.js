$(document).ready(function() {
    $('#mobile_btn').on('click', function (){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav_item');

    $(window).on('scroll', function (){
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i){
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom){
                activeSectionIndex = i;
                return false;
            }
        })
        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#banner', {
        origin: 'left',
        duration: 2000,
        distance:'20%'
    });

    ScrollReveal().reveal('#perfil', {
        origin: 'right',
        duration: 2000,
        distance:'20%'
    });

    ScrollReveal().reveal('.section-subtitle', {
        origin: 'left',
        duration: 950,
        distance:'20%'
    });

    ScrollReveal().reveal('.projeto-description', {
        origin: 'left',
        duration: 950,
        distance:'20%'
    });

    ScrollReveal().reveal('#myprojetos img', {
        origin: 'left',
        duration: 900,
        distance:'20%'
    });

    ScrollReveal().reveal('#link-project', {
        origin: 'left',
        duration: 900,
        distance:'20%'
    });
});


             /*KNOWLEDGES-BUTTONS*/

const slides = document.querySelectorAll('#knowledges .carousel-slide');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
let slideAtual = 0;

function mudarSlide(direcao) {
    slides[slideAtual].classList.remove('active');
    slideAtual = (slideAtual + direcao + slides.length) % slides.length;
    slides[slideAtual].classList.add('active');
}

btnPrev.addEventListener('click', () => mudarSlide(-1));
btnNext.addEventListener('click', () => mudarSlide(1));

