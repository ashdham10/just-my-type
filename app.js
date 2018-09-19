$(document).ready(function(){
    $('#keyboard-upper-container').hide();
});
//Shift function
$(document).keydown(function(e){ 
if (e.keyCode == 16) {
    $('#keyboard-upper-container').show();
    $('#keyboard-lower-container').hide();
    }
});
$(document).keyup(function(e){
    if (e.keyCode == 16){
    $('#keyboard-lower-container').show();
    $('#keyboard-upper-container').hide();
    }
}); 
//Highlighting pressed key
$(document).keypress(function(e){
    $(`#${e.key.charCodeAt()}`).css('background', 'yellow');
   
});
$(document).keyup(function(e){
    $(`#${e.key.charCodeAt()}`).css('background', '');
});

let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

$('#sentence').append(sentences[0]);

