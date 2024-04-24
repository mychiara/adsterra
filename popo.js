  // Redirect to the first URL in a new tab after 3 seconds
  setTimeout(function() {
    window.open('domaintarget', '_blank');
  }, 100); // 3000 milliseconds = 3 seconds

  // Redirect to the second URL in a new tab after another 3 seconds
  setTimeout(function() {
    window.open('directlink', '_blank');
  }, 1000); // 6000 milliseconds = 6 seconds
