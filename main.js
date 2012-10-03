var fs = require('fs')
  , chai = require('chai');

(function test_sorting(){
  var dir = './modules/sorting/'
    , sort_module
    , arr = [55,73,98,66,1,45,95,69,36,68,6,41,16,64,76,12,95,94,47,13]
    , result;

  fs.readdir(dir, function(err, list){
    /* test each sort algo implementation */
    list.forEach(function(path){
      sort_module = require(dir + path);
    });
  });
})();

console.log('quick sort:');
result = qsort(arr);
console.log(result);

console.log('merge sort:');
result = msort(arr);
console.log(result);


