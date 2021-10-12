/*jshint esversion: 6 */
'use strict';

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  extraService: {},
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
    appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
    appData.getTitle();

    appData.logger();
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  asking: function () {

    do {
      appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    } while (appData.isNumber(appData.title));

    for (let i = 0; i < 2; i++) {
      let price = 0;
      let name;

      do {
        name = prompt("Какие типы экранов нужно разработать?");
      } while (appData.isNumber(name));

      do {
        price = +prompt("Сколько будет стоить данная работа?", "укажите цену в рублях");
      } while (!appData.isNumber(price) || price === null);

      appData.screens.push({ id: i, name: name, price: price });
    }

    for (let i = 0; i < 2; i++) {
      let name;
      let price = 0;

      do {
        name = prompt("Какой дополнительный тип услуги вам нужен?");
      } while (appData.isNumber(name));

      do {
        price = prompt("Сколько это будет стоить?", "укажите цену в рублях");
      } while (!appData.isNumber(price) || price === null);

      appData.extraService[i] = { name: name, price: price };
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },
  addPrices: function () {

    appData.screenPrice = appData.screens.reduce(function (prevElem, nextElem) {
      return prevElem + nextElem.price;
    }, 0);

    for (let key in appData.extraService) {

      appData.allServicePrices += +appData.extraService[key].price;
    }

  },
  getFullPrice() {
    appData.fullPrice = appData.screenPrice + appData.allServicePrices;
  },
  getTitle: function () {
    appData.title = appData.title.trim().charAt(0).toUpperCase() + appData.title.trim().substring(1).toLowerCase();
  },
  getServicePercentPrices: function () {
    appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
  },
  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return "Даем скидку в 10%";
    } else if (price < 30000 || price >= 15000) {
      return "Даем скидку в 5%";
    } else if (price < 15000 || price > 0) {
      return "Скидка не предусмотрена";
    } else {
      return "Что-то пошло не так";
    }
  },
  logger: function () {

    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
  }
};


appData.start();






