module.exports.qsort = function quick_sort(array) {
  var pivot = array[0]
    , smaller = []
    , larger = []
    , i
    , size = array.length;

  if(size <= 1) {
    return array;
  }

  for(i = 1; i < size; i++) {
    if(array[i] < pivot) {
      smaller.push(array[i]);
    } else {
      larger.push(array[i]);
    }
  }

  return quick_sort(smaller).concat(pivot, quick_sort(larger));
};

