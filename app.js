
/*
//DOM Manipulation

//getElementById()
const title = document.getElementById('main-heading');
console.log(title)

//GetElementByClassName()

const listItemClass = document.getElementsByClassName('list-items')
console.log(listItemClass);

//GetElementByTagName()
const listItem = document.getElementsByTagName('li');
console.log(listItem);

//querySelector()
const container = document.querySelector('div');
console.log(container);

//querySelectorAll()
const allContainer = document.querySelectorAll('div');
console.log(allContainer);
*/

//Styling property using jquery
//const title = document.querySelectorAll('list-items');


//Create Element

const ul = document.querySelector('ul');
const li = document.createElement('li');
//Creates an empty li
ul.append(li);
//Adding something inside the li
const firstListItem = document.querySelector('.list-items')
console.log(firstListItem.innerText);

li.innerText = 'Cardo';
//modify atrributes and classes
li.setAttribute('id', 'main-heading');
li.removeAttribute('id');

const title = document.querySelector('#main-heading');
console.log(title.getAttribute('id'));

//add or remove class
li.classList.add('list-items');
//li.classList.add('list-items);

console.log(li.classList.contains('list-items'));

//Remove elements
li.remove();
li.remove();