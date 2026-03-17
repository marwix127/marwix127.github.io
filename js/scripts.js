/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Lazy-load videos inside portfolio modals: set <video data-src="..."> and they will load/play when modal is shown
    const portfolioModals = document.querySelectorAll('.portfolio-modal');
    portfolioModals.forEach(modalEl => {
        modalEl.addEventListener('shown.bs.modal', () => {
            const v = modalEl.querySelector('video');
            if (v) {
                if (v.dataset.src && !v.src) {
                    v.src = v.dataset.src;
                    v.load();
                }
                // Try to play with sound first (since it follows user click)
                v.muted = false;
                v.play().catch(() => {
                    // Fallback to muted autoplay if browser blocks unmuted play
                    v.muted = true;
                    v.play().catch(e => console.error("Video play failed:", e));
                });
            }
        });
        modalEl.addEventListener('hidden.bs.modal', () => {
            const v = modalEl.querySelector('video');
            if (v) {
                v.pause();
                v.currentTime = 0;
            }
        });
    });

});
