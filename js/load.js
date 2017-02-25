'use strict';

window.load = (function () {
  var errorHandler = function (err) {
    window.console.log(err);
  };

  return function (url, onLoad) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener('load', function (event) {
      if (event.target.status >= 400) {
        errorHandler('Failed to load data. Server returned status: ' + event.target.status);
      } else if (event.target.status >= 200) {
        onLoad(event.target.response);
      }
    });
    xhr.addEventListener('error', errorHandler);

    xhr.open('GET', url);
    xhr.send();
  };
})();
