'use strict';

// Применение фильтра к изображению
window.initializeFilters = (function () {

  var filterImagePreview = document.querySelector('.filter-image-preview');
  var lastSelectedClass;

  var applyFilter = function (newFilter, oldFilter) {
    filterImagePreview.classList.remove(oldFilter);
    filterImagePreview.classList.add(newFilter);
  };

  return function (event) {
    var target = event.target;

    if (target.tagName.toLowerCase() === 'input' && target.getAttribute('name') === 'upload-filter') {
      var classToAdd = target.getAttribute('id').slice(7);

      applyFilter(classToAdd, lastSelectedClass);

      lastSelectedClass = classToAdd;
    }
  };
})();
