$(document).ready(function(){
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
            $(this).parent().css("height","auto");
            $(this).siblings(".detail").fadeIn(500);
        } else {
            $(this).siblings(".detail").fadeOut(200, function(){
                $(this).parent().css("height","170px");
            });
        }
    });
//    mouse wheel
    $("#row_1").on("mousewheel DOMMouseScroll", function (event) {
        $(".loadcover").css("z-index", "10");
        $(".loadcover").removeClass("loading").addClass("noload");
        $("#row_1 p").fadeOut(700, function(){
            $(".loadcover").removeClass("noload").addClass("loading");
            $("#row_2").removeClass("hidden");
            $("#row_1").addClass("hidden");
            $("#row_2 .col-md-12").fadeIn();
            $("#row_2").animate({"opacity":"1"}, 500, function(){
                $(".loadcover").css("z-index", "-10");
            });
        });
    });
    $("#row_2").on("mousewheel DOMMouseScroll", function (event) {
        $(".loadcover").css("z-index", "10");
        $(".loadcover").removeClass("loading").addClass("noload");
        $("#row_2 .col-md-12").fadeOut(700, function(){
            $(".loadcover").removeClass("noload").addClass("loading");
            $("#row_3").removeClass("hidden");
            $("#row_2").addClass("hidden");
            $("#row_3 .project").fadeIn();
            $("#row_3").animate({"opacity":"1"}, 500, function(){
                $(".loadcover").css("z-index", "-10");
            });
        });
    });
//    $("#row_3").on("mousewheel DOMMouseScroll", function (event) {
//        $(".loadcover").css("z-index", "10");
//        $(".loadcover").removeClass("loading").addClass("noload");
//        $("#row_3 .project").fadeOut(700, function(){
//            $(".loadcover").removeClass("noload").addClass("loading");
//            $("#row_1").removeClass("hidden");
//            $("#row_3").addClass("hidden");
//            $("#row_1 p").fadeIn();
//            $("#row_1").animate({"opacity":"1"}, 500, function(){
//                $(".loadcover").css("z-index", "-10");
//            });
//        });
//    });
});