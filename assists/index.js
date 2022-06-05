var menu_mob = window.matchMedia("(max-width: 1250px)");

if (menu_mob) {

    var has_submenu = document.querySelectorAll('.has_submenu');
    var ul_mob = document.querySelectorAll('.central_sub_ul_inner');
    var close = document.querySelector('.fix_close');
    var open = document.querySelector('.menu_icon');
    var section_foar = document.querySelector('.section_foar');

    close.addEventListener("click", function () {
        section_foar.style.transform = "translateX(-380px)";
    });
    open.addEventListener("click", function () {
        section_foar.style.transform = "translateX(0px)";
    });

    // for (let index = 0; index < has_submenu.length; index++) {
    //     has_submenu[index].addEventListener("click", function () {
    //         if (ul_mob[index].style.display == "none") {
    //             ul_mob[index].style.display = "block";
    //         } else {
    //             ul_mob[index].style.display = "none"
    //         }
    //     });
    // }
    for (let index = 0; index < has_submenu.length; index++) {
        has_submenu[index].addEventListener("click", function () {

            has_submenu[index].classList.toggle("active");

            console.log(viewportToPixels('85.4vh'));
            console.log(right_scrol.clientHeight);
            if (right_scrol.clientHeight > viewportToPixels('85.4vh')) {
                right_scrol.style.overflowY = "scroll";
                right_scrol.style.height = "85.4vh";
            } else {
                right_scrol.style.overflowY = "hidden";
                right_scrol.style.height = "fit-content";
            }

        });
    }
}

window.addEventListener('load', (event) => {
    var div_top_img = document.querySelector(".image");
    div_top_img.classList.add("transfor");
});


function plusDivs(n) {
    showDivs(slideIndex += n);
}

var slideIndex = 1;
showDivs(slideIndex);

function showDivs(size) {

    var x = document.querySelectorAll(".Slides");
    if (size > x.length) {
        slideIndex = 1
    }
    if (size < 1) {
        slideIndex = x.length
    }
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

var scrollToTopBtn = document.querySelector(".to-top");
var rootElement = document.documentElement;
scrollToTopBtn.addEventListener("click", function scrollToTop() {

    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

function viewportToPixels(value) {
    var parts = value.match(/([0-9\.]+)(vh|vw)/)
    var q = Number(parts[1])
    var side = window[['innerHeight', 'innerWidth'][
        ['vh', 'vw'].indexOf(parts[2])
    ]]
    return side * (q / 100)
}

var right_scrol = document.querySelector('.center_sub_ul');