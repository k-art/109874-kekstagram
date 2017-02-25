'use strict';

(function () {
  var upload = document.querySelector('.upload');
  var uploadSelectImage = upload.querySelector('#upload-select-image');
  var uploadFile = upload.querySelector('#upload-file');

  var uploadOverlay = upload.querySelector('.upload-overlay');
  var uploadCancel = upload.querySelector('#upload-cancel');

  var uploadFilterControls = upload.querySelector('.upload-filter-controls');
  var filterImagePreview = document.querySelector('.filter-image-preview');
  var resizeControls = uploadOverlay.querySelector('.upload-resize-controls');
  var resizeControlsField = uploadOverlay.querySelector('.upload-resize-controls-value');

  // Применение фильтра к изображению
  var applyFilter = function (newFilter, oldFilter) {
    filterImagePreview.classList.remove(oldFilter);
    filterImagePreview.classList.add(newFilter);
  };

  var customInitializeFilters = window.initializeFilters(uploadFilterControls, applyFilter);

// показ модального окна
  var showModal = function () {
    uploadOverlay.classList.remove('invisible');
    uploadSelectImage.classList.add('invisible');

    window.utils.escKeydownHandler(hideModal);
    customInitializeFilters.enable();
  };

// закрытие модального окна
  var hideModal = function () {
    uploadOverlay.classList.add('invisible');
    uploadSelectImage.classList.remove('invisible');

    customInitializeFilters.disable();
  };

// Открытие формы загрузки фото по enter
  uploadSelectImage.addEventListener('keyup', window.utils.enterFilterHandler);

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

})();
