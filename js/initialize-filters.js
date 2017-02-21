'use strict';

// Применение фильтра к изображению
window.initializeFilters = (function () {

  var lastSelectedClass;

  return function (event) {
    var target = event.target;

    if (target.tagName.toLowerCase() === 'input' && target.getAttribute('name') === 'upload-filter') {
      var classToAdd = target.getAttribute('id').slice(7);

      window.applyFilter(classToAdd, lastSelectedClass);

      lastSelectedClass = classToAdd;
    }
  };
})();
