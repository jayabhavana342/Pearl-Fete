//google map
function initialize() {
    var myLatlng = new google.maps.LatLng(-37.815207, 144.963937);
    var mapOptions = {
        zoom: 13,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Hello World!'
    });
}

google.maps.event.addDomListener(window, 'load', initialize);


//nice scroll

$(".portfolio-items, .left.pgbg").niceScroll({horizrailenabled: false, styler: "fb", cursorcolor: "#ae62d7", cursorwidth: '5', cursorborderradius: '0px', autohidemode: false, background: 'rgba(0,0,0,0.5)', cursorborder: '', zindex: '10000'});
$(".right.pr, .left.prbg").niceScroll({horizrailenabled: false, styler: "fb", cursorcolor: "#4ca0e0", cursorwidth: '5', cursorborderradius: '0px', autohidemode: false, background: 'rgba(0,0,0,0.5)', cursorborder: '', zindex: '10000'});
$(".right.blogpage").niceScroll({horizrailenabled: false, styler: "fb", cursorcolor: "#fab229", cursorwidth: '5', cursorborderradius: '0px', autohidemode: false, background: 'rgba(0,0,0,0.5)', cursorborder: '', zindex: '10000'});
$(".left.contactpage").niceScroll({horizrailenabled: false, styler: "fb", cursorcolor: "#f0654d", cursorwidth: '5', cursorborderradius: '0px', autohidemode: false, background: 'rgba(0,0,0,0.5)', cursorborder: '', zindex: '10000'});

$(function() {
    $("#carousel").owlCarousel({
        //Basic Speeds
        slideSpeed: 200,
        paginationSpeed: 800,
        //Autoplay
        autoPlay: true,
        // Navigation
        navigation: false,
        paginationNumbers: false,
        // Responsive
        responsive: true,
        items: 1
    });
    //get carousel instance data and store it in variable owl
    var owl = $("#carousel").data('owlCarousel');

    //Public methods
    $('.main-arrow-left').click(function() {
        owl.prev(); // Go to next slide

    });

    //Public methods
    $('.main-arrow-right').click(function() {
        owl.next(); // Go to next slide

    });

});

$(function() {

    // Slideshow 4
    $("#slider4").responsiveSlides({
        //            auto: false,
        pager: false,
        nav: true,
        speed: 500,
        namespace: "callbacks",
        before: function() {
            $('.events').append("<li>before event fired.</li>");
        },
        after: function() {
            $('.events').append("<li>after event fired.</li>");
        }
    });

});

var minWidth = 200; //three items a row. for four, make it 150
$(document).ready(function() {
    var ww = $(window).width();
    $('#grid-items').mixitup({
    });
    $(window).resize($.debounce(250, function() {
        var w = $(".grid").width();
        if (w > 700)
            minWidth = 250;
        var numberOfItems = parseInt(w / minWidth);
        var itemWidthinPercentage = 100 / numberOfItems;
        $(".grid ul li").css({width: itemWidthinPercentage + "%"});
        $('#grid-items').mixitup('sort', 'random');
        if (ww > 480) {
            fixHeight();
        }
    }));
    $(window).trigger("resize");

    $(".grid ul").delegate("li", "click", function() {
        var src = $(this).data("src");
        $.magnificPopup.open({
            items: {
                src: src
            },
            type: 'image',
            mainClass: 'mfp-fade'
        });
    });
    $('#grid-items').mixitup('sort', 'random');

    $(".bloglink").bind("click", function() {

        $(".singlepost").hide();
        $(".multiposts").show();
    })

    $(".post .title").bind("click", function() {

        $(".singlepost").show();
        $(".multiposts").hide();
    })

    if (location.hash.substr(1)) {
        var hash = location.hash.substr(1);
        $("#" + hash + "-button").trigger("click");
    }

    $(".avatar").bind("click", function() {
        var step = $(this).data("step");
        var time = step;
        if (step > 2)
            time = step / 1.5;
        var distance = 630;
        // if(ww<=1285) distance = 630;
        if (ww <= 1026)
            distance = 500;
        $("#showcase-strip").transition({x: (-1 * distance * step)}, 600 * time, "easeOutCubic");
    });
    $(".arrow-sign").bind("click", function() {
        var step = $(this).data("step") * 1;
        var time = step;
        if (step > 2)
            time = step / 1.5;
        $("#showcase-strip").transition({x: 0}, 600 * time, "easeOutCubic");
    });
    if (!$.support.transition)
        $.fn.transition = $.fn.animate;

    //displayModal();

    /* Height Fix */

    $(window).trigger("resize");

    /* width fix */
    //bring icons to the center
    var rpw = $(".rightpanel").width();
    $(".rightpanel .content").css({left: ((rpw - 96) / 2)});

});

function fixHeight() {
    var h = $(window).height();
    $(".et-wrapper").height(h + "px");
    $(".left").css({height: h});
    $(".right").css({height: h});
    $(".rightpanel").css({height: h});
    $(".rightpanel .trpanel").css({height: h});
    $(".portfolio-items").css({height: h});
}

function displayModal() {
    $(".modalbg").css("opacity", 0).show();
    ;
    $(".modalbg").transition({opacity: 1}, 600);
    $(".modal-container").css({opacity: 0}).show();
    $(".modal-container").transition({opacity: 1, scale: 1}, 600);
}

function hideModal() {
    $(".modalbg").transition({opacity: 0});
    $(".modal-container").transition({opacity: 0, scale: 1}, function() {
        $(".modalbg").css("opacity", 0).hide();
        $(".modal-container").css({opacity: 0}).hide();
    });
}

       