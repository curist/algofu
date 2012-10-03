var _ = require('lodash')
  , chai = require('chai')
  , expect = chai.expect;

chai.Assertion.includeStack = true;
Error.stackTraceLimit = 3;


describe('Algorithm implementing', function(){
  describe('Sorting', function(){
    var sort_module
      , dir = '../modules/sorting/'
      , arr = [55,73,98,66,1,45,95,69,36,68,6,41,16,64,76,12,95,94,47,13]
      , right_answer = _.clone(arr).sort(function(a,b){return (a-b);})
      , result;

    it('should derive the correct answer(quick sort)', function(){
      sort_module = require(dir + 'qsort');
      expect(_.isEqual(sort_module.sort(arr), right_answer)).to.equal(true);
    });

    it('should derive the correct answer(merge sort)', function(){
      sort_module = require(dir + 'msort');
      expect(_.isEqual(sort_module.sort(arr), right_answer)).to.equal(true);
    });
  });
});

