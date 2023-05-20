$(document).ready(function() {
  // Year 1
      const $container = $('#container');
      console.log($container);
    
      const $h1 = $('<h1>');
      console.log($h1);
    
      $h1.text('Hogwarts');
      $container.append($h1);
    
      // Add CSS rule for text alignment
      $('body').css('text-align', 'center');
    
  // Year 2
      const $h2 = $('<h2>').text('Mrunalee Patel');
      const $h3 = $('<h3>').text('House: Hufflepuff');
      const $h4Pet = $('<h4>').addClass('petType').text('Owl');
      const $h4Wand = $('<h4>').text('Hawthorn');
    
      $container.append($h2, $h3, $h4Pet, $h4Wand);
    
  // Year 3
  // not able to get the li in center or do I need to get the top stuff to the center. not sure
      const $ul = $('<ul>').attr('storage', 'trunk');
      const $liButterBeer = $('<li>').text('Butter Beer');
      const $liInvisibilityCloak = $('<li>').addClass('secret').text('Invisibility Cloak');
      const $liMagicMap = $('<li>').addClass('secret').text('Magic Map');
      const $liTimeTurner = $('<li>').addClass('secret').text('Time Turner');
      const $liLeash = $('<li>').addClass('petType').text('Leash');
      const $liBeans = $('<li>').text('Bertie Botts Every Flavor, Jelly Beans');
    
      $ul.append($liButterBeer, $liInvisibilityCloak, $liMagicMap, $liTimeTurner, $liLeash, $liBeans);
      $container.append($ul);
    
  // Year 4 in HTML - its a table
  
  // Year 5
      $h4Wand.remove();
      $liButterBeer.remove();
      $ul.append($h4Wand);
    
      $h4Wand.css('color', 'red');
    
      $liLeash.detach();
      $container.append($liLeash);
    
      $liLeash.remove();
      $ul.append($liLeash);
    
  // Year 6
      $('.secret').hide('slow').delay(1000).show('slow');
    
      $liLeash.addClass('cabbage');
    //  added the cabbage styling in CSS but not working
    
      $liLeash.removeClass('cabbage');
    
  // Year 7
      $h3.text('Fall 2018');
      $ul.prepend($('<li>').text('Butter beer').attr('storage', 'chest'));
    
      $ul.attr('storage', 'chest');
    
    });
    