'use strict';

(function () {
  window.initializeFilters = function (filterElement, applyFilter) {
    var initializeFilter = {};
    var lastSelectedClass;

    var onChangeFilter = function (event) {
      var target = event.target;

      if (target.tagName.toLowerCase() === 'input' && target.getAttribute('name') === 'upload-filter') {
        var classToAdd = target.getAttribute('id').slice(7);

        applyFilter(classToAdd, lastSelectedClass);

        lastSelectedClass = classToAdd;
      }
    };

    initializeFilter.onOpenModal = function () {
      filterElement.addEventListener('change', onChangeFilter);
      filterElement.addEventListener('keyup', window.utils.enterFilterHandler);
    };

    initializeFilter.onCloseModal = function () {
      filterElement.removeEventListener('change', onChangeFilter);
      filterElement.removeEventListener('keyup', window.utils.enterFilterHandler);
    };

    return initializeFilter;
  };
})();
