/*jshint esversion: 6 */
'use strict';

let title;
let screens;
let screenPrice;
let adaptive;
const rollback = 10;
let extraService1;
let extraService2;


const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt("Как называется ваш проект?", "Калькулятор верстки");
  screens = prompt("Какие типы экранов нужно разработать?", "Десктоп, мобильный");

  do {
    screenPrice = +prompt("Сколько будет стоить данная работа?", "укажите цену в рублях");
  } while (!isNumber(screenPrice));

  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {

  let sum = 0;
  let checkingSum;

  for (let i = 0; i < 2; i++) {

    if (i === 0) {
      extraService1 = prompt("Какой дополнительный тип услуги вам нужен?");
    } else if (i === 1) {
      extraService2 = prompt("Какой дополнительный тип услуги вам нужен?");
    }

    do {
      checkingSum = prompt("Сколько это будет стоить?", "укажите цену в рублях");
    } while (!isNumber(checkingSum) || checkingSum.trim() === "" || checkingSum === null);

    sum += +checkingSum;
    checkingSum = 0;
  }

  return sum;
};

const showTypeOf = function (variable) {
  return variable, typeof variable;
};

function getFullPrice() {
  return screenPrice + allServicePrices;
}

const getTitle = function () {
  return title.trim().charAt(0).toUpperCase() + title.trim().substring(1).toLowerCase();
};

const getServicePercentPrices = function () {
  return Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
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

asking();
const allServicePrices = getAllServicePrices();
const fullPrice = getFullPrice(screenPrice, allServicePrices);
const servicePercentPrice = getServicePercentPrices(fullPrice, rollback);
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.split(","));
console.log(servicePercentPrice);

console.log("Стоимость верстки экранов " + screenPrice + " рублей", "Стоимость разработки сайта " + fullPrice + " рублей");


