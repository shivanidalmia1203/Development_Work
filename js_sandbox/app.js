// // // // // let val;

// // // // // val = document;
// // // // // val = document.all;
// // // // // val = document.all[02];
// // // // // val = document.all.length;
// // // // // val = document.head;
// // // // // val = document.doctype;
// // // // // val = document.domain;
// // // // // val = document.URL;
// // // // // val = document.characterSet;
// // // // // val = document.contentType;
// // // // // val = document.forms;
// // // // // val = document.scripts;
// // // // // console.log(val);


// // // // // // DOM means DOCUMENT OBJECT MODEL
// // // // // in this jQuery is not used
// // // // // DOM Selector for single element
// // // // console.log(document.getElementById('task-title'));
// // // // console.log(document.getElementById('task-title').id);
// // // // console.log(document.getElementById('task-title').style.background = '#333');
// // // // console.log(document.getElementById('task-title').style.color = '#fff');
// // // // console.log(document.getElementById('task-title').style.padding = '5px');
// // // // //console.log(document.getElementById('task-title').style.display = 'none');
// // // // // Change Content
// // // // console.log(document.getElementById('task-title').textContent = 'To-do Task List');
// // // // console.log(document.getElementById('task-title').innerText = 'My tasks');
// // // // console.log(document.getElementById('task-title').innerHTML = '<span style="color:red">To-do Task List</span>');

// // // // /// Query Selector
// // // // console.log(document.querySelector('#task-title'));
// // // // console.log(document.querySelector('#task-title'));
// // // // console.log(document.querySelector('h5'));
// // // // console.log(document.querySelector('li').style.color = 'red');
// // // // console.log(document.querySelector('ul li').style.color = 'blue');
// // // // console.log(document.querySelector('li:last-child').style.color = 'red');
// // // // console.log(document.querySelector('li:nth-child(3)').style.color = 'purple');
// // // // console.log(document.querySelector('li:nth-child(4)').textContent = 'Hello'); 
// // // // console.log(document.querySelector('li:nth-child(odd)').style.background = '#ccc'); // bcz single element selector
// // // // console.log(document.querySelector('li:nth-child(even)').style.background = '#f4f4f4');

// // // // DOM Selector for multiple element
// // // const items =document.getElementsByClassName('collection-item');
// // // console.log(items);
// // // console.log(items[0]);
// // // console.log(items[0].style.color = 'red');
// // // console.log(items[2].textContent = 'Heya');
// // // const listItems = document.querySelector('ul').getElementsByClassName('colllection-item');
// // // console.log(listItems);
// // const lis = document.getElementsByTagName('li');
// // console.log(lis);

// const items = document.querySelectorAll('ul.collection li.collection-item');
// //console.log(items);
// items.forEach(function(item,index){
//   item.textContent = `${index}: Hello`;
// });
// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');
// liOdd.forEach(function(li,index){
//   li.style.background = `#ccc`;
// });
// liEven.forEach(function(li,index){
//   li.style.background = 'red';
//   li.textContent = "Hey!!";
// });
// console.log(items);










let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');
val = listItem;
val = list;
val = list.childNodes;
console.log(val);

















