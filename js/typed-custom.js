jQuery(document).ready(function() {
        $(function () {
// jquery typed plugin
    $(".typed").typed({
        stringsElement: $('.typed-strings'),
        typeSpeed: 100,
        backDelay: 500,
        loop: true,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false,
        callback: function () { null; },
        resetCallback: function () { newTyped(); }
    });
});
});

$(document).ready(function() {
  $('.modal-btn').magnificPopup({
    type:'inline',
    closeBtnInside:true,
    autoFocusLast: true,
    focus:".modal-title",
  });
 });
