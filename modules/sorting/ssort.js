module.exports.sort = function selection_sort(array){
  var i
    , j
    , min
    , min_index
    , tmp
    , len = array.length
    , working_arr = array.slice();

  for(i = 0; i < len-1; i++) {
    min = Infinity;
    for(j = i; j < len; j++) {
      if(working_arr[j] < min) {
        min = working_arr[j];
        min_index = j;
      }
    }
    tmp = working_arr[i];
    working_arr[i] = working_arr[min_index];
    working_arr[min_index] = tmp;
  }
  return working_arr;
};

