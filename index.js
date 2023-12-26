/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.querySelector('#input-el');
const btn = document.querySelector('#convert-btn');
const lResult = document.querySelector('.length-result');
const vResult = document.querySelector('.volume-result');
const mResult = document.querySelector('.mass-result');

btn.addEventListener('click', () => {
  if (validateNum()) {
    let num = inputEl.value;
    let mTf = (num * 3.281).toFixed(2);
    let fTm = (num / 3.281).toFixed(2);
    let lTg = (num * 0.264).toFixed(2);
    let gTl = (num / 0.264).toFixed(2);
    let kTp = (num * 2.204).toFixed(2);
    let pTk = (num / 2.204).toFixed(2);
    lResult.textContent = `${num} meters = ${mTf} feet | ${num} feet = ${fTm} meters`;
    vResult.textContent = `${num} liters = ${lTg} gallons | ${num} gallons = ${gTl} liters`;
    mResult.textContent = `${num} kilos = ${kTp} pounds | ${num} pounds = ${pTk} kilos`;
    inputEl.value = '';
  }
});

function validateNum() {
  let z = inputEl.value;
  if (!z.match(/^\d+$/)) {
    alert(
      'Please only enter numeric characters only for your Age! (Allowed input:0-9)'
    );
    return false;
  }
  return true;
}
