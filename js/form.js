'use strict';

(function () {
  var upload = document.querySelector('.upload');
  var uploadSelectImage = upload.querySelector('#upload-select-image');
  var uploadFile = upload.querySelector('#upload-file');

  var uploadOverlay = upload.querySelector('.upload-overlay');
  var uploadCancel = upload.querySelector('#upload-cancel');

  var ENTER_KEY_CODE = 13;
  var ESCAPE_KEY_CODE = 27;

  var uploadFilterControls = upload.querySelector('.upload-filter-controls');
  var filterImagePreview = document.querySelector('.filter-image-preview');
  var resizeControls = uploadOverlay.querySelector('.upload-resize-controls');
  var resizeControlsField = uploadOverlay.querySelector('.upload-resize-controls-value');


  var isActivateEvent = function (event) {
    return event.keyCode && event.keyCode === ENTER_KEY_CODE;
  };

  var isLabel = function (element) {
    return element.tagName.toLowerCase() === 'label';
  };

  var enterFilterHandler = function (event) {
    if (isActivateEvent(event) && isLabel(event.target)) {
      event.target.click();
    }
  };

// закрытие модального окна по Esc
  var escKeydownHandler = function (event) {
    if (event.keyCode && event.keyCode === ESCAPE_KEY_CODE) {
      hideModal();
    }
  };

// показ модального окна
  var showModal = function () {
    uploadOverlay.classList.remove('invisible');
    uploadSelectImage.classList.add('invisible');

    document.addEventListener('keydown', escKeydownHandler);

    uploadFilterControls.addEventListener('change', window.initializeFilters);
    uploadFilterControls.addEventListener('keyup', enterFilterHandler);
  };

// закрытие модального окна
  var hideModal = function () {
    uploadOverlay.classList.add('invisible');
    uploadSelectImage.classList.remove('invisible');

    document.removeEventListener('keydown', escKeydownHandler);

    uploadFilterControls.removeEventListener('change', window.initializeFilters);
    uploadFilterControls.removeEventListener('keyup', enterFilterHandler);
  };

// Открытие формы загрузки фото по enter
  uploadSelectImage.addEventListener('keyup', enterFilterHandler);

// Открытие формы
  uploadFile.addEventListener('change', function () {
    showModal();
  });
// Закрытие формы
  uploadCancel.addEventListener('click', function () {
    hideModal();
  });

// Изменение масштаба изображения
  var adjustScale = function (scale) {
    resizeControlsField.setAttribute('value', scale);
    filterImagePreview.style.transform = 'scale(' + parseInt(scale, 10) / 100 + ')';
    filterImagePreview.style.msTransform = 'scale(' + parseInt(scale, 10) / 100 + ')';
    filterImagePreview.style.webkitTransform = 'scale(' + parseInt(scale, 10) / 100 + ')';
  };
  window.createScale(resizeControls, 25, adjustScale);

// Применение фильтра к изображению
//   var applyFilter = function(newFilter, oldFilter) {
//     filterImagePreview.classList.remove(oldFilter);
//     filterImagePreview.classList.add(newFilter);
//   };
})();
