// scripts.js

var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var element = document.createElement('li');
	var listElements = document.getElementsByTagName('li').length;
	element.innerHTML = 'item' + listElements;

	list.appendChild(element);
});


