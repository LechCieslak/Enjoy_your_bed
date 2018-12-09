document.addEventListener("DOMContentLoaded", function (event) {

    var name = document.querySelectorAll(".article-box-bar");

    name
        .forEach(function (el, index) {
            el.addEventListener("mouseover", function () {
                //name[index].style.display = "none";
                name[index].classList.add("invisible");
            });
            el.addEventListener("mouseout", function () {
                //name[index].style.display = "block";
                name[index].classList.remove("invisible");
            })

        });


    var slide = document.querySelectorAll(".banner-slide");
    var next = document.querySelector(".banner-next");
    var prev = document.querySelector(".banner-prev");
    var index = 0;


    next.addEventListener("click", function () {
        slide[index].classList.remove("banner-slide-active");
        index += 1;
        if (index > slide.length - 1) {
            index = 0;
        }
        slide[index].classList.add("banner-slide-active");
    })

    prev.addEventListener("click", function () {
        slide[index].classList.remove("banner-slide-active");
        index -= 1;
        if (index < 0) {
            index = slide.length - 1;
        }
        slide[index].classList.add("banner-slide-active");
    })

});