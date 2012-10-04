module.exports.Heap = function(){
  var _heap = []
    , that = {};

  function swap(i,j){
    var tmp;
    tmp = _heap[i];
    _heap[i] = _heap[j];
    _heap[j] = tmp;
  }

  that.push = function push(n){
    var index = _heap.length
      , parent_index = Math.floor((index-1)/2)
      , parent_value = _heap[parent_index];

    _heap.push(n);

    while(n < parent_value) {
      swap(index, parent_index);
      index = parent_index;
      parent_index = Math.floor((index-1)/2);
      parent_value = _heap[parent_index];
    }
  };

  that.pop = function pop(){
    var min
      , val
      , index
      , children_index
      , children_value
      , len = _heap.length - 1;

    swap(0, _heap.length - 1);
    min = _heap.pop();

    index = 0;
    val = _heap[index];

    while(index < len){
      children_index = index * 2 + 1;
      children_value = _heap[children_index] || Infinity;

      // if right hand side child is smaller
      if((_heap[children_index+1]||Infinity) < children_value) {
        children_index += 1;
      }
      swap(index, children_index);
      index = children_index;
    }
    return min;
  };

  return that;
};
