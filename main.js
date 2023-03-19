// anime({
//     targets: '#section-main',
//     translateX: 270,
//     loop: true,
//     easing: 'easeInOutSine'
// });
// console.log("main.js done")

let zone = document.querySelector("#section-main");
let zoneArea = zone.getBoundingClientRect(); 
let zoneAreaWidth = zoneArea.width;
let zoneAreaHeight = zoneArea.height;
let zoneAreaCenterX = zoneArea.left + (zoneAreaWidth * 0.5);
let zoneAreaCenterY = zoneArea.top + (zoneAreaHeight * 0.5);
let circle = document.querySelector("#background-text");

anime.set(circle, {
    translateX: 0,
    translateY: 0,
});  

zone.addEventListener("pointerenter", function(e) {
  positionCircle(e);
});

zone.addEventListener("pointerleave", function(e) {
    anime({
        targets: circle,
        scale: 1,
        duration: 300
    });
    resetPosition();
});

zone.addEventListener("pointermove", function(e) {
  positionCircle(e);
});

function positionCircle(e) {
    let x = e.clientX - zoneAreaCenterX;  
    let y = e.clientY - zoneAreaCenterY + circle.offsetHeight * 0.5; 
    anime({
        targets: circle,
        translateX: x * 0.1,
        translateY: y * 0.1,
        duration: 300
    });
}

function resetPosition() {
    anime({
        targets: circle,
        translateX: 0,
        translateY: 0,
        duration: 700,
        easing: 'easeOutElastic',
    });
}
