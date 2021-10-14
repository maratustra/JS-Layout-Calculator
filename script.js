const allBooks = document.querySelectorAll('.book');

allBooks[1].insertAdjacentElement('afterend', allBooks[0]);
allBooks[3].insertAdjacentElement('beforebegin', allBooks[4]);
allBooks[5].insertAdjacentElement('afterend', allBooks[2]);


let body = document.querySelector('body');
body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';


const links = document.querySelectorAll('h2 > a');
links[2].textContent = "Книга 3. this и Прототипы Объектов";


const ad = document.querySelector('.adv');
ad.remove();


const listsBook2 = allBooks[0].querySelectorAll('li');
listsBook2[10].before(listsBook2[2]);
listsBook2[9].before(listsBook2[7]);
listsBook2[7].before(listsBook2[4], listsBook2[5]);


const listsBook5 = allBooks[5].querySelectorAll('li');
listsBook5[4].after(listsBook5[2]);
listsBook5[1].after(listsBook5[9]);
listsBook5[7].after(listsBook5[5]);


const listsBook6 = allBooks[2].querySelectorAll('li');
listsBook6[8].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');