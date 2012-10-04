var Heap = require('../tree/heap').Heap
  , heap = new Heap();

module.exports.sort = function heap_sort(array){
  var i
    , len = array.length
    , working_arr = []
    , num;

  for(i = 0; i < len; i++){
    heap.push(array[i]);
  }

  for(i = 0; i < len; i++){
    num = heap.pop();
    working_arr.push(num);
  }
  return working_arr;
};

