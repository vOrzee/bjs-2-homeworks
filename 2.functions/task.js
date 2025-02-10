function getArrayParams(...arr) {

  if (arr.length === 0) return { min: null, max: null, avg: null };
  const sum = arr.reduce((acc, num) => acc + num, 0);

  return { 
    min: Math.min(...arr), 
    max: Math.max(...arr), 
    avg: Number((sum / arr.length).toFixed(2)) 
  };
}

function summElementsWorker(...arr) {

  if (arr.length === 0) return 0;

  return arr.reduce((acc, num) => acc + num, 0);
}

function differenceMaxMinWorker(...arr) {

  if (arr.length === 0) return 0;

  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {

  if (arr.length === 0) return 0;
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {

  const arrEvenElements = arr.filter(element => element % 2 === 0);
  if (arr.length === 0) return 0;
  const sum = arrEvenElements.reduce((acc, num) => acc + num, 0);

  return Number((sum / arrEvenElements.length).toFixed(2));
}

function makeWork (arrOfArr, func) {

  if (arrOfArr.length === 0) return 0;
  let maxWorkerResult = -Infinity;

  for (let arr of arrOfArr) {
    maxWorkerResult = Math.max(maxWorkerResult, func(...arr));
  }

  return maxWorkerResult;
}


