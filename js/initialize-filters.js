'use strict';

(function () {
  window.initializeFilters = function (filterElement, applyFilter) {
    var initializeFilter = {};
    var lastSelectedClass;

    var filterChangeHandler = function (event) {
      var target = event.target;

      if (target.tagName.toLowerCase() === 'input' && target.getAttribute('name') === 'upload-filter') {
        var classToAdd = target.getAttribute('id').slice(7);

        applyFilter(classToAdd, lastSelectedClass);

        lastSelectedClass = classToAdd;
      }
    };

    initializeFilter.enable = function () {
      filterElement.addEventListener('change', filterChangeHandler);
      filterElement.addEventListener('keyup', window.utils.enterFilterHandler);
    };

    initializeFilter.disable = function () {
      filterElement.removeEventListener('change', filterChangeHandler);
      filterElement.removeEventListener('keyup', window.utils.enterFilterHandler);
    };

    return initializeFilter;
  };
})();
