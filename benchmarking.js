var fs = require('fs')
  , path = require('path');

(function sort_algo_benchmarks(){
  var sort_module
    , dir = './modules/sorting/'
    , STAGES = 3
    , MAX_RUNS = 100
    , ARRAY_SIZE = 6000
    , TIME_LIMIT = 10000 // 10000 ms = 10 secs
    , arrays = []
    , tmp_arr
    , i
    , j
    , stage;

  for(stage = 0; stage < STAGES; stage++, ARRAY_SIZE*=3) {
    arrays = [];
    for(j = 0; j < MAX_RUNS; j++) {
      tmp_arr = [];
      for(i = 0; i < ARRAY_SIZE; i++) {
        tmp_arr.push(Math.floor(Math.random()*1000000));
      }
      arrays.push(tmp_arr);
    }

    console.log("======================================================================");
    console.log("Stage: " + (stage+1));
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
        if(+(new Date())-start_time > TIME_LIMIT) {
          break;
        }
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

      if(i < MAX_RUNS) {
        // the sorting algo exceeds time limit
        console.log(module_path + '(TLE!!)\t' +
                    'rounds: ' + i + '\n\t' +
                    'total: ' + total_time + ' ms\t' +
                    'avg: ' + (total_time/i).toFixed(2) + ' ms\t' +
                    'best: ' + best_time + ' ms\t' +
                    'worst: ' + worst_time + ' ms.');
      } else {
        console.log(module_path + '\n\t' +
                    'total: ' + total_time + ' ms\t' +
                    'avg: ' + (total_time/MAX_RUNS).toFixed(2) + ' ms\t' +
                    'best: ' + best_time + ' ms\t' +
                    'worst: ' + worst_time + ' ms.');
      }
      console.log('\n');
    });
  }
})();
