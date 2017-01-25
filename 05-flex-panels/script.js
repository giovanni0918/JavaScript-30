(function (window, document, undefined) {
    'use strict';

    class FlexPanels {
        constructor () {
            this._panels = [];
            this._onLoad = this._onLoad.bind(this);
            this._toggleOpen = this._toggleOpen.bind(this);
            this._toggleActive = this._toggleActive.bind(this);
            this.addEventListeners();
        }

        addEventListeners () {
            document.addEventListener('DOMContentLoaded', this._onLoad)
        };
        
        _onLoad () {
            this._panels = Array.from(document.querySelectorAll('.panel'));
            this._panels.forEach((panel) => panel.addEventListener('click', this._toggleOpen));
            this._panels.forEach((panel) => panel.addEventListener('transitionend', this._toggleActive));
        };
        
        _toggleOpen (event) {
            console.log(event.target);
            event.target.parentNode.classList.toggle('open');
        };
        
        _toggleActive (event) {
            console.log(event.propertyName);            
            if (event.propertyName.includes('flex')) {
                //event.target.parentNode.classList.toggle('open-active');
                event.target.classList.toggle('open-active');
            }
        };
        
        isOpen (event) {
            return event.target.classList.contains('open');
        }
        isActive (event) {
            return event.target.classList.contains('open-active');
        }
        
    };
    new FlexPanels();
} (window, document));