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
        $('input[type!=button], textarea').removeClass().addClass('success');
        $.each(requestObj, function (i, val) {
          if (i === 'Credit Card') i = 'credit_card';
          $('#' + i.toLowerCase()).removeClass().addClass('error');
          $('#' + i.toLowerCase() + ' ~ div.errorBlock').css('display', 'block').html(val);
        });
      }
    }
  });
})(jQuery);