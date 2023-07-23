// task 1
const h1 = document.getElementsByTagName('h1');
const text = document.getElementsByClassName('text');
const listItem3 = document.getElementById('listItem3');
const list_item = document.getElementsByClassName('list-item');

// task 2
console.log(text[0].innerHTML);
h1[0].innerHTML = 'Title level 1';
// console.log(h1[0].innerHTML);
listItem3.innerHTML = '<strong>List item 3</strong>';

// task 3
const a = document.querySelector("a");
a.setAttribute('target', "_blank");
a.setAttribute('rel', "noopener");
a.removeAttribute('role');
a.setAttribute('href', 'something')

// task 4
const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
const img = new Image(200, 200);
img.src = imageUrl;
h1[0].appendChild(img);
const body = document.getElementsByTagName('body');
const imgClone = img.cloneNode();
body[0].appendChild(imgClone);

// task 5
const links = [

    'https://learn.javascript.ru',
    
    'https://learn.javascript.ru/searching-elements-dom',
    
    'https://learn.javascript.ru/structure',
    
    '#test'
    
    ]

for (n = 0; n < links.length; n++) {
    const br = document.createElement('br');
    body[0].appendChild(br);
    const aTag = document.createElement('a');
    aTag.href = links[n];
    console.log('Link ' + ' ' + [n + 1] + ': ' + aTag.href);
    aTag.innerHTML = `Link ${n+1} ${aTag.href} `;
    aTag.className = 'link';
    body[0].appendChild(aTag);
}


// task 6
const button1 = document.createElement('button');
button1.setAttribute('type', 'button');
button1.textContent = 'Нажать';
button1.addEventListener('click', () => {
    alert('Вы нажали на кнопку');
  });
document.body.append(button1);

const button2 = document.createElement('button');
button2.style.backgroundColor = 'blue'; 
button2.textContent = 'Навести';
button2.addEventListener('mouseover', () => {
    alert('Вы навели на кнопку')
  });
document.body.append(button2);

const button3 = document.createElement('button');
button3.setAttribute('type', 'button'); 
button3.textContent = 'Нажать правой кнопкой мыши';
button3.addEventListener('contextmenu', () => {
    alert('Вы нажали правой кнопкой мыши')
  });
document.body.append(button3);

//task 7
const button4 = document.createElement('button');
button4.textContent = 'Счетчик';
let num = 0;
function timer () {
    num = num + 1;
    console.log(num);
    removeTimer();
    }
button4.addEventListener('click', timer);
function removeTimer () {
    if (num >= 5) {
        button4.removeEventListener('click', timer);
    }
}

document.body.append(button4);
