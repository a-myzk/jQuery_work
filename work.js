$(function(){
  $('.required').on('change', function(){
      if($(this).val() == ''){
          $(this).css({backgroundColor:'red'});
      } else {
          $(this).css({backgroundColor:'#fff'});
      }
  }).change();
});
