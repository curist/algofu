var fs = require('fs')
  , path = require('path');

(function sort_algo_benchmarks(){
  var sort_module
    , dir = './modules/sorting/'
    , MAX_RUNS = 100
    , ARRAY_SIZE = 50000
    , arrays = []
    , tmp_arr
    , i
    , j;

  for(j = 0; j < MAX_RUNS; j++) {
    tmp_arr = [];
    for(i = 0; i < ARRAY_SIZE; i++) {
      tmp_arr.push(Math.floor(Math.random()*1000000));
    }
    arrays.push(tmp_arr);
  }

  console.log("Rounds: " + MAX_RUNS);
  console.log("Array size: " +ARRAY_SIZE);
  console.log();

  fs.readdirSync(path.join(__dirname, dir)).sort().forEach(function(module_path){
    var start_time = +(new Date())
      , total_time
      , current_start_time
      , current_total_time
      , best_time = Infinity
      , worst_time = 0;

    sort_module = require(dir + module_path);
    for(i = 0; i < MAX_RUNS; i++) {
      current_start_time = +(new Date());
      sort_module.sort(arrays[i]);
      current_total_time = +(new Date()) - current_start_time;
      if(current_total_time < best_time) {
        best_time = current_total_time;
      }
      if(current_total_time > worst_time) {
        worst_time = current_total_time;
      }
    }
    total_time = +(new Date()) - start_time;
    console.log(module_path + '\n\t' +
                'total: ' + total_time + ' ms\t' +
                'avg: ' + total_time/MAX_RUNS + ' ms\t' +
                'best: ' + best_time + ' ms\t' +
                'worst: ' + worst_time + ' ms.');

    console.log('\n');
  });
})();
