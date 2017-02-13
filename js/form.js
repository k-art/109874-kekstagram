'use strict';

var upload = document.querySelector('.upload');
var uploadSelectImage = upload.querySelector('#upload-select-image');
var uploadFile = upload.querySelector('#upload-file');

var uploadOverlay = upload.querySelector('.upload-overlay');
var uploadCancel = upload.querySelector('#upload-cancel');

var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

var uploadFilterControls = upload.querySelector('.upload-filter-controls');

var resizeButtonDec = uploadOverlay.querySelector('.upload-resize-controls-button-dec');
var resizeButtonInc = uploadOverlay.querySelector('.upload-resize-controls-button-inc');
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
    uploadOverlay.classList.add('invisible');
    uploadSelectImage.classList.remove('invisible');
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
  uploadFilterControls.removeEventListener('change', enterFilterHandler);
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
resizeControlsField.setAttribute('value', '100%');
resizeButtonDec.addEventListener('click', window.createScale);
resizeButtonInc.addEventListener('click', window.createScale);
