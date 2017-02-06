'use strict';

var upload = document.querySelector('.upload');
var uploadSelectImage = upload.querySelector('#upload-select-image');
var uploadFile = upload.querySelector('#upload-file');

var uploadOverlay = upload.querySelector('.upload-overlay');
var uploadCancel = upload.querySelector('#upload-cancel');

// закрытие формы кадрирования и открытие формы загрузки фото
uploadCancel.addEventListener('click', function () {
  uploadOverlay.classList.add('invisible');
  uploadSelectImage.classList.remove('invisible');
});

// закрытие формы загрузки фото при изменении файла и открытие формы кадрирования
uploadFile.addEventListener('change', function () {
  uploadOverlay.classList.remove('invisible');
  uploadSelectImage.classList.add('invisible');
});

// Применение фильтра к изображению
var filterImagePreview = upload.querySelector('.filter-image-preview');
var uploadFilterControls = upload.querySelector('.upload-filter-controls');
var uploadFilterList = uploadFilterControls.querySelectorAll('input[type="radio"]');
var lastSelectedClass;

for (var i = 0; i < uploadFilterList.length; i++) {
  uploadFilterList[i].addEventListener('click', function (event) {
    filterImagePreview.classList.remove(lastSelectedClass);

    var classToAdd = event.target.getAttribute('id').slice(7);
    filterImagePreview.classList.add(classToAdd);
    lastSelectedClass = classToAdd;
  });
}

// Изменение масштаба изображения
var resizeButtonDec = uploadOverlay.querySelector('.upload-resize-controls-button-dec');
var resizeButtonInc = uploadOverlay.querySelector('.upload-resize-controls-button-inc');
var resizeControlsField = uploadOverlay.querySelector('.upload-resize-controls-value');

resizeControlsField.setAttribute('value', '100%');

function resizeImg(event) {
  var currentValue = parseInt(resizeControlsField.getAttribute('value'), 10);

  if (event.target === resizeButtonDec && currentValue !== 25) {
    currentValue -= 25;
  }

  if (event.target === resizeButtonInc && currentValue !== 100) {
    currentValue += 25;
  }

  resizeControlsField.setAttribute('value', currentValue + '%');
  filterImagePreview.style.transform = 'scale(' + currentValue / 100 + ')';
  filterImagePreview.style.msTransform = 'scale(' + currentValue / 100 + ')';
  filterImagePreview.style.webkitTransform = 'scale(' + currentValue / 100 + ')';
}
resizeButtonDec.addEventListener('click', resizeImg);
resizeButtonInc.addEventListener('click', resizeImg);
