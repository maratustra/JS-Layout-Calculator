/*jshint esversion: 6 */
'use strict';

const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  extraService1: '',
  extraService2: '',
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    appData.screens = prompt("Какие типы экранов нужно разработать?", "Десктоп, мобильный");

    do {
      appData.screenPrice = +prompt("Сколько будет стоить данная работа?", "укажите цену в рублях");
    } while (!isNumber(appData.screenPrice));

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  }
};

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const getAllServicePrices = function () {

  let sum = 0;


  for (let i = 0; i < 2; i++) {

    let checkingSum = 0;

    if (i === 0) {
      appData.extraService1 = prompt("Какой дополнительный тип услуги вам нужен?");
    } else if (i === 1) {
      appData.extraService2 = prompt("Какой дополнительный тип услуги вам нужен?");
    }

    do {
      checkingSum = prompt("Сколько это будет стоить?", "укажите цену в рублях");
    } while (!isNumber(checkingSum) || checkingSum.trim() === "" || checkingSum === null);

    sum += +checkingSum;
  }

  return sum;
};

function getFullPrice() {
  return appData.screenPrice + appData.allServicePrices;
}

const getTitle = function () {
  return appData.title.trim().charAt(0).toUpperCase() + appData.title.trim().substring(1).toLowerCase();
};

const getServicePercentPrices = function () {
  return Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
};

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price < 30000 || price >= 15000) {
    return "Даем скидку в 5%";
  } else if (price < 15000 || price > 0) {
    return "Скидка не предусмотрена";
  } else {
    return "Что-то пошло не так";
  }
};

appData.asking();
appData.allServicePrices = getAllServicePrices();
appData.fullPrice = getFullPrice(appData.screenPrice, appData.allServicePrices);
appData.servicePercentPrice = getServicePercentPrices(appData.fullPrice, appData.rollback);
appData.title = getTitle();

console.log(appData.fullPrice, appData.servicePercentPrice);




