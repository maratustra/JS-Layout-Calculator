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

const fullPrice = screenPrice + extraServicePrice1 + extraServicePrice2;

const servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
console.log(servicePercentPrice);

if (fullPrice >= 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice < 30000 || fullPrice >= 15000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice < 15000 || fullPrice > 0) {
  console.log("Скидка не предусмотрена");
} else {
  console.log("Что-то пошло не так");
}

