$(document).ready(function(){
// ie check
    var agent = navigator.userAgent.toLowerCase();
    if ( (navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
    // ie일 경우
        $("#row_1 p > span span").css("color", "#fff");
    }
// 해상도
    if ($(window).width() <= 1350) {
        $("#row_2 .col-md-5").removeClass("full").addClass("half");
    }
    if ($(window).width() <= 800) {
        $(".sk_sub").addClass("hidden");
        $( '.plus-to-minus' ).click(function(event){
            if($(this).parent().css("height") === "170px") {
                $(this).parent().css({
                    "background":"rgba(230,230,230,0.5)"    
                });
            } else {
                $(this).siblings(".detail").fadeOut(200, function(){
                    $(this).parent().css({
                        "background":"none"
                    });
                });
            }
        });
    }
// Start
    $(".row").fadeIn(1000, function(){
        $("#main_text").fadeIn(250);
    });
// Click Plus to Minus
	$( '.plus-to-minus' ).click(function(event){
        $(this).toggleClass( 'minus' );
        if($(this).parent().css("height") === "170px") {
            $(this).parent().css({
                "height":"auto"
            });
            $(this).siblings(".detail").fadeIn(500);
        } else {
            $(this).siblings(".detail").fadeOut(200, function(){
                $(this).parent().css({
                    "height":"170px"
                });
            });
        }
    });
// page move function
    // drag touch button
    $(".touch").mousedown(function(){
        $(".page_area, .angle").stop().animate({opacity : "1"}, 500);
    });
    $(".touch").mouseup(function(){
        $(".angle").stop().animate({opacity : "0.1"}, 500);
        $(".page_area").stop().animate({opacity : "0"}, 500);
    });
    function drag_button(page_button, drag_area, page_area){
        $(page_button).draggable({ 
            axis: "x",
            containment: drag_area,
            stop : function(){
                $(this).animate({left : "0%" }, 1000, 'easeOutElastic' );
                $(".angle").stop().animate({opacity : "0.1"}, 500);
                $(".page_area").stop().animate({opacity : "0"}, 500);
            },
            drag : function(){
                if($(page_area).hasClass("ui-droppable-hover") === true){
                    $(page_area).css("border", "1px solid #fff");
                    $(page_button).stop().animate({
                        width : "10px",
                        height : "10px",
                        margin : "10px"
                    }, 200);
                } else if($(".project_page").hasClass("ui-droppable-hover") === true){
                    $(".project_page").css("border", "1px solid #fff");
                    $(page_button).stop().animate({
                        width : "10px",
                        height : "10px",
                        margin : "10px"
                    }, 200);
                } else if($(".page_area").hasClass("ui-droppable-hover") === false){
                    $(".page_area").css("border", "none");
                    $(page_button).stop().animate({
                        width : "30px",
                        height : "30px",
                        margin : "0px"
                    }, 100);
                }
            }
        });
    }
    var page1_button = "#row_1 .touch";
    var drag1_area = "#row_1 .next_page"
    var page1_profile_pagearea = ".profile_page"
    var page2_button = "#row_2 .touch"
    var drag2_area = "#row_2 .next_page"
    var page2_home_pagearea = ".main_home"
    drag_button(page1_button, drag1_area, page1_profile_pagearea);
    drag_button(page2_button, drag2_area, page2_home_pagearea);

    // move_page
    function page_move(page_area, page_num){
        $(page_area).droppable({
            drop: function(event, ui) {
                $(".touch").fadeOut();
                $(".loadcover").css("z-index", "10");
                $(".loadcover").removeClass("loading").addClass("noload");
                $(".next_page").fadeOut(1750, function(){
                    $(".loadcover").removeClass("noload").addClass("loading");
                    $(".touch").fadeIn();
                    $(".page_area").css("border", "none");
                    if(page_area == ".main_home"){
                        $("#row_1 .touch").stop().animate({
                            width : "30px",
                            height : "30px",
                            margin : "0px"
                        }, 100);
                        $("#row_1").removeClass("hidden");
                        $("#row_2").addClass("hidden");
                        $(".next_page").fadeIn();
                        $("#row_1").animate({"opacity":"1"}, 1000, function(){
                            $(".loadcover").css("z-index", "-10");
                        });
                    } else if(page_area == ".profile_page"){
                        $("#row_2 .touch").stop().animate({
                            width : "30px",
                            height : "30px",
                            margin : "0px"
                        }, 100);
                        $("#row_2").removeClass("hidden");
                        $("#row_1").addClass("hidden");
                        $(".next_page").fadeIn();
                        $("#row_2").animate({"opacity":"1"}, 1000, function(){
                            $(".loadcover").css("z-index", "-10");
                        });
                    } else if(page_area.match("project_page") == "project_page") {
                        $("#row_3").removeClass("hidden");
                        $(page_num).addClass("hidden");
                        $("#row_3 .project").fadeIn();
                        $("#row_3").animate({"opacity":"1"}, 1000, function(){
                            $(".loadcover").css("z-index", "-10");
                        });
                    }
                });
            }
        });
    }
    var page1_project_pagearea = "#row_1 .project_page";
    var page2_project_pagearea = "#row_2 .project_page";
    var page1_num = "#row_1";
    var page2_num = "#row_2";
    page_move(page1_project_pagearea, page1_num);
    page_move(page2_project_pagearea, page2_num);
    page_move(page1_profile_pagearea);
    page_move(page2_home_pagearea);

    // page_3 move_button
    function page3_pagemove(page_name, page_touch, page_num){
        $(page_name).click(function(){
            $(".loadcover").css("z-index", "10");
            $(".loadcover").removeClass("loading").addClass("noload");
            $("#row_3 .project").fadeOut(1750, function(){
                $(".loadcover").removeClass("noload").addClass("loading");
                $(".touch").fadeIn();
                $(".page_area").css("border", "none");
                $(page_touch).stop().animate({
                    width : "30px",
                    height : "30px",
                    margin : "0px"
                }, 100);
                $(page_num).removeClass("hidden");
                $("#row_3").addClass("hidden");
                $(".next_page").fadeIn();
                $(page_num).animate({"opacity":"1"}, 1000, function(){
                    $(".loadcover").css("z-index", "-10");
                });
            });
        });
    }
    var page1_name = "#home";
    var page2_name = "#back";
    page3_pagemove(page1_name, page1_button, page1_num);
    page3_pagemove(page2_name, page2_button, page2_num);
});