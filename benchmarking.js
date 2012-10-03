var fs = require('fs')
  , path = require('path');

(function sort_algo_benchmarks(){
  var sort_module
    , dir = './modules/sorting/'
    , MAX_RUNS = 3000
    , orig_arr = []
    , i;

  for(i = 0; i < 1337; i++) {
    orig_arr.push(Math.floor(Math.random()*10000));
  }

  fs.readdirSync(path.join(__dirname, dir)).forEach(function(module_path){
    var start_time = +(new Date())
      , total_time;

    sort_module = require(dir + module_path);
    for(i = 0; i < MAX_RUNS; i++) {
      sort_module.sort(orig_arr);
    }
    total_time = +(new Date()) - start_time;
    console.log(module_path + ' used ' + total_time + ' ms, avg: ' + total_time/MAX_RUNS + ' ms.');
  });
})();
