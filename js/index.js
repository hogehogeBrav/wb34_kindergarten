$(function(){
  $(".fade-topimg img:not(:first-child)").hide();
  setInterval(function() {
    $(".fade-topimg img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo(".fade-topimg");
  },5000);
});

// $(window).on('scroll', function(){
//   var scrollTop = $(window).scrollTop();
//   var bgPosition = scrollTop / 2; //スクロール後のポジションを指定（値を大きくすると移動距離が小さくなる）

//   if(bgPosition){
//     $('.new_news_img').css('background-position', 'center left -'+ bgPosition + 'px');
//   }
// });

// スクロールのドラッグ有効化
jQuery.prototype.mousedragscrollable = function () {
  let target;
  $(this).each(function (i, e) {
    $(e).mousedown(function (event) {
      event.preventDefault();
      target = $(e);
      $(e).data({
        down: true,
        move: false,
        x: event.clientX,
        y: event.clientY,
        scrollleft: $(e).scrollLeft(),
        scrolltop: $(e).scrollTop(),
      });
      return false;
    });
    $(e).click(function (event) {
      if ($(e).data("move")) {
        return false;
      }
    });
  });
  $(document)
    .mousemove(function (event) {
      if ($(target).data("down")) {
        event.preventDefault();
        let move_x = $(target).data("x") - event.clientX;
        let move_y = $(target).data("y") - event.clientY;
        if (move_x !== 0 || move_y !== 0) {
          $(target).data("move", true);
        } else {
          return;
        }
        $(target).scrollLeft($(target).data("scrollleft") + move_x);
        $(target).scrollTop($(target).data("scrolltop") + move_y);
        return false;
      }
    })
    .mouseup(function (event) {
      $(target).data("down", false);
      return false;
    });
};
$("#topix ul").mousedragscrollable();


$(function() {
  $('#switch').on('click', function() {
      $('#pamphlet ul').toggleClass('is-surface').toggleClass('is-reverse');
      if($('#switch').text() == 'お電話でご請求') {
          $('#switch').text('Webでご請求');
      } else {
          $('#switch').text('お電話でご請求');
      }
  });
});
