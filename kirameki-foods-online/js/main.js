
//ハンバーガーメニュー

$(function(){
  $('.navBtn').on('click', function(){
    $(this).toggleClass('active');
    $(".gNav").toggleClass('active');
    return false;
  });
});

//search
$(function(){
  $('#search').on('click', function(){
    $('.search-wrap').addClass('openSearch');
  });
});

$(function(){
  $('#close-search').on('click', function(){
    $('.search-wrap').removeClass('openSearch');
  });
});

//accordion

$(function () {
  $('.menu-title').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass("open");
    $('.menu-title').not(this).removeClass('open');
    $('.menu-title').not($(this)).next('.inner-items').slideUp();
  });
});


  $('.close').on('click',function () {
    $('.menu-title').removeClass("open");
    $(this).parent().slideUp();
  });

  //fadein left
  $('.banner-img').waypoint({
    handler: function(direction) {
      if (direction === 'down') {
        $(this.element).addClass('animate__fadeInLeft');
        this.destroy();
      }
    },
    offset: `60%`,
  });
