
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
//Below, I created a constant named ul and li. First, it selected tag ul to be passed on the const ul. Secondly, the we created a li element on the const li
//const ul = document.querySelector('ul');
//const li = document.createElement('li');
//Creates an empty li
//Now after we created that, the ul which was selected by the query selector was appended with the newly created li.
//ul.append(li);
//Adding something inside the li
//const firstListItem = document.querySelector('.list-items')
//console.log(firstListItem.innerText);

//li.innerText = 'Cardo';
//modify atrributes and classes
//li.setAttribute('id', 'main-heading');
//li.removeAttribute('id');

//const title = document.querySelector('#main-heading');
//console.log(title.getAttribute('id'));

//add or remove class
//li.classList.add('list-items');
//li.classList.add('list-items);

//console.log(li.classList.contains('list-items'));

//Remove elements
//li.remove() //this removes 'Cardo' or the const li we made earlier

//Parent note traversal
//let ul = document.querySelector('ul')
//the .parentNode will find the parent of the element, in this example the 'ul'. Using it twice will return the parent of the parent of 'ul'
//console.log(ul.parentNode.parentNode)

//const html = document.getElement;
//console.log(html.parentNode);

let ul = document.querySelector('ul')
//This function finds the child nodes of the 'ul' element.
console.log(ul.childNodes);
console.log(ul.firstChild)
console.log(ul.lastChild)
//This is how we can style a child node.
ul.childNodes[1].style.backgroundColor = 'blue';

console.log(ul.previousSibling);
console.log(ul.nextSibling);
/*
LIST OF METHODS
-document.getElementById('idhere');
-document.getElementByClassName('classnamehere);
-document.querySelector(' ');
-document.querySelectorAll(' ');
-document.createElement('type of element here')
-.setAttribute('att', name of att)
-.removeAttribute('att')
-.classList.add('name of class')
-.classList.contains('name of class here')
*/