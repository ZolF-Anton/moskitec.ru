// parallaxInit: function() {
//     if (!e.mobile) {
//         e.Scroll.initHelpers();
//         var o = $(".parallax-elem");
//         o.length && o.each(function(o) {
//             var t = $(this)
//               , l = t.attr("data-move");
//             e.Scroll.parallaxAnimation(t, l)
//         })
//     }
// },

// headerStatesSwitch: function(o) {
//     var t = $(window).scrollTop()
//       , l = $("#header");
//     e.mobile || l.length && (t > 10 ? l.hasClass("sticky") || l.addClass("sticky") : l.hasClass("sticky") && l.removeClass("sticky"),
//     t > e.Scroll.header_height_scroll && (t > e.Scroll.last_scroll_top ? e.Scroll.scrolled && (e.Scroll.scrolled = !1,
//     $(".header-nav-item.sub-menu").removeClass("active-sub-menu"),
//     l.addClass("down-state")) : t < e.Scroll.last_scroll_top && (e.Scroll.scrolled = !0,
//     l.removeClass("down-state"))),
//     e.Scroll.last_scroll_top = t)
// },
