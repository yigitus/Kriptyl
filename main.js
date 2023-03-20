
//* Title animation
let zone = document.querySelector("#section-main");
let zoneArea = zone.getBoundingClientRect(); 
let zoneAreaWidth = zoneArea.width;
let zoneAreaHeight = zoneArea.height;
let zoneAreaCenterX = zoneArea.left + (zoneAreaWidth * 0.5);
let zoneAreaCenterY = zoneArea.top + (zoneAreaHeight * 0.5);
let text = document.querySelector("#background-text");

anime.set(text, {
    translateX: 10,
    translateY: 10,
});  

zone.addEventListener("pointerleave", function(e) {
    anime({
        targets: text,
        scale: 1,
        duration: 300
    });
    resetPosition();
});

zone.addEventListener("pointermove", function(e) {
    positiontext(e);
});

zone.addEventListener("pointerenter", function(e) {
    positiontext(e);
});

function positiontext(e) {
    let x = e.clientX - zoneAreaCenterX;  
    let y = e.clientY - zoneAreaCenterY + text.offsetHeight * 0.5; 
    anime({
        targets: text,
        translateX: x * 0.1,
        translateY: y * 0.1,
        duration: 400
    });
}

function resetPosition() {
    anime({
        targets: text,
        translateX: 10,
        translateY: 10,
        duration: 700,
        easing: 'easeOutElastic',
    });
}
//? Title animation end