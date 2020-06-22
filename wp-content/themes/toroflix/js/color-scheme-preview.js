(function($) {
  var $style = $('#tp-color-scheme-css'),
  api = wp.customize;

  if (!$style.length) {
    $style = $('head').append('<style type="text/css" id="tp-color-scheme-css" />')
    .find('#tp-color-scheme-css');
  }
    

  // Color Scheme CSS.
  api.bind('preview-ready', function() {
    api.preview.bind('update-color-scheme-css', function(css) {
     $style.html(css);        
    });
      
  });
      
    
})(jQuery);