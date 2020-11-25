// -------------------------------------------------------------
//   Force Centered Navigation
// -------------------------------------------------------------
(function () {
    var $frame = $('#forcecentered');
    var $wrap  = $frame.parent();

    // Call Sly on frame
    $frame.sly({
        horizontal: 1,
        itemNav: 'centered',
        smart: 1,
        activateMiddle: 1,
        activateOn: 'click',
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 15,
        // scrollBar: $wrap.find('.scrollbar'),
        scrollBy: 1,
        speed: 300,
        elasticBounds: 1,
        easing: 'easeOutExpo',
        // easing: 'swing',
        dragHandle: 1,
        dynamicHandle: 1,
        clickBar: 1,

        // Buttons
        prev: $wrap.find('.prev'),
        next: $wrap.find('.next')
    });
}());

var contador = 1;
var idInterval = setInterval(()=>{
    
    if(contador <= 6){
        document.querySelector(".next").click();
        console.log("avanza",idInterval);
        contador++;
    }
    if(contador > 6 && contador <= 12){
        document.querySelector(".prev").click();
        console.log("retrocede",idInterval);
        contador++;
    }
    if(contador > 12){
        console.log("para aqui");
        clearInterval(idInterval);
    }
    
},700)