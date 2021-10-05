/*jshint esversion: 6 */
'use strict';

const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?");
const screenPrice = +prompt("Сколько будет стоить данная работа?", "укажите цену в рублях");
const adaptive = confirm("Нужен ли адаптив на сайте?");
const extraService1 = prompt("Какой дополнительный тип услуги вам нужен?");
const extraServicePrice1 = +prompt("Сколько это будет стоить?", "укажите цену в рублях");
const extraService2 = prompt("Какой дополнительный тип услуги вам нужен?");
const extraServicePrice2 = +prompt("Сколько это будет стоить?", "укажите цену в рублях");
const rollback = 10;


const showTypeOf = function (variable) {
  return variable, typeof variable;
};

const getAllServicePrices = function (price1, price2) {
  return price1 + price2;
};

function getFullPrice(screenPrice, allServicePrices) {
  return screenPrice + allServicePrices;
}

const getTitle = function (title) {
  title = title.trim();
  return title.charAt(0).toUpperCase() + title.substring(1).toLowerCase();
};

const getServicePercentPrices = function (price, rollback) {
  return Math.ceil(price - (price * (rollback / 100)));
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

const allServicePrices = getAllServicePrices(extraServicePrice1, extraServicePrice2);
const fullPrice = getFullPrice(screenPrice, allServicePrices);
const servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

console.log(showTypeOf(title));
console.log(showTypeOf(screenPrice));
console.log(showTypeOf(adaptive));
console.log(screens.split(","));
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);



