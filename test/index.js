'use strict';
window.addEventListener('load', () => {
console.log("index.js loaded");

let h1 = document.createElement('h1');
let h2 = document.createElement('h2');
let h3 = document.createElement('h3');
let h4 = document.createElement('h4');
let h5 = document.createElement('h5');
let h6 = document.createElement('h6');
let msg = document.createTextNode(' 這是 <h1> 的⽂字訊息 ');
let msg2 = document.createTextNode(' 這是 <h2> 的⽂字訊息 ');
let msg3 = document.createTextNode(' 這是 <h3> 的⽂字訊息 ');
let msg4 = document.createTextNode(' 這是 <h4> 的⽂字訊息 ');
let msg5 = document.createTextNode(' 這是 <h5> 的⽂字訊息 ');
let msg6 = document.createTextNode(' 這是 <h6> 的⽂字訊息 ');

h1.appendChild(msg);
h2.appendChild(msg2);
h3.appendChild(msg3);
h4.appendChild(msg4);
h5.appendChild(msg5);
h6.appendChild(msg6);

document.body.appendChild(h1);
document.body.appendChild(h2);
document.body.appendChild(h3);
document.body.appendChild(h4);
document.body.appendChild(h5);
document.body.appendChild(h6);
});
