  document.addEventListener('DOMContentLoaded', function() {
    var textElements = document.querySelectorAll('.text-animate');
    textElements.forEach(function(element) {
      element.classList.add('animate-text');
    });
  });

  document.addEventListener('DOMContentLoaded', function(event) {
    var dataText = [ "Front-End", "Back-End", "Full Stack" ];
    var typingSpeed = 100; // Speed of typing in ms
    var erasingSpeed = 100; // Speed of erasing in ms
    var newTextDelay = 2000; // Delay between texts in ms

    function typeWriter(text, i, fnCallback) {
      if (i < text.length) {
        document.getElementById("typewriter").innerHTML = text.substring(0, i+1) + '<span aria-hidden="true"></span><span style="color:black">&nbsp;Developer</span>';
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback);
        }, typingSpeed);
      } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, newTextDelay);
      }
    }

    function eraseText(text, i, fnCallback) {
      if (i >= 0) {
        document.getElementById("typewriter").innerHTML = text.substring(0, i) + '<span aria-hidden="true"></span>&nbsp;Developer';
        setTimeout(function() {
          eraseText(text, i - 1, fnCallback);
        }, erasingSpeed);
      } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, newTextDelay);
      }
    }

    function startTextAnimation(i) {
      if (typeof dataText[i] == 'undefined') {
        setTimeout(function() {
          startTextAnimation(0);
        }, newTextDelay);
      } else {
        typeWriter(dataText[i], 0, function() {
          eraseText(dataText[i], dataText[i].length, function() {
            startTextAnimation(i + 1);
          });
        });
      }
    }

    startTextAnimation(0);
  });