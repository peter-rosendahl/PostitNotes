$(function() {

      $('textarea').bind('click', function(){
        $(this).focus();
    });

    // Predefined color hex codes for the postits
    var $background_color = ["9FDE4F", "3CFBDE", "FFFA49", "FF8349", "E3A4D2", "FF0000"];

    // Add postit button
    $("#add_postit").click(function() {
      // Postit object setup
      var $bg_color = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
      var $postit = $('<div class="postit draggable ui-widget-content" style="background-color: #' + $background_color[2] + '; position: absolute; top: 0; left: 0;"><textarea placeholder="Type note here..."></textarea><div class="postit_options"><button class="color"><i class="fa fa-paint-brush" aria-hidden="true"></i></button><button class="delete"><i class="fa fa-trash" aria-hidden="true"></i></button></div></div>');

      // Insert new postit with the setup above
      $("#postit_startout").before($postit);

      // Make it draggable and resizable, and make sure that postit can't move outside the whiteboard
      $postit.draggable( {zIndex: 101, opacity: 0.85, stack: ".postit", revert: "invalid"}).resizable();

      // Change background-color button
      $(".color").click(function() {
        var $bg_color = '#'+ ($background_color[Math.floor(Math.random()*($background_color.length))]);
        $(this).closest(".postit").css("background-color", $bg_color);
      });

      // Remove postit button
      $(".delete").click(function() {
        $(this).closest(".postit").remove();
      });

      // Postit hover settings
      $( ".postit" ).mouseover(function() {
          $(this).find(".postit_options").css("display", "block");
          $(this).addClass( "has_shadow" );
      });
      $( ".postit" ).mouseout(function() {
          $(this).find(".postit_options").css("display", "none");
          $(this).removeClass( "has_shadow" );
      });

      $(window).resize(function(){
        if ($(window).width() <= 1000) {
            $(".postit_options").css("display", "block");
        };
      });
      
    });

    // Make sure that postits can be dragged around inside the whiteboard
    $('#whiteboard').droppable();

  });