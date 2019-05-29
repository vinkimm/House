$(function () {

    function random(array) {
         return array[Math.floor(Math.random() * array.length)]
    }

    
    /* SET PARAMETERS */  
    var change_img_time 	= 5000;	
    var transition_speed	= 30;

		var randfx						= '';
    var fxArr 						= ['slideLeft', 'slideRight', 'fadeIn', 'bigEntrance', 'pullUp', 'pullDown', 'stretchLeft', 'stretchRight'];
    var specialfx         = 'rand';
    
    var simple_slideshow	= $("#exampleSlider"),
        listItems 				= simple_slideshow.children('li'),
        listLen						= listItems.length,
        i 								= 0,
		
        changeList = function () {
          listItems.eq(i).fadeOut(transition_speed, function () {
              i += 1;
              if (i === listLen) { i = 0; }

              if(specialfx == 'rand') {
                 randfx 		= random(fxArr); 
                 // $('#effect_num').val(randfx);
              }		

              listItems.eq(i).fadeIn(transition_speed).attr('class', '').addClass(randfx);
              randfx = '';
          });
        };
		
    listItems.not(':first').hide();
    setInterval(changeList, change_img_time);
	
});

$(function () {

    function random(array) {
         return array[Math.floor(Math.random() * array.length)]
    }

    
    /* SET PARAMETERS */
    var change_img_time   = 5000; 
    var transition_speed  = 30;

    var randfx            = '';
    var fxArr             = ['pullUp'];
    var specialfx         = 'rand';
    
    var simple_slideshow  = $("#exampleSliderBottom"),
        listItems         = simple_slideshow.children('li'),
        listLen           = listItems.length,
        i                 = 0,
    
        changeList = function () {
          listItems.eq(i).fadeOut(transition_speed, function () {
              i += 1;
              if (i === listLen) { i = 0; }

              if(specialfx == 'rand') {
                 randfx     = random(fxArr); 
                 // $('#effect_num').val(randfx);
              }   

              listItems.eq(i).fadeIn(transition_speed).attr('class', '').addClass(randfx);
              randfx = '';
          });
        };
    
    listItems.not(':first').hide();
    setInterval(changeList, change_img_time);
  
});