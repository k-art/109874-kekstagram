'use strict';

var upload = document.querySelector('.upload');
var uploadSelectImage = upload.querySelector('#upload-select-image');
var uploadFile = upload.querySelector('#upload-file');

var uploadOverlay = upload.querySelector('.upload-overlay');
var uploadCancel = upload.querySelector('#upload-cancel');

var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

var isActivateEvent = function (event) {
  return event.keyCode && event.keyCode === ENTER_KEY_CODE;
};

var isLabel = function (event) {
  return event.target.tagName.toLowerCase() === 'label';
};

var enterFilterHandler = function (event) {
  if (isActivateEvent(event) && isLabel(event)) {
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

  uploadFilterControls.addEventListener('change', changeFilter);
  uploadFilterControls.addEventListener('keyup', enterFilterHandler);
};

// закрытие модального окна
var hideModal = function () {
  uploadOverlay.classList.add('invisible');
  uploadSelectImage.classList.remove('invisible');

  document.removeEventListener('keydown', escKeydownHandler);

  uploadFilterControls.removeEventListener('change', changeFilter);
  uploadFilterControls.removeEventListener('change', enterFilterHandler);
};

var filterImagePreview = upload.querySelector('.filter-image-preview');
var uploadFilterControls = upload.querySelector('.upload-filter-controls');
var lastSelectedClass;

// Применение фильтра к изображению
var changeFilter = function (event) {
  var target = event.target;

  if (target.tagName.toLowerCase() === 'input' && target.getAttribute('name') === 'upload-filter') {
    var classToAdd = target.getAttribute('id').slice(7);

    filterImagePreview.classList.remove(lastSelectedClass);
    filterImagePreview.classList.add(classToAdd);
    lastSelectedClass = classToAdd;
  }
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

//
// Изменение масштаба изображения
//
var resizeButtonDec = uploadOverlay.querySelector('.upload-resize-controls-button-dec');
var resizeButtonInc = uploadOverlay.querySelector('.upload-resize-controls-button-inc');
var resizeControlsField = uploadOverlay.querySelector('.upload-resize-controls-value');

resizeControlsField.setAttribute('value', '100%');

function resizeImg(event) {
  var currentValue = parseInt(resizeControlsField.getAttribute('value'), 10);

  var MIN_VALUE = 25;
  var MAX_VALUE = 100;
  var STEP = 25;

  if (event.target === resizeButtonDec && currentValue !== MIN_VALUE) {
    currentValue -= STEP;
  }

  if (event.target === resizeButtonInc && currentValue !== MAX_VALUE) {
    currentValue += STEP;
  }
  var scaleValue = currentValue / 100;

  resizeControlsField.setAttribute('value', currentValue + '%');
  filterImagePreview.style.transform = 'scale(' + scaleValue + ')';
  filterImagePreview.style.msTransform = 'scale(' + scaleValue + ')';
  filterImagePreview.style.webkitTransform = 'scale(' + scaleValue + ')';
}
resizeButtonDec.addEventListener('click', resizeImg);
resizeButtonInc.addEventListener('click', resizeImg);
