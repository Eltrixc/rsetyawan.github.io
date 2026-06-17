/* ==========================================
   RIZKY SETYAWAN PORTFOLIO
   Corporate Premium Script
========================================== */

/* ==========================================
   AOS INIT
========================================== */

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

/* ==========================================
   TYPING ANIMATION
========================================== */

const roles = [
    "Research Intern at BRIN",
    "Laboratory Assistant",
    "Scientific Data Analyst",
    "Computational Physics Researcher",
    "High Performance Computing Enthusiast"
];

const typingElement = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeAnimation() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeAnimation, 1800);

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex =
                (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(
        typeAnimation,
        deleting ? 50 : 90
    );
}

typeAnimation();

/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters =
    document.querySelectorAll(".counter");

const counterObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const counter =
                    entry.target;

                const target =
                    parseInt(
                        counter.getAttribute(
                            "data-target"
                        )
                    );

                let current = 0;

                const increment =
                    Math.ceil(target / 80);

                const updateCounter = () => {

                    current += increment;

                    if (current >= target) {

                        counter.textContent =
                            target;

                    } else {

                        counter.textContent =
                            current;

                        requestAnimationFrame(
                            updateCounter
                        );
                    }
                };

                updateCounter();

                counterObserver.unobserve(
                    counter
                );
            });
        },

        {
            threshold: 0.5
        }
    );

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/* ==========================================
   MOUSE SPOTLIGHT
========================================== */

const spotlight =
    document.getElementById(
        "spotlight"
    );

document.addEventListener(
    "mousemove",
    (e) => {

        spotlight.style.left =
            e.clientX + "px";

        spotlight.style.top =
            e.clientY + "px";
    }
);

/* ==========================================
   ACTIVE NAV LINK
========================================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(
        "nav ul li a"
    );

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.clientHeight;

            if (
                pageYOffset >=
                sectionTop - 200
            ) {
                current =
                    section.getAttribute(
                        "id"
                    );
            }
        });

        navLinks.forEach(link => {

            link.classList.remove(
                "active-link"
            );

            if (
                link.getAttribute(
                    "href"
                ) === "#" + current
            ) {

                link.classList.add(
                    "active-link"
                );
            }
        });
    }
);

/* ==========================================
   NAVBAR BACKGROUND
========================================== */

const navbar =
    document.querySelector("nav");

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 50
        ) {

            navbar.style.background =
                "rgba(0,0,0,0.35)";

            navbar.style.backdropFilter =
                "blur(20px)";

        } else {

            navbar.style.background =
                "rgba(0,0,0,0.15)";
        }
    }
);

/* ==========================================
   HERO PARALLAX
========================================== */

const hero =
    document.querySelector(
        ".hero-content"
    );

window.addEventListener(
    "scroll",
    () => {

        const scrolled =
            window.scrollY;

        hero.style.transform =
            `translateY(${scrolled * 0.15}px)`;
    }
);

/* ==========================================
   FLOATING CARDS EFFECT
========================================== */

const cards =
    document.querySelectorAll(
        ".glass-card, .skill-card, .stat-card"
    );

cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        (e) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateY =
                (x - centerX) / 25;

            const rotateX =
                (centerY - y) / 25;

            card.style.transform =
                `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-8px)
                `;
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                `
                perspective(1000px)
                rotateX(0deg)
                rotateY(0deg)
                translateY(0px)
                `;
        }
    );
});

/* ==========================================
   FADE HERO ON SCROLL
========================================== */

window.addEventListener(
    "scroll",
    () => {

        const heroSection =
            document.querySelector(
                ".hero"
            );

        const opacity =
            1 -
            window.scrollY / 700;

        heroSection.style.opacity =
            Math.max(
                opacity,
                0.25
            );
    }
);

/* ==========================================
   PRELOADER EFFECT
========================================== */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );
    }
);

/* ==========================================
   CONSOLE EASTER EGG
========================================== */

console.log(
`
====================================
RIZKY SETYAWAN PORTFOLIO
====================================

Physics Undergraduate
Research Intern at BRIN
Laboratory Assistant

Built with:
HTML + CSS + JavaScript

====================================
`
);
