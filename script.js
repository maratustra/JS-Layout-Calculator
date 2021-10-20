/*jshint esversion: 6 */
'use strict';

const title = document.getElementsByTagName('h1')[0];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const inputRange = document.querySelector('.rollback input');
const inputRangeValue = document.querySelector('.rollback .range-value');

const checkboxes = document.querySelectorAll('input[type=checkbox]');

const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 0,
  extraServicePercent: {},
  extraServiceNumber: {},
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  counter: 0,
  isError: false,
  init: function () {
    this.addTitle();

    startBtn.addEventListener('click', () => {
      this.isError = false;
      this.checkInputs();
    });
    buttonPlus.addEventListener('click', () => {
      this.addScreenBlock();
    });
    inputRange.addEventListener('input', this.addRollback);
    resetBtn.addEventListener('click', () => {
      this.reset();
    });
  },
  addTitle: function () {
    document.title = title.textContent;
  },
  start: function () {
    this.addScreens();
    this.addServices();
    this.addPrices();
    this.showResult();
    this.disableAllInputs();
    this.toggleBtn();
  },
  showResult: function () {
    total.value = this.screenPrice;
    totalCount.value = this.counter;
    totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber;
    fullTotalCount.value = this.fullPrice;
    totalCountRollback.value = this.servicePercentPrice;
  },
  checkInputs: function () {
    screens = document.querySelectorAll('.screen');

    screens.forEach(screen => {

      const select = screen.querySelector('select');
      const field = screen.querySelector('input');

      if (select.value === "" || field.value === "") {
        console.log("Пустая строка");
        this.isError = true;
      }
    });
    if (!this.isError) {
      this.start();
    }
  },
  addScreens: function () {
    screens = document.querySelectorAll('.screen');

    screens.forEach((screen, index) => {

      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;

      this.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value
      });

      this.counter += +input.value;
    });
  },
  addServices: function () {
    otherItemsPercent.forEach(item => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        this.extraServicePercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach(item => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        this.extraServiceNumber[label.textContent] = +input.value;
      }
    });
  },
  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    const inputClone = cloneScreen.querySelector('input');

    inputClone.value = '';
    screens[screens.length - 1].after(cloneScreen);
  },
  addPrices: function () {
    this.screenPrice = this.screens.reduce((prevElem, nextElem) => {
      return prevElem + nextElem.price;
    }, 0);

    for (let key in this.extraServiceNumber) {
      this.servicePricesNumber += this.extraServiceNumber[key];
    }

    for (let key in this.extraServicePercent) {
      this.servicePricesPercent += this.screenPrice * (this.extraServicePercent[key] / 100);
    }
    this.fullPrice = this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;

    this.servicePercentPrice = Math.ceil(this.fullPrice - (this.fullPrice * (this.rollback / 100)));
  },
  addRollback: function (event) {
    inputRangeValue.textContent = event.target.value + "%";
    appData.rollback = event.target.value;
  },
  disableAllInputs: function () {
    screens = document.querySelectorAll('.screen');

    screens.forEach(screen => {
      const input = screen.querySelector('[type="text"]');
      const select = screen.querySelector('select');

      if (!input.hasAttribute('disabled')) {
        input.setAttribute("disabled", "disabled");
      } else {
        input.disabled = false;
      }

      if (!select.hasAttribute('disabled')) {
        select.setAttribute("disabled", "disabled");
      } else {
        select.disabled = false;
      }
    });
  },
  toggleBtn: function () {
    startBtn.style.display = (startBtn.style.display == 'none') ? 'block' : 'none';
    resetBtn.style.display = (resetBtn.style.display == 'none') ? 'block' : 'none';
  },
  reset: function () {
    const results = document.querySelectorAll('.total-input');
    screens = document.querySelectorAll('.screen');

    results.forEach(elem => elem.value = "0");

    screens.forEach(screen => {
      const input = screen.querySelector('[type="text"]');
      const select = screen.querySelector('select');

      select.value = "";
      input.value = "";
    });

    checkboxes.forEach(elem => elem.checked = false);

    inputRange.value = "0";
    inputRangeValue.textContent = "0%";

    this.toggleBtn();
    this.disableAllInputs();
  },
};


appData.init();




