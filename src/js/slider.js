import anime from "animejs";

const slider = document.getElementById("sliding-image");
if(slider){
    let images;
    if(typeof wordpress !== 'undefined'){
        images = [
            wordpress.templateDir+'/img/slide1.jpg',
            wordpress.templateDir+'/img/slide2.jpg',
        ]
    }else{
        images = [
            './img/slide1.jpg',
            './img/slide2.jpg',
        ]
    }
    let currentImage = 0;
    const iconContainer = document.getElementById("icon-container");

    function resetIconColors(){
        for(let i=0; i<iconContainer.children.length; i++){
            iconContainer.children[i].style.color = "#ffffff"
        }
    }

    iconContainer.children[currentImage].style.color = "#e43314"
    slider.src = images[currentImage++];

    setInterval(() => {
        if (currentImage === 2) currentImage = 0;
        resetIconColors();
        iconContainer.children[currentImage].style.color = "#e43314"
        const timeline = anime.timeline();
        timeline.add({
            targets: slider,
            duration: 400,
            easing: "easeOutSine",
            opacity: [1, .7],
        });
        timeline.add({
            targets: slider,
            src: images[currentImage++],
            duration: 1,
            easing: "easeOutSine",
        });
        timeline.add({
            targets: slider,
            duration: 600,
            opacity: [.7, 1],
            easing: "easeOutSine",
        }, );
        timeline.play();
    }, 8000)
}


