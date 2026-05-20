document.addEventListener('DOMContentLoaded', () => {
    const pageTitle = document.querySelector('.page-header h1');
    const storyImage = document.querySelector('.about-img');
    const coreCards = document.querySelectorAll('.skill-group');

    if (pageTitle) {
        pageTitle.classList.add('is-visible');

        pageTitle.addEventListener('click', () => {
            pageTitle.classList.remove('title-pulse');
            void pageTitle.offsetWidth;
            pageTitle.classList.add('title-pulse');
        });
    }

    if (storyImage && coreCards.length) {
        storyImage.setAttribute('tabindex', '0');
        storyImage.setAttribute('role', 'button');
        storyImage.setAttribute('aria-label', 'Show core competencies');

        const showCoreCards = () => {
            coreCards.forEach((card, index) => {
                card.style.setProperty('--card-delay', `${index * 120}ms`);
                card.classList.add('slide-from-right');
            });
        };

        storyImage.addEventListener('click', showCoreCards);
        storyImage.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                showCoreCards();
            }
        });
    }

    if (!('IntersectionObserver' in window)) {
        coreCards.forEach((card) => card.classList.add('slide-from-right'));
        return;
    }

    const coreObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.querySelectorAll('.skill-group').forEach((card, index) => {
                card.style.setProperty('--card-delay', `${index * 120}ms`);
                card.classList.add('slide-from-right');
            });

            coreObserver.unobserve(entry.target);
        });
    }, { threshold: 0.25 });

    const coreSection = document.querySelector('.hard-skills');
    if (coreSection) {
        coreObserver.observe(coreSection);
    }

    document.querySelectorAll('.education-photo').forEach((photo) => {
        const images = Array.from(photo.querySelectorAll('img'));

        if (!images.length) {
            return;
        }

        let currentIndex = 0;
        let cycleTimer;
        images[0].classList.add('is-active');

        const showImage = (index) => {
            images.forEach((image) => image.classList.remove('is-active'));
            images[index].classList.add('is-active');
        };

        const startCycle = () => {
            if (cycleTimer || images.length === 1) {
                return;
            }

            cycleTimer = window.setInterval(() => {
                currentIndex = (currentIndex + 1) % images.length;
                showImage(currentIndex);
            }, 1200);
        };

        const stopCycle = () => {
            window.clearInterval(cycleTimer);
            cycleTimer = undefined;
            currentIndex = 0;
            showImage(currentIndex);
        };

        const card = photo.closest('.education-card');
        if (card) {
            card.addEventListener('mouseenter', startCycle);
            card.addEventListener('mouseleave', stopCycle);
            card.addEventListener('focusin', startCycle);
            card.addEventListener('focusout', stopCycle);
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            const targetId = anchor.getAttribute('href');

            if (!targetId || targetId === '#') {
                return;
            }

            const target = document.querySelector(targetId);
            if (!target) {
                return;
            }

            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
