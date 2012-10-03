var qsort = require('./modules/qsort').qsort
  , msort = require('./modules/msort').msort
  , result
  , arr = [55,73,98,66,1,45,95,69,36,68,6,41,16,64,76,12,95,94,47,13];

console.log('quick sort:');
result = qsort(arr);
console.log(result);

console.log('merge sort:');
result = msort(arr);
console.log(result);


