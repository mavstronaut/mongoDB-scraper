var slideIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("headSlide");
    for (i=0; i < x.length; i++) {
        x[i].getElementsByClassName.display="none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex -1].getElementsByClassName.display = "block";
    setTimeout(carousel, 2000);
};

