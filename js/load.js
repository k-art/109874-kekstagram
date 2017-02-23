'use strict';

window.load = (function () {
  return function (url, onLoad) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener('load', function (event) {
      onLoad(event.target.response);
    });
    xhr.open('GET', url);
    xhr.send();
  };
})();
