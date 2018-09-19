$(document).ready(function(){
    $('#keyboard-upper-container').hide();
});

$(document).keydown(function(e){ 
if (e.keyCode == 16) {
    $('#keyboard-upper-container').show();
    $('#keyboard-lower-container').hide();
}
});
$(document).keyup(function(){
    $('#keyboard-lower-container').show();
    $('#keyboard-upper-container').hide();
}); 


$(document).keypress(function(k){
    $('.key').css('background', 'yellow');
})
$(document).keyup(function(){
    $('.key').css('background', '');
})