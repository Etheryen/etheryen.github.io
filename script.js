let body = document.querySelector('body');
let text = document.querySelector('.text');
let welcome = document.querySelector('.welcome');
let something = document.querySelector('.something');
let one = document.querySelector('#one');
let two = document.querySelector('#two');

text.style.fontFamily = 'omoriNormal';
let whatFrame = 1;

const mewoNextFrame = () => {
  if(whatFrame === 1) {
    one.style.display = 'none';
    two.style.display = 'block';
    whatFrame++;
  }
  else {
    one.style.display = 'block';
    two.style.display = 'none';
    whatFrame--;
  }
}

const fontChange = () => {
  let current = text.style.fontFamily;
  let whatFont =  current === 'omoriNormal' ? 'omoriCursed' : 'omoriNormal';
  text.style.fontFamily = whatFont;
}


setInterval(() => {
  mewoNextFrame();
}, 1200);

// glitchy version
// setInterval(() => {
//   let random = Math.floor(Math.random()*100);
//   if(random == 0) {
//     fontChange();
//     setTimeout(() => {
//       fontChange();
//     }, 200);
//   }
// }, 10);

// hover version
one.onmouseover = () => {
  fontChange();
}

one.onmouseout = () => {
  fontChange();
}

two.onmouseover = () => {
  fontChange();
}

two.onmouseout = () => {
  fontChange();
}


window.onmousedown = () => {
  something.style.display = 'block';
  body.style.backgroundColor = 'black';
  welcome.style.display = 'none';
};

window.onmouseup = () => {
  something.style.display = 'none';
  body.style.backgroundColor = '#fcfefc';
  welcome.style.display = 'flex';
};