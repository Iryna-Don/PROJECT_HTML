window.addEventListener("resize", function(){
    // location.reload();
    if (window.screen.width <= 500) {
        let counterIndex = 0;
        slider();
        function slider() {
            let i;
            let x = document.getElementsByClassName("slide");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            counterIndex++;
            if (counterIndex > x.length) {
                counterIndex = 1
            }
            x[counterIndex - 1].style.display = "block";
            setTimeout(slider, 2200);
        }
    }
}, false);

window.addEventListener("resize", function(){
        if (window.screen.width > 500) {
        location.reload()}}, false)

