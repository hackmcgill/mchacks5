function main() {
    // words that will appear on landing page
    // ex. Canad's most __ hackathon
    var text = ['welcoming', 'exciting', 'friendly', 'badass'];
    var counter = 0;
    var elem = document.getElementById("changingword");
    //change();
    //setInterval(change, 8000);

    function change() {

    }


    // function change() {
    //     elem.style.opacity = 0.0;
    //     elem.innerHTML = text[counter];
    //     appear(elem, 0,5,100);
    //     counter++;
    //     if(counter >= text.length) { counter = 0; }
    // }
    // function appear(elm, i, steps, speed){
    //     var t_o;
    //     i = i || 0;
    //     steps = steps || 5;
    //     speed = speed || 50;

    //     t_o = setInterval(function(){
    //       opacity = i / 100;
    //       i = i + steps;
    //       if(opacity > 1 || opacity < 0){
    //         clearInterval(t_o);
    //         return;
    //       }
    //       elm.style.opacity = opacity;
    //       elm.style.filter = 'alpha(opacity=' + opacity*100 + ')';
    //     }, speed);
    // };

    // Scale font size
    // The magic numbers come from trial and error
    // The first argument to the function works for portrait orientation,
    // and the second works for landscape. If only one argument is passed in,
    // it works for both orientation.

    $('#mchacksbox').fitText(0.4);
    $('#mcgillbox').fitText(0.8, 1.1);
    $('#datebox').fitText(1, 2);
    $('#talkbox').fitText(1, 1.8);
    $('#sponsor_text').fitText(1.8, 3.2);
    $('#sponsorbutton').fitText(0.8, 0.9);
    $('#linksbutton').fitText(0.9);
    $('#schedulebutton').fitText(0.8, 0.9);
    $('#applybutton').fitText(0.8, 0.9);
    $('#past_sponsors').fitText(1.1, 2.5);
    $('.sponsor_header').fitText(2.5);

    $('#app-header').fitText(1,1.8);



    // The bottom text looks better with two lines in portrait orientation
    var linebreak_fixer = function() {
        if(window.innerHeight > window.innerWidth){
            // Portrait
            $('#linebreak').html('<br/>');
        } else {
            // Landscape
            $('#linebreak').html('');
        }
    }

    linebreak_fixer();
    $(window).on('resize orientationchange', linebreak_fixer);
    // var vid = document.getElementById("youtube");
    // vid.setAttribute("style","height:"+vid.clientWidth*9/16+"px");

    // $('.fittext-content').css('visibility', 'visible');
    $('.fittext-content').css('visibility','visible').hide().fadeIn("slow");
}


$( document ).ready(function() {

    main();

})

