"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d === 0) {
    arr[0] = -b / (2 * a);
  } else if (d > 0) {
    let sqrt = Math.sqrt(d);
    arr[0] = (-b + sqrt) / (2 * a);
    arr[1] = (-b - sqrt) / (2 * a);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthKoef = percent / 100 / 12;
  const bodyAmounth = amount - contribution;
  const monthPayment = bodyAmounth * (monthKoef + (monthKoef / (((1 + monthKoef) ** countMonths) - 1)));
  return Number((monthPayment * countMonths).toFixed(2));
}