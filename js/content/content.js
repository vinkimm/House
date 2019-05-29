$(function(){

  $('.visionMission').hide();
  $('.visionReadMore').click(function(){

      if ($('.sectionOne').is(':visible')) {
        $('.sectionOne').hide();
        $('.sectionTwo').hide()
      }

      if (!$('.innerOtherContents').is(':visible')) {
        $('.innerOtherContents').show();
      }

      if (!$('.visionMission').is(':visible')) {
        $('.visionMission').show();
      }
      
        var str=(""+
                "<h3><b>VISION</b></h3> <hr>"+
                " <p>A dynamic epicenter of excellence in training and research for service to humanity."+
                  "</p> "+
                  "<h3><b>MISSION</b></h3> <hr>" +
                 "<p>"+ 
                    "To generate, preserve and share knowledge for effective leadership in higher education, training, research and outreach through nurturing an intellectual culture that integrates theory with practice and innovation."+
                  "</p>"+
                  "<h3><b>CORE VALUES</b></h3> <hr>"+
                  "<p>"+
                    "1.Integrity: We aim to espouse transparency and integrity in our actions  and conduct<br>"+
                    "2.Equity: Fairness and equal opportunities to all.<br>"+
                    "3.Diversity:Diversity builds a community that fosters a climate that is open and welcoming to diverse people, ideas and perspectives; that promotes a constructive discourse on the nature of diversity; and that engages faculty, staff and students in activities that promote the University's core values.<br>"+
                    "4.Fostering teamwork, collaboration, creativity aand innovation, effective communication, tolerance and a culture of peace<br>"+
                    "5.Professionalism: UoEm has a highly qualified staff for the various services and products we offer. We therefore embrace work ethics in provision of services. <br>"+
                    "6.Excellence-Excellence commits us to challenge ourselves to utilize our God-given gifts -- intellectual, social, physical, spiritual and ethical.<br>"+
                  "</p>"+
                  "<h3><b>MOTTO</b></h3><hr>"+
                    "<p>Ocean of knowledge<p>");
        // $('.innerOtherContents').html('');
        $('.innerOtherContents').empty();
        $('.innerOtherContents').prepend(str);
  });

  $('.visionMission').click(function(){
    $('.sectionOne').show();
    $('.sectionTwo').show();
    $('.innerOtherContents').hide();

    $('.visionMission').hide();
  });


// fuculties block js
  $('.box-title').each(function() {
    var $this = $(this);
    $this.next('.box-content').hide(); // Hide all contents

    function toggleActive() {
      $('.active').toggleClass('active').next('.box-content').slideToggle(700); // same as "slideUp all .active"
    }

    $this.click(function() {
      if (!$(this).hasClass('active')) { // if we just clicked a new title (that don't have .active)
        toggleActive(); // hide all and...
      }
      $this.toggleClass("active").next('.box-content').slideToggle(700); // add .active to title and open content
    });

    $(".close-box").click(function() {
      $(this).parent(toggleActive());
    });
  });

});


