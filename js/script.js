var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter--value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {
          duration: 1700,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }

        });
    });
    a = 1;
  }

});

var b = 0;
$(window).scroll(function() {

  var oTop = $('#counter2').offset().top - window.innerHeight;
  if (b == 0 && $(window).scrollTop() > oTop) {
    $('.counter--value2').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count2');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {
          duration: 1700,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }

        });
    });
    b = 1;
  }

});
