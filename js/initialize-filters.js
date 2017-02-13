'use strict';

var filterImagePreview = document.querySelector('.filter-image-preview');
var lastSelectedClass;

// Применение фильтра к изображению
window.initializeFilters = function (event) {
  var target = event.target;

  if (target.tagName.toLowerCase() === 'input' && target.getAttribute('name') === 'upload-filter') {
    var classToAdd = target.getAttribute('id').slice(7);

    filterImagePreview.classList.remove(lastSelectedClass);
    filterImagePreview.classList.add(classToAdd);
    lastSelectedClass = classToAdd;
  }
};
// var changeFilter = function (event) {
//   var target = event.target;
//
//   if (target.tagName.toLowerCase() === 'input' && target.getAttribute('name') === 'upload-filter') {
//     var classToAdd = target.getAttribute('id').slice(7);
//
//     filterImagePreview.classList.remove(lastSelectedClass);
//     filterImagePreview.classList.add(classToAdd);
//     lastSelectedClass = classToAdd;
//   }
// };
