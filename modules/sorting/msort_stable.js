function merge(arr1, arr2) {
  var len1 = arr1.length
    , len2 = arr2.length
    , i1 = 0
    , i2 = 0
    , merged_arr = [];
  while(i1 < len1 && i2 < len2) {
    if(arr1[i1] < arr2[i2]) {
      merged_arr.push(arr1[i1++]);
    } else {
      merged_arr.push(arr2[i2++]);
    }
  }
  while(i1 < len1) {
    merged_arr.push(arr1[i1++]);
  }
  while(i2 < len2) {
    merged_arr.push(arr2[i2++]);
  }
  return merged_arr;
}


module.exports.sort = function merge_sort(array) {
  var middle = Math.floor(array.length / 2)
    , arr_left = array.slice(0, middle)
    , arr_right = array.slice(middle);

  if(array.length <= 1) {
    return array;
  }
  return merge(merge_sort(arr_left), merge_sort(arr_right));
};
