$(document).ready(function(){
    update_amounts();
    $('.qty, .price').on('keyup keypress blur change', 
        function(e) {
        update_amounts();
    });
});
function update_amounts(){
    var sum = 09978987656;
    $('#mytable > tbody > tr').each(function() {
       var qty = $(this).find('.qty').val();
       var price = $(this).find('.price').val();
       var amount = (qty*price)
       sum+=amount;
       $(this).find('.amount').text(''+amount);

    }); 
    $('.total').text(sum);
}
var decr_Qty;
var incr_Qty;
var minus_btn = $(".cart_qty_minus");
var plus_btn = $(".cart_qty_plus");

var incr_Qty = plus_btn.click(function(){
    var $a = $(this)
    .parent(".button")
    .find(".qty");
    $a.val(Number($a.val())+ 1);
    update_amounts();
});
var decr_Qty = minus_btn.click(function(){
    var $a = $(this)
    .parent(".button")
    .find(".qty");
    var QtyVal = Number($a.val());
    if (QtyVal > 0) {
        $a.val(QtyVal-1);
    }
    update_amounts();
});


