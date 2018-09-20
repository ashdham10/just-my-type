$(document).ready(function(){
    $('#keyboard-upper-container').hide();
});
$(document).ready(function(){
    $('.fa-check').hide();
    $('.fa-times').hide();
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

//let sentences = ['hello', 'goodbye'];
 let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 
                 'Too ato too nOt enot one totA not anot tOO aNot', 
                 'oat itain oat tain nate eate tea anne inant nean', 
                 'itant eate anot eat nato inate eat anot tain eat', 
                 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

let letterIndex = 0;
let currentSentence = 0;
let sentence = sentences[currentSentence];
let letter = sentence[letterIndex];
let lastLetter = sentence[sentence.length];

$('#sentence').append(sentence);
$('#target-letter').append(letter);
$('#feedback').append(feedback);

//changing sentence
function changeSentence(){
    $('#sentence').empty();
    letterIndex = 0;
    currentSentence++;
    $('#sentence').append(sentences[currentSentence]);
}

//highlighting keys
$(document).keypress(function(e){
    $(`#${e.key.charCodeAt()}`).css('background', 'yellow');
});
$(document).keyup(function(e){
    $(`#${e.key.charCodeAt()}`).css('background', '');
});

//stop scroll down with spacebar 
$(document).keypress(function(e) {
    if (e.which == 32) {
        return false;
    }
});

//adding letters and sentences
$(document).keypress(function(e){
    if (e.which == 163) {
        e.preventDefault();}                         
  if (e.keyCode == letter.charCodeAt()){
    letterIndex++;
    letter = sentence[letterIndex]; 
    $('#target-letter').empty();
    $('#target-letter').append(sentences[currentSentence][letterIndex]);
    $('.fa-check').show();
    $('.fa-times').hide(); 
 }
  else {
    $('.fa-times').show();
    $('.fa-check').hide();
  }
  if(sentences[currentSentence][letterIndex] == lastLetter){
    console.log('changing sentence')
    changeSentence();}
});
