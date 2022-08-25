//Code taken from website: ru.stackoverflow.com
var LANGUAGE = false;
$.redrawLanguage = function (lang) {
  $.ajax({
    url : 'lang/' + lang + '.json',
    dataType : 'json',
    success : function (response) {
      LANGUAGE = response; 
      $('body').find("[lng]").each(function () {
        var lng = LANGUAGE[ $(this).attr('lng') ]; 
        var tag = $(this)[0].tagName.toLowerCase();

        switch (tag) {
          case "input":
          $(this).val(lng);
          break;
          default:
          $(this).html(lng);								
          break;
        }
      });


    }
  });
}

$.getLanguage = function (key) {
  if (typeof(LANGUAGE[key]) != 'undefined') {
    return LANGUAGE[key]; 
  }
  return key; 
}


$('#ru').on('click', function(e){
  e.preventDefault();

  var
    $this = $(this);

    $.redrawLanguage('eng');

});

$('#en').on('click', function(e){
  e.preventDefault();

  var
    $this = $(this);

    $.redrawLanguage('rus');

$('#ua').on('click', function(e){
  e.preventDefault();

  var
    $this = $(this);

    $.redrawLanguage('rus');


    console.log($.getLanguage('desc') );

});
