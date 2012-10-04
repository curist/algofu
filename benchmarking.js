var fs   = require('fs')
  , path = require('path')
  , _    = require('lodash')
  , clc  = require('cli-color')
  , good = clc.green.bold
  , bad  = clc.red.bold;

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
    , stage
    , propKey
    , arrays_for_output = {
        sort_modules: []
      , completed_rounds: []
      , total_times: []
      , avg_times: []
      , best_times: []
      , worst_times: []
      };

  function benchmark(module_path){
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

    arrays_for_output.sort_modules.push(module_path);
    arrays_for_output.completed_rounds.push(i);
    arrays_for_output.total_times.push(total_time);
    arrays_for_output.avg_times.push(parseFloat((total_time/i).toPrecision(5), 10));
    arrays_for_output.best_times.push(best_time);
    arrays_for_output.worst_times.push(worst_time);

  }

  function preParsingResult(){
    var min
      , max
      , propKey
      , arr;

    function colorizing(e){
      if(e === min){
        return good(e);
      } else if(e === max){
        return bad(e);
      }
      return e;
    }

    for(propKey in arrays_for_output){
      arr = arrays_for_output[propKey];
      min = _(arr).min();
      max = _(arr).max();

      arrays_for_output[propKey] = _(arr).map(colorizing);
    }
  }

  function outputResult(){
    var i
      , rounds
      , sort_module
      , total_time
      , avg_time
      , best_time
      , worst_time;

    preParsingResult();

    for(i = 0; i < arrays_for_output.sort_modules.length; i++){
      rounds = arrays_for_output.completed_rounds[i];
      sort_module = arrays_for_output.sort_modules[i];
      total_time = arrays_for_output.total_times[i];
      avg_time = arrays_for_output.avg_times[i];
      best_time = arrays_for_output.best_times[i];
      worst_time = arrays_for_output.worst_times[i];

      if(rounds < MAX_RUNS) {
        // the sorting algo exceeds time limit
        console.log(sort_module + '(TLE!!)\t' +
                    'rounds: ' + rounds);
      } else {
        console.log(sort_module);
      }

      console.log('\t'+
                  'total: ' + total_time + ' ms\t' +
                  'avg: ' + avg_time + ' ms\t' +
                  'best: ' + best_time + ' ms\t' +
                  'worst: ' + worst_time + ' ms.');

      console.log();
    }
  }

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

    for(propKey in arrays_for_output){
      arrays_for_output[propKey] = [];
    }

    fs.readdirSync(path.join(__dirname, dir)).sort().forEach(benchmark);
    outputResult();
  }
})();

