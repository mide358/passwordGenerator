// let one = document.getElementById('one').value;
let tes = [];

let passwordsEl = document.querySelectorAll('.password');
let genbtn = document.getElementById('gen-btn');
let copybtn = document.getElementById('copy-btn');
// let passwordLength = document.getElementById('len').value;

function passwordLength() {
  return document.getElementById('len').value;
}

let arr = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'j',
  'y',
  '!',
  '?',
  '*',
  '<',
  '#',
  '$',
  '_',
  '%',
];

// let randomNum = Math.floor(Math.random() * 14);

function getRandom() {
  let len = passwordLength();
  let password = '';
  for (let i = 0; i < len; i++) {
    if (len >= 6 && len <= 20) {
      let randomNum = Math.floor(Math.random() * arr.length);
      // console.log(arr[randomNum]);

      password += arr[randomNum];
      document.getElementById('error').textContent = ``;
    } else {
      document.getElementById(
        'error'
      ).textContent = `please input a number between 8 and 20 `;
    }
  }
  return password;
}

function generate() {
  let passwords = [];
  for (let i = 0; i < passwordsEl.length; i++) {
    let pass = getRandom();
    passwords.push(pass);
  }

  for (let i = 0; i < passwords.length; i++) {
    document.querySelectorAll('.password')[i].value = passwords[i];
  }
}

genbtn.addEventListener('click', generate);

function copy() {
  for (let i = 0; i < passwordsEl.length; i++) {
    passwordsEl[i].select();

    /* Copy the text inside the text field */

    navigator.clipboard.writeText(passwordsEl[i].value);
    if (passwordsEl[i].value === '') {
      return;
    } else {
      alert('Copied the text: ' + passwordsEl[i].value);
    }
    /* Alert the copied text */
  }
}

copybtn.addEventListener('click', copy);
