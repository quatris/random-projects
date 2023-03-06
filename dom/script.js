const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// p element
const p = document.createElement('p');
p.textContent = "Hey I'm red!";
p.style.color = 'red';

container.appendChild(p);

// h3 element
const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = 'blue';

container.appendChild(h3);

// div element
const div = document.createElement('div');
div.setAttribute('id', 'testContent');
div.style.cssText = 'border: solid 0.3em; border-color: black; background: pink;'

container.appendChild(div);

// h1 inside div element
const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";

testContent.appendChild(h1);

// p element inside div element
const p1 = document.createElement('p');
p1.textContent = "ME TOO!";

testContent.appendChild(p1);

// button
const btn = document.querySelector('#btn');
btn.addEventListener('click', alertFunction);

// method 3 button
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});

function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

  btn.addEventListener('click', function (e) {
    console.log(e);
  });

  btn.addEventListener('click', function (e) {
    console.log(e.target);
  });

  btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });


  // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});