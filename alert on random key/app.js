document.addEventListener('keydown', function(event) {
    var randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
    alert('Random number: ' + randomNumber);
  });