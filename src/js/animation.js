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
    })
}

