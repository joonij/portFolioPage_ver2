$(document).ready(function(){
    //해상도 변경시
    $(window).resize(function(){
        //새로고침
        location.reload();
    });
    // ie check
    var agent = navigator.userAgent.toLowerCase();
    if ( (navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
        // ie일 경우
        $("#row_1 p > span span").css("color", "#fff");
    }
    // 해상도
    if ($(window).width() <= 1100) {
        $("#row_2 .col-md-5").removeClass("full").addClass("half");
        $(".scroll").addClass("hidden");
        $(".touch").removeClass("hidden");
        $("#row_1 .touch").click(function(){
            $(".loadcover").css("z-index", "10");
            $(".loadcover").removeClass("loading").addClass("noload");
            $("#row_1 p").fadeOut(1100, function(){
                $(".loadcover").removeClass("noload").addClass("loading");
                $("#row_2").removeClass("hidden");
                $("#row_1").addClass("hidden");
                $("#row_2 .col-xs-12").fadeIn();
                $("#row_2").animate({"opacity":"1"}, 2000, function(){
                    $(".loadcover").css("z-index", "-10");
                });
            });
        });
        $("#row_2 .touch").click(function(){
            $(".loadcover").css("z-index", "10");
            $(".loadcover").removeClass("loading").addClass("noload");
            $("#row_2 .col-xs-12").fadeOut(1100, function(){
                $(".loadcover").removeClass("noload").addClass("loading");
                $("#row_3").removeClass("hidden");
                $("#row_2").addClass("hidden");
                $("#row_3 .project").fadeIn();
                $("#row_3").animate({"opacity":"1"}, 1000, function(){
                    $(".loadcover").css("z-index", "-10");
                });
            });
        });
    }
    if ($(window).width() <= 600) {
        $(".sk_sub").addClass("hidden");
    }
    // heigth
    var ht = $(window).height();
    var ht_2 = ht / 2;
    $(".full").css("height", ht);
    $(".half").css("height", ht_2);
    // Start
    $(".row").fadeIn(1000, function(){
        $("#main_text").fadeIn(250);
    });
    // Click Plus to Minus
	$( '.plus-to-minus' ).click(function(event){
        $(this).toggleClass( 'minus' );
        if($(this).parent().css("height") === "170px") {
            $(this).parent().css({
                "height":"auto",
                "background":"rgba(230,230,230,0.5)"
            });
            $(this).siblings(".detail").fadeIn(500);
        } else {
            $(this).siblings(".detail").fadeOut(200, function(){
                $(this).parent().css({
                    "height":"170px",
                    "background":"none"
                });
            });
        }
    });
//    mouse wheel
    $("#row_1").on("mousewheel DOMMouseScroll", function (event) {
        $(".loadcover").css("z-index", "10");
        $(".loadcover").removeClass("loading").addClass("noload");
        $("#row_1 p").fadeOut(1100, function(){
            $(".loadcover").removeClass("noload").addClass("loading");
            $("#row_2").removeClass("hidden");
            $("#row_1").addClass("hidden");
            $("#row_2 .col-xs-12").fadeIn();
            $("#row_2").animate({"opacity":"1"}, 2000, function(){
                $(".loadcover").css("z-index", "-10");
            });
        });
    });
    $("#row_2").on("mousewheel DOMMouseScroll", function (event) {
        $(".loadcover").css("z-index", "10");
        $(".loadcover").removeClass("loading").addClass("noload");
        $("#row_2 .col-xs-12").fadeOut(1100, function(){
            $(".loadcover").removeClass("noload").addClass("loading");
            $("#row_3").removeClass("hidden");
            $("#row_2").addClass("hidden");
            $("#row_3 .project").fadeIn();
            $("#row_3").animate({"opacity":"1"}, 1000, function(){
                $(".loadcover").css("z-index", "-10");
            });
        });
    });
    // move_area
    $("#home").click(function(){
        $(".loadcover").css("z-index", "10");
        $(".loadcover").removeClass("loading").addClass("noload");
        $("#row_3 .project").fadeOut(1100, function(){
            $(".loadcover").removeClass("noload").addClass("loading");
            $("#row_1").removeClass("hidden");
            $("#row_3").addClass("hidden");
            $("#row_1 p").fadeIn();
            $("#row_1").animate({"opacity":"1"}, 2000, function(){
                $(".loadcover").css("z-index", "-10");
            });
        });
    });
    $("#back").click(function(){
        $(".loadcover").css("z-index", "10");
        $(".loadcover").removeClass("loading").addClass("noload");
        $("#row_3 .project").fadeOut(1100, function(){
            $(".loadcover").removeClass("noload").addClass("loading");
            $("#row_2").removeClass("hidden");
            $("#row_3").addClass("hidden");
            $("#row_2 .col-xs-12").fadeIn();
            $("#row_2").animate({"opacity":"1"}, 2000, function(){
                $(".loadcover").css("z-index", "-10");
            });
        });
    });
});