(function(window, document, undefined) {
  'use strict';

  class Clock {
    constructor() {
      this.secondHand = document.querySelector('.second-hand');
      this.minsHand = document.querySelector('.min-hand');
      this.hourHand = document.querySelector('.hour-hand');
      this.setDate = this.setDate.bind(this);
      setInterval(this.setDate, 1000);
    }
    setDate() {
      const now = new Date();

      const seconds = now.getSeconds();
      const secondsDegrees = ((seconds / 60) * 360) + 90;
      this.secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

      const mins = now.getMinutes();
      const minsDegrees = ((mins / 60) * 360) + 90;
      this.minsHand.style.transform = `rotate(${minsDegrees}deg)`;

      const hour = now.getHours();
      const hourDegrees = ((hour / 12) * 360) + 90;
      this.hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }
  }
  new Clock();
} (window, document));