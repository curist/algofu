function merge(arr1, arr2) {
  var len1 = arr1.length
    , len2 = arr2.length
    , i1 = 0
    , i2 = 0
    , merged_arr = [];
  while(i1 < len1 || i2 < len2) {
    if(i1 < len1 && i2 < len2) {
      if(arr1[i1] < arr2[i2]) {
        merged_arr.push(arr1[i1++]);
      } else {
        merged_arr.push(arr2[i2++]);
      }
    } else if(i1 < len1) {
      merged_arr.push(arr1[i1++]);
    } else /* i2 < len2 */ {
      merged_arr.push(arr2[i2++]);
    }
  }
  return merged_arr;
}


module.exports.sort = function merge_sort(array) {
  var working_arr = array.map(function(e){return [e];});

  while(working_arr.length > 1) {
    working_arr.push(
      merge(working_arr.shift(), working_arr.shift())
    );
  }
  return working_arr[0];
};
