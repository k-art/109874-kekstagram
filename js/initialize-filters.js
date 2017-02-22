'use strict';

(function () {
  window.initializeFilters = function (filterElement, applyFilter) {
    var initializeFilter = {};
    var lastSelectedClass;

    var onChange = function (event) {
      var target = event.target;

      if (target.tagName.toLowerCase() === 'input' && target.getAttribute('name') === 'upload-filter') {
        var classToAdd = target.getAttribute('id').slice(7);

        applyFilter(classToAdd, lastSelectedClass);

        lastSelectedClass = classToAdd;
      }
    };

    initializeFilter.onOpen = function () {
      filterElement.addEventListener('change', onChange);
      filterElement.addEventListener('keyup', window.utils.enterFilterHandler);
    };

    initializeFilter.onClose = function () {
      filterElement.removeEventListener('change', onChange);
      filterElement.removeEventListener('keyup', window.utils.enterFilterHandler);
    };

    return initializeFilter;
  };
})();
