var today = new Date();
document.getElementById('time').innerHTML=today;

"use strict";

var resolver = {
  resolve: function resolve(options, callback) {
    // The string to resolve
    var resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
    var combinedOptions = Object.assign({}, options, { resolveString: resolveString });

    function getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    function randomCharacter(characters) {
      return characters[getRandomInteger(0, characters.length - 1)];
    };

    function doRandomiserEffect(options, callback) {
      var characters = options.characters;
      var timeout = options.timeout;
      var element = options.element;
      var partialString = options.partialString;

      var iterations = options.iterations;

      setTimeout(function () {
        if (iterations >= 0) {
          var nextOptions = Object.assign({}, options, { iterations: iterations - 1 });

          // Ensures partialString without the random character as the final state.
          if (iterations === 0) {
            element.textContent = partialString;
          } else {
            // Replaces the last character of partialString with a random character
            element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
          }

          doRandomiserEffect(nextOptions, callback);
        } else if (typeof callback === "function") {
          callback();
        }
      }, options.timeout);
    };

    function doResolverEffect(options, callback) {
      var resolveString = options.resolveString;
      var characters = options.characters;
      var offset = options.offset;
      var partialString = resolveString.substring(0, offset);
      var combinedOptions = Object.assign({}, options, { partialString: partialString });

      doRandomiserEffect(combinedOptions, function () {
        var nextOptions = Object.assign({}, options, { offset: offset + 1 });

        if (offset <= resolveString.length) {
          doResolverEffect(nextOptions, callback);
        } else if (typeof callback === "function") {
          callback();
        }
      });
    };

    doResolverEffect(combinedOptions, callback);
  }
};