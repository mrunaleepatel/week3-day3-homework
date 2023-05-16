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
  });
  