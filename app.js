$(() => {
    // Query for the div with the id of container and set it to a variable named $container
    const $container = $('#container');
    console.log($container);
  
    // Create an <h1> element and set it to a variable called $h1
    const $h1 = $('<h1>');
  
    // Add some text inside the h1 element
    $h1.text('Hogwarts');
    console.log($h1);
  
    // Append the $h1 element to the $container
    $container.append($h1);


    // Add h2 element with your name
    const $h2 = $('<h2>');
    $h2.text('Your Name');
    $container.append($h2);

    // Add h3 element with your house
    const $h3 = $('<h3>');
    $h3.text('House: Hufflepuff');
    $container.append($h3);

    // Add h4 element with your pet's name and a class matching your pet type
    const $h4Pet = $('<h4>');
    $h4Pet.text('Pet Name: Lily');
    $h4Pet.addClass('owl'); 
    $container.append($h4Pet);

    // Add h4 element with your wand description
    const $h4Wand = $('<h4>');
    $h4Wand.text('Wand: Unicorn hair');
    $container.append($h4Wand); 

});