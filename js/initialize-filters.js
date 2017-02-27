'use strict';
(function () {
  window.initializeFilters = function (filterElement, cb) {
    var FilterInitializer = {};
    var lastSelectedClass;

    var filterElementChangeHandler = function (event) {
      var target = event.target;

      if (target.tagName.toLowerCase() === 'input' && target.getAttribute('name') === 'upload-filter') {
        var classToAdd = target.getAttribute('id').slice(7);

        cb(classToAdd, lastSelectedClass);
        lastSelectedClass = classToAdd;
      }
    };

    FilterInitializer.enable = function () {
      filterElement.addEventListener('change', filterElementChangeHandler);
      filterElement.addEventListener('keyup', window.utils.enterKeyHandler);
    };

    FilterInitializer.disable = function () {
      filterElement.removeEventListener('change', filterElementChangeHandler);
      filterElement.removeEventListener('keyup', window.utils.enterKeyHandler);
    };

    return FilterInitializer;
  };
})();
