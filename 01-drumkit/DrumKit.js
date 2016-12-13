(function (window, document, undefined) {
  'use strict';

  class DrumKit {
    constructor() {
      this.keys = document.querySelectorAll('.key');

      this._onLoad = this._onLoad.bind(this);
      this.playSound = this.playSound.bind(this);
      this.removeTransition = this.removeTransition.bind(this);

      this.addEventListeners();
    }
    addEventListeners() {
      document.addEventListener('DOMContentLoaded', this._onLoad);
    }

    _onLoad(event) {
      console.debug('DrumKit', 'init');
      this.keys.forEach((key) => key.addEventListener('transitionend', this.removeTransition));
      window.addEventListener('keydown', this.playSound);
    }

    playSound(event) {
      let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
      let key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

      if (!audio) {
        return;
      }

      audio.currentTime = 0;
      audio.play();
      key.classList.add('playing');

    }

    removeTransition(event) {
      if (event.propertyName !== 'transform') {
        return;
      }

      event.target.classList.remove('playing');
    }
  }
  new DrumKit();
} (window, document));