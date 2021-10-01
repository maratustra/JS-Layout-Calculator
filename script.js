/*jshint esversion: 6 */

const title = "Верстка сайта";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 500;
let rollback = 30;
let fullPrice = 10000;
let adaptive = true;

// Вывести в консоль тип данных значений переменных title, fullPrice, adaptive;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

// Вывести в консоль длину строки screens

console.log(screens.length);

// Вывести в консоль “Стоимость верстки экранов (screenPrice) рублей/ долларов/гривен/юани” 
// и “Стоимость разработки сайта (fullPrice) рублей/ долларов/гривен/юани”

console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта " + fullPrice + " рублей");

// Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль

console.log(screens.toLowerCase().split(''));

// Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))

console.log("Процент отката посреднику за работу " + fullPrice * (rollback / 100));
