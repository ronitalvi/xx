var con = document.querySelector('.cont');
var con = document.querySelector('.co');


 if (window.location.pathname === '/products.html') {
  con.classList.add('a');
  co.classList.add('a')


 }


 console.log()


 $(function () {

      // Slideshow 1
      $("#slider1").responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed: 1000,
        maxwidth: 800,
        namespace: "transparent-btns"
      });
 });




  function scrollWin(x, y) {
  window.scrollBy(x, y);
}


var typeString = [ 'the authentic nature…'];
      var  i = 0;
      var count = 0
      var selectedText = '';
      var text = '';
      (function type() {
        if (count == typeString.length) {
          count = 0;
        }
        selectedText = typeString[count];
        text = selectedText.slice(0, ++i);
        document.getElementById('typing').innerHTML = text;
        if (text.length === selectedText.length) {
          count++;
          i = 0;
        }
        setTimeout(type, 300);
      }());

      function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
          if ((new Date().getTime() - start) > milliseconds){
            break;
          }
        }
      }




 $('.parallax-window').parallax({imageSrc: '../images/colombia.png'});


