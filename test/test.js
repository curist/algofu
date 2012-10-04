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
      it('should not change the original array('+path+')', function(){
        sort_module = require(dir + path);
        result = sort_module.sort(arr);
        expect(_.isEqual(arr, arr_backup)).to.equal(true);
      });
    });

    fs.readdirSync(path.join(__dirname, dir)).forEach(function(path){
      it('should derive the correct answer('+path+')', function(){
        sort_module = require(dir + path);
        result = sort_module.sort(arr);
        expect(_.isEqual(result, right_answer)).to.equal(true);
      });
    });

  });

  describe('Tree', function(){
    var dir = '../modules/tree/';

    describe('Heap(min)', function(){
      var Heap = require(dir+'heap').Heap
        , heap
        , elements_to_push = [];

      beforeEach(function(){
        var i;

        heap = new Heap();
        elements_to_push = [];

        for(i = 0; i < 30; i++){
          elements_to_push[i] = Math.floor(Math.random()*10000);
        }

      });

      it('should let the smallest element pushed to root', function(){
        heap.push(2);
        heap.push(3);
        heap.push(1);
        expect(heap.pop()).to.equal(1);
      });

      it('should always pops out the minimun element', function(){
        var i;
        for(i in elements_to_push){
          heap.push(elements_to_push[i]);
        }
        elements_to_push.sort(function(a,b){return a-b;});

        // test serveral times..
        for(i = 0; i < 5; i++){
          expect(heap.pop()).to.equal(elements_to_push.shift());
        }
      });
    });
  });
});

