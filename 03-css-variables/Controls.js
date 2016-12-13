(function (window, document, undefined) {
  'use strict';
  class Controls {

    constructor() {
      this.inputs = document.querySelectorAll('.controls input');
      this._onUpdate = this._onUpdate.bind(this);
      this.addEventListeners();
    }
    addEventListeners() {
      this.inputs.forEach(input => input.addEventListener('change', this._onUpdate));
      this.inputs.forEach(input => input.addEventListener('mousemove', this._onUpdate));
    }
    _onUpdate(event) {
      const suffix = event.target.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${event.target.name}`, event.target.value + suffix);
    }
  }
  new Controls();
} (window, document));