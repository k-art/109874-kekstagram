'use strict';

// Применение фильтра к изображению
window.initializeFilters = (function () {
  var filterImagePreview = document.querySelector('.filter-image-preview');
  var lastSelectedClass;

  return function (event) {
    var target = event.target;

    if (target.tagName.toLowerCase() === 'input' && target.getAttribute('name') === 'upload-filter') {
      var classToAdd = target.getAttribute('id').slice(7);

      filterImagePreview.classList.remove(lastSelectedClass);
      filterImagePreview.classList.add(classToAdd);
      lastSelectedClass = classToAdd;
    }
  };
})();
