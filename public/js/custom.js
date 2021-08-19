$(document).ready(function () {

  //select the POPUP FRAME and show it
  $('#popup').hide().fadeIn(1000);

  //close the POPUP if the button with id="close" is clicked
  $('#close').on('click', function (e) {
    e.preventDefault();
    $('#popup').fadeOut(1000);
  });

});

/***********************************************************************************/

var change_banner_font = function () {
  var width = $(window).width();
  if (width > 1340) {
    $('.banner-content h2').css('font-size', '70px');
    $('.banner-content h3').css('font-size', '70px');
  }
  else if (width > 1000) {
    $('.banner-content h2').css('font-size', '54px');
    $('.banner-content h3').css('font-size', '54px');
    $('.banner-content p').css('font-size', '31px');
  } else if (width < 400) {
    $('.banner-content h2').css('font-size', '30px');
    // $('.banner-content h3').css('font-size', '30px');
    $('.banner-content p').css('font-size', '21px');
  } else {
    $('.banner-content h2').css('font-size', ((width - 400) / 600) * 14 + 30 + 'px');
    $('.banner-content h3').css('font-size', ((width - 400) / 600) * 14 + 24 + 'px');
    $('.banner-content p').css('font-size', ((width - 400) / (600) * 19 + 21) + 'px');
  }
};

var resize_background_img = function (image, scale_val) {
  // return;
  image_ratio = image.height() / image.width();
  window_ratio = $(window).height() / $(window).width();
  if (image_ratio > window_ratio) {
    image.width(100 * scale_val + '%');
    image.height('');
  } else {
    image.width('');
    image.height(100 * scale_val + '%');
  }

};

var resize_background_img3 = function (image, scale_val) {
  // return;
  image_ratio = image.height() / image.width();
  window_ratio = $(window).height() / $(window).width();
  if (image_ratio > window_ratio) {
    image.width(50 * scale_val + '%');
    image.height('');
  } else {
    image.width('');
    image.height(50 * scale_val + '%');
  }

};

$(window).resize(function () {
  $('.full-height').height($(window).height());
  resize_background_img($('#background-img'), 1.1);
  resize_background_img($('#background-img2'), 1.05);
  resize_background_img3($('#background-img3'), 1.05);
  change_banner_font();
});

$(window).trigger('resize');

$(window).load(function () {
  $('.full-height').height($(window).height());
  resize_background_img($('#background-img'), 1.1);
  resize_background_img($('#background-img2'), 1.05);
  resize_background_img3($('#background-img3'), 1.05);
  change_banner_font();
});


$('#home').mousemove(function (e) {
  var x_position = e.pageX / $('#home').width();
  var y_position = e.pageY / $('#home').height();
  if (x_position < .5) {
    $('#background-img').css('left', 50 + (.5 - x_position) * 7.5 + '%');
  } else {
    $('#background-img').css('left', 50 - (x_position - .5) * 7.5 + '%');
  }
  if (y_position < .5) {
    $('#background-img').css('top', 50 + (.5 - y_position) * 7.5 + '%');
  } else {
    $('#background-img').css('top', 50 - (y_position - .5) * 7.5 + '%');
  }


  if (x_position < .5) {
    $('#background-img2').css('left', 50 + (.5 - x_position) * 5 + '%');
  } else {
    $('#background-img2').css('left', 50 - (x_position - .5) * 5 + '%');
  }
  if (y_position < .5) {
    $('#background-img2').css('top', 56 + (.5 - y_position) * 5 + '%');
  } else {
    $('#background-img2').css('top', 56 - (y_position - .5) * 5 + '%');
  }


  if (x_position < .5) {
    $('#background-img3').css('left', 20 + (.5 - x_position) * 2.5 + '%');
  } else {
    $('#background-img3').css('left', 20 - (x_position - .5) * 2.5 + '%');
  }

  var percent = 70;
  if ($(window).width() < 1200)
    percent = 80;

  if (y_position < .5) {
    $('#background-img3').css('top', percent + (.5 - y_position) * 2.5 + '%');
  } else {
    $('#background-img3').css('top', percent - (y_position - .5) * 2.5 + '%');
  }


});


//slider
var SLIDER_VALUE = 1;

function change_slider() {
  $('#banner-' + SLIDER_VALUE + ' div').hide('slide', {direction: 'right'}, 1000, function () {
    //$("#banner-" + SLIDER_VALUE).hide();

    if (SLIDER_VALUE == 3) {
      SLIDER_VALUE = 1;
    } else {
      SLIDER_VALUE += 1;
    }
    //$("#banner-" + SLIDER_VALUE).show();
    $('#banner-' + SLIDER_VALUE + ' div').show('slide', {direction: 'left'}, 1000, function () {
      setTimeout(change_slider, 5000);
    });
  });
}

setTimeout(change_slider, 5000);


/***********************************************************************************/


/*
window.purechatApi = {
  l:
    [], t: [], on: function () {
    this.l.push(arguments);
  },
};
(function () {
  var done = false;
  var script =
    document.createElement('script');
  script.async = true;
  script.type = 'text/javascript';
  script.src =
    'https://app.purechat.com/VisitorWidget/WidgetScript';
  document.getElementsByTagName('HEAD').item(0).appendChild(script);
  script.onreadystatechange = script.onload = function (e) {
    if
    (!done && (!this.readyState || this.readyState == 'loaded' ||
      this.readyState == 'complete')) {
      var w = new PCWidget({
        c:
          'ea715442-3b6a-4ba0-88cd-e0263facc6a6', f: true,
      });
      done = true;
    }
  };
})();
*/


/***********************************************************************************/



