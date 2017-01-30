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

for (var i = 0; i < uploadFilterList.length; i++) {
  clickUploadFilter(uploadFilterList[i]);
}

function clickUploadFilter(clickedFilter) {
  clickedFilter.addEventListener('click', function () {
    var filterId = clickedFilter.getAttribute('id');
    var classToAdd = filterId.slice(7);
    toggleUploadFilter(classToAdd);
    console.log(filterId);
  });
}
//
// Как правильно найти и убрать добавленный класс к filterImagePreview, при смене фильтра?
//
function toggleUploadFilter(classToAdd) {
  console.log(filterImagePreview.classList);
  filterImagePreview.classList.add(classToAdd);
}
