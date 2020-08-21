import anime from "animejs";

if (document.body.clientWidth > 768) {
    const navBarTimeline = anime.timeline();
    navBarTimeline.add({
        targets: "#nav-wrapper",
        translateY: [-50, 0],
        easing: "easeOutSine",
        duration: 1000,
    })
        .add({
            targets: ".nav-link",
            opacity: [0, 1],
            duration: 400,
            easing: "easeOutSine",
        }, "-=1000")

    navBarTimeline.play();

    anime({
        targets: "#top-bar",
        opacity: [0, 1],
        duration: 1000,
        easing: "easeOutSine",
    });

    const sliderTimeline = anime.timeline();
    sliderTimeline.add({
        targets: "#slider",
        translateY: [-100, 0],
        opacity: [.75, 1],
        duration: 1000,
        easing: "easeOutSine",
    })
        .add({
            targets: "#slider-caption",
            translateX: [-400, 0],
            duration: 1000,
            easing: "easeOutSine",
        })
        .add({
            targets: "#slider h5",
            translateY: [-50, 0],
            duration: 600,
            easing: "easeOutSine",
        }, "-=300")
        .add({
            targets: "#slider h1",
            translateY: [50, 0],
            duration: 600,
            easing: "easeOutSine",
        }, "-=600")
    sliderTimeline.play();
}

