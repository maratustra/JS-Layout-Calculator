/*jshint esversion: 6 */
'use strict';

const title = document.getElementsByTagName('h1')[0];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const inputRange = document.querySelector('.rollback input');
const inputRangeValue = document.querySelector('.rollback .range-value');

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
    appData.addTitle();

    startBtn.addEventListener('click', appData.checkInputs);
    buttonPlus.addEventListener('click', function () {
      appData.isError = false;
      appData.addScreenBlock();
    });
    inputRange.addEventListener('input', appData.addRollback);
  },
  addTitle: function () {
    document.title = title.textContent;
  },
  start: function () {
    appData.addScreens();
    appData.addServices();
    appData.addPrices();

    appData.showResult();
  },
  showResult: function () {
    total.value = appData.screenPrice;
    totalCount.value = appData.counter;
    totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
    fullTotalCount.value = appData.fullPrice;
    totalCountRollback.value = appData.servicePercentPrice;
  },
  checkInputs: function () {

    screens = document.querySelectorAll('.screen');

    screens.forEach(function (screen) {

      const select = screen.querySelector('select');
      const field = screen.querySelector('input');

      if (select.value === "" || field.value === "") {
        console.log("Пустая строка");
        appData.isError = true;
      }
    });
    if (!appData.isError) {
      appData.start();
    }
  },
  addScreens: function () {

    screens = document.querySelectorAll('.screen');

    screens.forEach(function (screen, index) {

      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value
      });

      appData.counter += +input.value;
    });
  },
  addServices: function () {
    otherItemsPercent.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        appData.extraServicePercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        appData.extraServiceNumber[label.textContent] = +input.value;
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
    appData.screenPrice = appData.screens.reduce(function (prevElem, nextElem) {
      return prevElem + nextElem.price;
    }, 0);

    for (let key in appData.extraServiceNumber) {
      appData.servicePricesNumber += appData.extraServiceNumber[key];
    }

    for (let key in appData.extraServicePercent) {
      appData.servicePricesPercent += appData.screenPrice * (appData.extraServicePercent[key] / 100);
    }
    appData.fullPrice = appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;

    appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
  },
  addRollback: function (event) {
    inputRangeValue.textContent = event.target.value + "%";
    appData.rollback = event.target.value;
  }
};


appData.init();






