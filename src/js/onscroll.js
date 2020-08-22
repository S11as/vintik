import anime from "animejs";
function isPartiallyVisible(el) {
    const elementBoundary = el.getBoundingClientRect();

    const top = elementBoundary.top;
    const bottom = elementBoundary.bottom;
    const height = elementBoundary.height;
    return ((top + height  >= 0) && (height  + window.innerHeight >= bottom));
}

let isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
    if (isScrolling === false) {
        window.requestAnimationFrame(function () {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

let advantagesAnimationPlayed = false;
let servicesAnimationPlayed = false;
let brandAnimationPlayed = false;

function scrolling(e){
    const advantages = document.getElementById("advantages");
    if(advantages && isPartiallyVisible(advantages) && !advantagesAnimationPlayed){
        advantagesAnimationPlayed = true;
        const timeline = anime.timeline();
        timeline.add({
            targets: "#advantages h1, h4",
            translateX: [-400, 0],
            duration: 1000,
            easing: "easeOutSine",
        })
            .add({
                targets:"#advantages-car",
                translateX: [800, 0],
                duration: 1000,
                easing: "easeOutSine",
            },"-=300")
            .add({
                targets: ".advantage",
                translateY: [150, 0],
                duration: 1300,
                delay: (el, i) => 100 * i
            }, "-=800")
        timeline.play();
    }
    const services = document.getElementById("services");
    if(services && isPartiallyVisible(services) && !servicesAnimationPlayed){
        servicesAnimationPlayed = true;
        const timeline = anime.timeline();
        timeline.add({
            targets: "#services h1, #services h4",
            translateX: [-600, 0],
            duration: 2000,
            easing: "easeOutSine",
        })
            .add({
                targets: ".service-box",
                translateY: [200, 0],
                duration: 2500,
            })

        timeline.play();
    }
    const brand = document.getElementById("brand");
    if(brand && isPartiallyVisible(brand) && !brandAnimationPlayed){
        brandAnimationPlayed = true;
        const timeline = anime.timeline();
        timeline.add({
            targets: ".car-logo",
            translateX: [600, 0],
            duration: 8000,
            delay: (el, i) =>150 * i
        })
        timeline.play();
    }
}