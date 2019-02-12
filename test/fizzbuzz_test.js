var assert = require('assert');
var expect = require('chai').expect;
var fizzbuzz = require('../fizzbuzz')

describe('Fizz function', function() {
    it('returns true given 3', function() {
      expect(Fizz(3)).to.equal(true);
    });
    it ('returns false given 7', function(){
        expect(Fizz(7)).to.equal(false);
    });
  });

describe('Buzz function', function() {
    it('returns true given 3', function() {
      expect(Buzz(5)).to.equal(true);
    });
    it ('returns false given 7', function(){
        expect(Buzz(7)).to.equal(false);
    });
  });