'use strict';
(function () {
  window.initializeFilters = function (filterElement) {
    var filterImagePreview = document.querySelector('.filter-image-preview');
    var filterLevelSlider = document.querySelector('.upload-filter-level');
    var FilterInitializer = {};
    var lastSelectedClass;
    // var filterLevelValue = document.querySelector('.upload-filter-level-val');
    //
    // console.log(filterLevelValue.getAttribute('width'));

    var addFilterLevelSlider = function (classElem) {
      filterLevelSlider.classList.add('invisible');
      if (classElem !== 'filter-none') {
        filterLevelSlider.classList.remove('invisible');
      }
    };
    var applyFilter = function (newFilter, oldFilter) {
      filterImagePreview.classList.remove(oldFilter);
      console.log(filterImagePreview);
      // filterImagePreview.style.filter.clear();
      filterImagePreview.classList.add(newFilter);
      addFilterLevelSlider(newFilter);
    };

    var filterElementChangeHandler = function (event) {
      var target = event.target;

      if (target.tagName.toLowerCase() === 'input' && target.getAttribute('name') === 'upload-filter') {
        var classToAdd = target.getAttribute('id').slice(7);

        applyFilter(classToAdd, lastSelectedClass);
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
