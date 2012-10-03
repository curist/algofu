function quick_sort(array) {
  if(array.length <= 1) {
    return array;
  }
  var pivot_index = Math.floor(Math.random() * array.length)
    , pivot = array.splice(pivot_index, 1)[0]
    , smaller = []
    , larger = []
    , i = 0
    , size = array.length
    , tmp;

  while(i++ < size) {
    tmp = array.pop();
    if(tmp < pivot) {
      smaller.push(tmp);
    } else {
      larger.push(tmp);
    }
  }

  return quick_sort(smaller).concat(pivot, quick_sort(larger));
}

module.exports.sort = function (array){
  return quick_sort(array.slice(0));
};

