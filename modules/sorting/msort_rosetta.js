// from: http://rosettacode.org/wiki/Sorting_algorithms/Merge_sort#JavaScript
function merge(left,right,arr){
	var a=0;
	while(left.length&&right.length)
		arr[a++]=right[0]<left[0]?right.shift():left.shift();
	while(left.length)arr[a++]=left.shift();
	while(right.length)arr[a++]=right.shift();
}
function mSort(arr,tmp,l){
	if(l==1)return;
    var m=Math.floor(l/2),
		tmp_l=tmp.slice(0,m),
		tmp_r=tmp.slice(m);
	mSort(tmp_l,arr.slice(0,m),m);
	mSort(tmp_r,arr.slice(m),l-m);
	merge(tmp_l,tmp_r,arr);
}
module.exports.sort = function(arr){
  var working_arr = arr.slice();
  mSort(working_arr, arr.slice(), arr.length);
  return working_arr;
};

