import anime from "animejs";

const list = document.getElementById("burger-links");
const option = document.getElementById("burger-option");

let visible = false;

option.onclick = ()=>{
    if(!visible){
        const neededHeight = list.scrollHeight;
        anime({
            targets: list,
            height: neededHeight +"px",
            duration: 1000,
            easing: "easeOutSine",
        })
    }else{
        anime({
            targets: list,
            height: 0,
            duration: 1000,
            easing: "easeOutSine",
        })
    }
    visible = !visible
}