/* =========================================
   AOS
========================================= */

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

/* =========================================
   TYPING EFFECT
========================================= */

const typingElement =
document.getElementById("typing");

const typingTexts = [

"Research Intern at BRIN",

"Computational Physics",

"Scientific Computing",

"Quantum Materials",

"High Performance Computing",

"Scientific Data Analysis"

];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeWriter(){

const currentText =
typingTexts[textIndex];

if(!deleting){

typingElement.textContent =
currentText.substring(
0,
charIndex + 1
);

charIndex++;

if(charIndex === currentText.length){

deleting = true;

setTimeout(
typeWriter,
1800
);

return;

}

}else{

typingElement.textContent =
currentText.substring(
0,
charIndex - 1
);

charIndex--;

if(charIndex === 0){

deleting = false;

textIndex =
(textIndex + 1)
%
typingTexts.length;

}

}

setTimeout(

typeWriter,

deleting
? 50
: 90

);

}

typeWriter();

/* =========================================
   PARTICLE FIELD
========================================= */

const particleContainer =
document.getElementById(
"particles"
);

for(let i=0;i<60;i++){

const particle =
document.createElement("div");

particle.classList.add(
"particle"
);

particle.style.left =
Math.random()*100 + "%";

particle.style.top =
Math.random()*100 + "%";

particle.style.animationDuration =
(15 + Math.random()*20)
+ "s";

particle.style.animationDelay =
Math.random()*20 + "s";

particleContainer.appendChild(
particle
);

}

/* =========================================
   SPOTLIGHT
========================================= */

const spotlight =
document.getElementById(
"spotlight"
);

document.addEventListener(
"mousemove",
(e)=>{

spotlight.style.left =
e.clientX + "px";

spotlight.style.top =
e.clientY + "px";

}
);

/* =========================================
   COUNTER
========================================= */

const counters =
document.querySelectorAll(
".counter"
);

const counterObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting)
return;

const counter =
entry.target;

const target =
parseInt(
counter.dataset.target
);

let current = 0;

const increment =
Math.ceil(
target/80
);

const update = ()=>{

current += increment;

if(current >= target){

counter.textContent =
target;

}else{

counter.textContent =
current;

requestAnimationFrame(
update
);

}

};

update();

counterObserver.unobserve(
counter
);

});

},

{
threshold:.4
}

);

counters.forEach(counter=>{

counterObserver.observe(
counter
);

});

/* =========================================
   ACTIVE NAVBAR
========================================= */

const sections =
document.querySelectorAll(
"section[id]"
);

const navLinks =
document.querySelectorAll(
"nav a"
);

window.addEventListener(
"scroll",
()=>{

let current = "";

sections.forEach(section=>{

const top =
section.offsetTop;

const height =
section.offsetHeight;

if(
window.scrollY
>=
top - 200
){

current =
section.id;

}

});

navLinks.forEach(link=>{

link.classList.remove(
"active-link"
);

if(

link.getAttribute(
"href"
)
=== "#" + current

){

link.classList.add(
"active-link"
);

}

});

}
);

/* =========================================
   NAVBAR BACKGROUND
========================================= */

const nav =
document.querySelector(
"nav"
);

window.addEventListener(
"scroll",
()=>{

if(window.scrollY > 50){

nav.style.background =
"rgba(0,0,0,.35)";

}else{

nav.style.background =
"rgba(0,0,0,.15)";

}

}
);

/* =========================================
   HERO PARALLAX
========================================= */

const hero =
document.querySelector(
".hero-content"
);

window.addEventListener(
"scroll",
()=>{

hero.style.transform =

`translateY(${
window.scrollY*0.12
}px)`;

}
);

/* =========================================
   FLOATING CARD EFFECT
========================================= */

const cards =
document.querySelectorAll(

".glass-card,\
.skill-card,\
.interest-card,\
.project-card,\
.stat-card"

);

cards.forEach(card=>{

card.addEventListener(
"mousemove",
(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const centerX =
rect.width/2;

const centerY =
rect.height/2;

const rotateY =
(x-centerX)/18;

const rotateX =
(centerY-y)/18;

card.style.transform =

`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-6px)
`;

}
);

card.addEventListener(
"mouseleave",
()=>{

card.style.transform =

`
perspective(1000px)
rotateX(0deg)
rotateY(0deg)
translateY(0)
`;

}
);

});

/* =========================================
   PHYSICS EQUATION PARALLAX
========================================= */

const equations =
document.querySelectorAll(
".physics-bg span"
);

window.addEventListener(
"mousemove",
(e)=>{

const x =
e.clientX /
window.innerWidth;

const y =
e.clientY /
window.innerHeight;

equations.forEach(

(eq,index)=>{

const speed =
(index+1)*3;

eq.style.transform =

`
translate(
${x*speed}px,
${y*speed}px
)
`;

}

);

}
);

/* =========================================
   FADE HERO
========================================= */

const heroSection =
document.querySelector(
".hero"
);

window.addEventListener(
"scroll",
()=>{

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

/* =========================================
   PROJECT REVEAL
========================================= */

const revealItems =
document.querySelectorAll(

".project-card,\
.timeline-item,\
.skill-card,\
.interest-card"

);

const revealObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"show"
);

}

});

},

{
threshold:.15
}

);

revealItems.forEach(item=>{

revealObserver.observe(
item
);

});

/* =========================================
   SMOOTH SCROLL
========================================= */

document
.querySelectorAll(
'a[href^="#"]'
)

.forEach(anchor=>{

anchor.addEventListener(
"click",

function(e){

e.preventDefault();

const target =
document.querySelector(

this.getAttribute(
"href"
)

);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

}

);

});

/* =========================================
   CONSOLE SIGNATURE
========================================= */

console.log(`

===================================

RIZKY SETYAWAN

Computational Physics
Scientific Computing
Quantum Materials

BRIN Research Intern

===================================

`);
