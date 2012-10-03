function merge(arr1, arr2) {
  var len1 = arr1.length
    , len2 = arr2.length
    , i1 = 0
    , i2 = 0
    , merged_arr = [];

  while(i1 < len1 || i2 < len2) {
    if(i1 < len1 && i2 < len2) {
      if(arr1[i1] < arr2[i2]) {
        merged_arr.push(arr1[i1]);
        i1++;
      } else {
        merged_arr.push(arr2[i2]);
        i2++;
      }
    } else if(i1 < len1) {
      merged_arr.push(arr1[i1]);
      i1++;
    } else /* i2 < len2 */ {
      merged_arr.push(arr2[i2]);
      i2++;
    }
  }
  return merged_arr;
}
module.exports.sort = function merge_sort(array) {
  return array;
};
