'use strict';

// Изменение масштаба изображения
window.createScale = (function () {
  var upload = document.querySelector('.upload');
  var uploadOverlay = upload.querySelector('.upload-overlay');
  var filterImagePreview = document.querySelector('.filter-image-preview');
  var resizeButtonDec = uploadOverlay.querySelector('.upload-resize-controls-button-dec');
  var resizeButtonInc = uploadOverlay.querySelector('.upload-resize-controls-button-inc');
  var resizeControlsField = uploadOverlay.querySelector('.upload-resize-controls-value');

  return function (element, step, initScale) {

    var MIN_VALUE = 25;
    var MAX_VALUE = 100;
    var STEP = step;

    resizeControlsField.setAttribute('value', initScale);
    filterImagePreview.style.transform = 'scale(' + parseInt(initScale, 10) / 100 + ')';
    filterImagePreview.style.msTransform = 'scale(' + parseInt(initScale, 10) / 100 + ')';
    filterImagePreview.style.webkitTransform = 'scale(' + parseInt(initScale, 10) / 100 + ')';

    element.addEventListener('click', function (event) {
      var target = event.target;

      if (target.tagName.toLowerCase() === 'button' && target.classList.contains('upload-resize-controls-button')) {
        var currentButton = target;
      }

      var currentValue = parseInt(resizeControlsField.getAttribute('value'), 10);

      if (currentButton === resizeButtonDec && currentValue !== MIN_VALUE) {
        currentValue -= STEP;
        if (currentValue < MIN_VALUE) {
          currentValue = MIN_VALUE;
        }
      }

      if (currentButton === resizeButtonInc && currentValue !== MAX_VALUE) {
        currentValue += STEP;
        if (currentValue > MAX_VALUE) {
          currentValue = MAX_VALUE;
        }
      }
      var scaleValue = currentValue / 100;

      resizeControlsField.setAttribute('value', currentValue + '%');
      filterImagePreview.style.transform = 'scale(' + scaleValue + ')';
      filterImagePreview.style.msTransform = 'scale(' + scaleValue + ')';
      filterImagePreview.style.webkitTransform = 'scale(' + scaleValue + ')';
    });
  };
})();
