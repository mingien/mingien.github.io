// menu animated
var hamburgerBtn = document.querySelector('.hamburger');
var drawer = document.querySelector('.drawer');
var i = 0;

hamburgerBtn.addEventListener('click', trigger);
/* 判斷按鈕按下的狀態*/
function trigger() {
    if (i % 2 == 0) {
        drawer.classList.add('open');
        hamburgerBtn.classList.toggle('change');
    }

    if (i % 2 == 1) {
        drawer.classList.remove('open');
        hamburgerBtn.classList.toggle('change');
    }
    i++;
}


$(".menuHover").hover(
    function () {
        $(this).addClass("menuHoverOn", "swing");
        $(this).css("color", "white");
    }, function () {
        $(this).removeClass("menuHoverOn", 200, "swing");
        $(this).css("color", "black");
    }
);


//scroll偵測
$(window).scroll(function () {
    if ($(window).scrollTop() >= 120) {
        // topBarMask
        $("header").addClass("topBarMask", 500, "swing");
        //goTop
        $("#goTop").show("slow");
    } else {
        $("header").removeClass("topBarMask", 500, "easeInBack");
        $("#goTop").hide("slow");
    }
    console.log($(window).scrollTop());
})

//捲到最上面
$("#goTop").click(function () {
    var body = $("html, body");
    body.stop().animate({ scrollTop: 0 }, 500, 'swing');
})
$("#goTopMobile").click(function () {
    var body = $("html, body");
    body.stop().animate({ scrollTop: 0 }, 500, 'swing');
})