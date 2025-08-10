document.addEventListener('DOMContentLoaded', () => {

    // --- Efek Header saat Scroll ---
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Logika Menu Hamburger ---
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('header nav');
    const navLinks = document.querySelectorAll('header nav ul li a');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active'); 
    });


    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

   
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    fadeInElements.forEach(el => {
        observer.observe(el);
    });

  
    window.addEventListener('scroll', function() {
        const scrollValue = window.scrollY;
        const shape1 = document.querySelector('.shape-1');
        const shape2 = document.querySelector('.shape-2');


        if (shape1 && shape2) {
            shape1.style.transform = `translateY(${scrollValue * 0.1}px)`;
            shape2.style.transform = `translateY(${scrollValue * 0.05}px)`;
        }
    });
});