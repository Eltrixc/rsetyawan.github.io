/* ======================================
   SMOOTH SCROLL
====================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ======================================
   ACTIVE NAV LINK
====================================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 120;

        const sectionHeight =
        section.clientHeight;

        if(

            pageYOffset >= sectionTop

            &&

            pageYOffset <
            sectionTop + sectionHeight

        ){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(

            link.getAttribute("href")
            ===
            "#" + current

        ){

            link.classList.add("active");

        }

    });

});


/* ======================================
   NAVBAR SHADOW
====================================== */

const navbar =
document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 4px 20px rgba(0,0,0,0.08)";

    }

    else{

        navbar.style.boxShadow =
        "none";

    }

});


/* ======================================
   SCROLL REVEAL
====================================== */

const revealElements =
document.querySelectorAll(

    ".card, .experience-card"

);

const observer =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{

    threshold:0.15

}

);

revealElements.forEach(el => {

    observer.observe(el);

});


/* ======================================
   COUNTER ANIMATION
====================================== */

const counters =
document.querySelectorAll(".counter");

const speed = 150;

const counterObserver =
new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

const counter =
entry.target;

const target =
+counter.dataset.target;

const updateCount = () => {

const count =
+counter.innerText;

const increment =
target / speed;

if(count < target){

counter.innerText =
Math.ceil(
count + increment
);

setTimeout(
updateCount,
10
);

}

else{

counter.innerText =
target;

}

};

updateCount();

counterObserver.unobserve(counter);

}

});

},

{

threshold:0.5

}

);

counters.forEach(counter => {

counterObserver.observe(counter);

});
