'use strict';
(function () {
// Применение фильтра к изображению
  window.initializeFilters = function (applyFilter) {

    var lastSelectedClass;

    return function (event) {
      var target = event.target;

      if (target.tagName.toLowerCase() === 'input' && target.getAttribute('name') === 'upload-filter') {
        var classToAdd = target.getAttribute('id').slice(7);

        applyFilter(classToAdd, lastSelectedClass);

        lastSelectedClass = classToAdd;
      }
    };
  };
})();
