module.exports.sort = function bubble_sort(array){
  var i
    , j
    , len = array.length
    , tmp
    , working_arr = array.slice();

  for(i = len-1; i > 0; i--) {
    for(j = 0; j < i; j++) {
      if(working_arr[j] > working_arr[j+1]) {
        tmp = working_arr[j];
        working_arr[j] = working_arr[j+1];
        working_arr[j+1] = tmp;
      }
    }
  }
  return working_arr;
};
