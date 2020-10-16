$(document).ready(function () {
    
    $('.scrollspy').scrollSpy({
    getActiveElement: function (id) {
        return 'a[href="#' + id + '"]'; 
    }
  });
     $('.pushpin').pushpin();
    
      $('#toc').each(function() {
    var $this = $(this);
    var $target = $("#text-content");
    $this.pushpin({
      top: $target.offset().top,
      bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
  });
    
   
});