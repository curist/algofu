var fs = require('fs')
  , path = require('path')
  , _ = require('lodash')
  , chai = require('chai')
  , expect = chai.expect;

chai.Assertion.includeStack = true;
Error.stackTraceLimit = 3;


describe('Algorithm implementing', function(){
  describe('Sorting', function(){
    var sort_module
      , dir = '../modules/sorting/'
      , arr = [55,73,98,66,1,45,95,69,36,68,6,41,16,64,76,12,95,94,47,13]
      , arr_backup = arr.slice(0)
      , right_answer = arr.slice(0).sort(function(a,b){return (a-b);})
      , result;

    beforeEach(function(){
      arr = [55,73,98,66,1,45,95,69,36,68,6,41,16,64,76,12,95,94,47,13];
    });

    fs.readdirSync(path.join(__dirname, dir)).forEach(function(path){
      it('should derive the correct answer('+path+')', function(){
        sort_module = require(dir + path);
        result = sort_module.sort(arr);
        expect(_.isEqual(result, right_answer)).to.equal(true);
      });
    });

    fs.readdirSync(path.join(__dirname, dir)).forEach(function(path){
      it('should not change the original array('+path+')', function(){
        sort_module = require(dir + path);
        result = sort_module.sort(arr);
        expect(_.isEqual(arr, arr_backup)).to.equal(true);
      });
    });
  });
});

