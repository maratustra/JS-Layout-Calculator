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
const fullPrice = screenPrice + extraServicePrice1 + extraServicePrice2;
const servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
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

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(servicePercentPrice);
console.log(getRollbackMessage(fullPrice));
