var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


var swiper = new Swiper("#heroBanner", {
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    effect: "fade",
});

$(document).ready(function () {
    $('.mobile-menu_show').on('click', function () {
        $('.header').toggleClass('mobile-navbar_show');
    });
});

!function(){var o=document.getElementById("thumbs_custom_zoom_in");new Hammer(o,{inputClass:Hammer.TouchInput});function i(){var o,i,t,m,n,e=$("#custom_zoom_in").width(),r=800/600;e>800?(o=800,i=600):(o=e,i=e/r),$("#zoom_image_wrapper_custom_zoom_in").css({height:i,width:o});var _=parseFloat($("#custom_zoom_in .thumb_container").css("margin-right"));m=((t=(n=o+2*_)/5)-8)/r+8,$("#custom_zoom_in .thumbs_container").css({width:n,left:-_}),$("#custom_zoom_in .thumb_container").css({width:t-8,height:m-8}),$("#custom_zoom_in .thumbs_control").css({height:m,"line-height":m+"px"})}function t(){$("#zoom_custom_zoom_in").off("click")}function m(){var o={zoom_type:"lens",zoom_window_position:1,cursor:"default"};if("window"==o.zoom_type){var i=$(window).width(),t=$("#zoom_custom_zoom_in").offset().left,m=$("#zoom_image_wrapper_custom_zoom_in").width(),e=400;1==o.zoom_window_position?n(i,t,m,1,e,75)||(n(i,t,m,11,e,75)?o.zoom_window_position=11:(o.zoom_type="inner",o.cursor="crosshair")):n(i,t,m,11,e,75)||(n(i,t,m,1,e,75)?o.zoom_window_position=1:(o.zoom_type="inner",o.cursor="crosshair"))}return o}function n(o,i,t,m,n,e){if("1"==m){if((i+t+n-o)/n*100<100-e)return!0}else if((i-n)/n*100>-(100-e))return!0;return!1}x5engine.boot.push((function(){i();var o=m();zoom_type=o.zoom_type,zoom_window_position=o.zoom_window_position,cursor=o.cursor,$("#zoom_custom_zoom_in").elevateZoom({gallery:"gallery_custom_zoom_in",scrollZoom:!0,galleryActiveClass:"active",loadingIcon:"%loaderCss%",zoomWindowPosition:zoom_window_position,zoomType:zoom_type,cursor:cursor,zoomWindowWidth:500,zoomWindowHeight:500,lensBorderColour:"#FFB300",borderColour:"#FFB300",borderSize:2}),x5engine.boot.push(t)})),$("#imContent").on("breakpointChangedOrFluid",(function(o,n){i(),$("#zoom_custom_zoom_in").removeData("elevateZoom"),$("#zoom_custom_zoom_in").removeData("zoomImage"),$(".zoomWrapper img.zoomed").unwrap(),$(".zoomContainer").remove(),$("#zoom_custom_zoom_in").attr("data-zoom-image",$("#custom_zoom_in .thumb_container.active").attr("data-zoom-image")),$("#zoom_custom_zoom_in").attr("data-original-image",$("#custom_zoom_in .thumb_container.active").attr("data-original-image"));var e=m();zoom_type=e.zoom_type,zoom_window_position=e.zoom_window_position,cursor=e.cursor,$("#zoom_custom_zoom_in").elevateZoom({gallery:"gallery_custom_zoom_in",galleryActiveClass:"active",scrollZoom:!0,loadingIcon:"%loaderCss%",zoomType:zoom_type,zoomWindowPosition:zoom_window_position,cursor:cursor,zoomWindowWidth:500,zoomWindowHeight:500,lensBorderColour:"#FFB300",borderColour:"#FFB300",borderSize:2}),t()}))}();