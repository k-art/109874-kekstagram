'use strict';

window.pictures = (function () {
  var pictures = [];
  var DATA_URL = 'https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data';
  var templateElement = document.querySelector('#picture-template');
  var elementToClone = templateElement.content.querySelector('.picture');
  var parentNodeForAdd = document.querySelector('.pictures');

  var loadData = function (onDataLoaded) {
    window.load(DATA_URL, function (data) {
      pictures = JSON.parse(data);
      if (({}).toString.call(onDataLoaded) === '[object Function]') {
        onDataLoaded(pictures);
      }
    });
  };

  var renderPictures = function (loadedPictures) {
    var fragment = document.createDocumentFragment();

    loadedPictures.forEach(function (item) {
      var newElement = elementToClone.cloneNode(true);

      newElement.querySelector('img').setAttribute('src', item.url);
      newElement.querySelector('.picture-likes').innerText = item.likes;
      newElement.querySelector('.picture-comments').innerText = item.comments.length;

      newElement.addEventListener('click', function (event) {
        event.preventDefault();
        window.showGallery(item);
      });

      fragment.appendChild(newElement);
    });
    parentNodeForAdd.appendChild(fragment);
  };
  loadData(renderPictures);
})();
