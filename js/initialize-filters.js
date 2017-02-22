'use strict';

// Применение фильтра к изображению
window.initializeFilters = (function () {

  var lastSelectedClass;

  return function (event, applyFilter) {
    var target = event.target;

    if (target.tagName.toLowerCase() === 'input' && target.getAttribute('name') === 'upload-filter') {
      var classToAdd = target.getAttribute('id').slice(7);

      applyFilter(classToAdd, lastSelectedClass);

      lastSelectedClass = classToAdd;
    }
  };
})();

