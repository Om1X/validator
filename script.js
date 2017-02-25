(function ($) {
  $('#submit').on('click', function () {
    var obj = $('form').serializeArray();
    $.post(
      'validator.php',
      obj,
      onAjaxSuccess,
      'json'
    );

    function onAjaxSuccess(data) {
      if (data.result == true) {
        $('input[type!=button], select, textarea').removeClass().addClass('success');
        $('.errorBlock').css('display', 'none').html('');
      } else {
        requestObj = data.error;
        $('.errorBlock').css('display', 'none').html('');
        $.each(requestObj, function (i, val) {
          $('#' + i.toLowerCase().replace(' ', '_')).removeClass().addClass('error');
          $('#' + i.toLowerCase().replace(' ', '_') + ' ~ div.errorBlock').css('display', 'block').html(val);
        });
      }
    }
  });
})(jQuery);