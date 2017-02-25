'use strict';

window.utils = (function () {
  var ENTER_KEY_CODE = 13;
  var ESCAPE_KEY_CODE = 27;

  return {
    isActivateEvent: function (event) {
      return event.keyCode && event.keyCode === ENTER_KEY_CODE;
    },
    isDeactivateEvent: function (event) {
      return event.keyCode && event.keyCode === ESCAPE_KEY_CODE;
    },
    isLabel: function (element) {
      return element.tagName.toLowerCase() === 'label';
    },
    enterFilterHandler: function (event) {
      if (window.utils.isActivateEvent(event) && window.utils.isLabel(event.target)) {
        event.target.click();
      }
    },
    // закрытие модального окна по Esc
    escKeydownHandler: function (element) {
      document.addEventListener('keydown', function (event) {
        if (window.utils.isDeactivateEvent(event)) {
          element();
        }
      });
    }
  };
})();
