(function ($) {
  $('#submit').on('click', function () {
    var requestObj = $('form').serializeArray();
    $.post(
      'validator.php',
      requestObj,
      onAjaxSuccess,
      'json'
    );

    function onAjaxSuccess(data) {
      if (data.result) {
        $('input[type!=button], textarea').removeClass().addClass('success');
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