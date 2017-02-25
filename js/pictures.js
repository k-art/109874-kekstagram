'use strict';

window.pictures = (function () {
  var pictures = [];
  var DATA_URL = 'https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data';
  var templateElement = document.querySelector('#picture-template');
  var elementToClone = templateElement.content.querySelector('.picture');
  var parentNodeForAdd = document.querySelector('.pictures');
  var picturesFilters = document.querySelector('.filters');

  var loadData = function (onDataLoaded) {
    window.load(DATA_URL, function (data) {
      pictures = JSON.parse(data);
      if (({}).toString.call(onDataLoaded) === '[object Function]') {
        onDataLoaded(pictures);
      }
    });
  };

  var renderPictures = function (loadedPictures) {
    parentNodeForAdd.innerHTML = '';
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

  var chosePicturesFilter = function (value) {
    var newPictures = [];

    if (value === 'new') {
      var copiedPictures = pictures.slice();

      for (var i = 0; i < 10; i++) {
        var index = window.utils.getRandomIndex(copiedPictures);
        newPictures = newPictures.concat(copiedPictures[index]);
        copiedPictures.splice(index, 1);
      }
      renderPictures(newPictures);

    } else if (value === 'discussed') {
      newPictures = pictures.slice().sort(function (left, right) {
        return right.comments.length - left.comments.length;
      });
      renderPictures(newPictures);

    } else if (value === 'popular') {
      newPictures = pictures.slice();
      renderPictures(newPictures);
    }
  };

  var picturesFiltersHandler = function (event) {
    var target = event.target;
    if (target.tagName.toLowerCase() === 'input' && target.classList.contains('filters-radio')) {
      chosePicturesFilter(target.getAttribute('value'));
    }
  };
  var showPicturesFilters = function () {
    picturesFilters.classList.remove('hidden');
    picturesFilters.addEventListener('change', picturesFiltersHandler);
  };

  loadData(renderPictures);
  showPicturesFilters();
})();
