'use strict';

// Изменение масштаба изображения
window.createScale = function (event) {
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
};
