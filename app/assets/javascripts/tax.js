$(function(){
  $('#product_price').on('change', function(){
    let tax = $('#product_price').val();
    $('.money01').text(Math.ceil(tax * 0.1) + "円");
    $('.money02').text(tax - Math.ceil((tax * 0.1)) + "円");
  });
});