'use strict';

window.pictures = (function () {
  var pictures = [];
  var DATA_URL = 'https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data';
  var templateElement = document.querySelector('#picture-template');
  var elementToClone = templateElement.content.querySelector('.picture');
  var newElement = elementToClone.cloneNode(true);
  var parentNodeForAdd = document.querySelector('.pictures');

  window.load(DATA_URL, function (data) {
    pictures = JSON.parse(data);

    for (var i = 0; i < pictures.length; i++) {
      console.log(newElement);
      parentNodeForAdd.appendChild(newElement);
    }
  });
})();
