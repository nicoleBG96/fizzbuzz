var assert = require('assert');
var expect = require('chai').expect;
var fizzbuzz = require('../fizzbuzz')

describe('Fizz function', function() {
    it('returns true given 3', function() {
      expect(Fizz(3)).to.equal(true);
    });
    it('returns true given 7', function() {
      expect(Fizz(7)).to.equal(false);
    });
  });

  describe('Buzz function', function() {
    it('returns true given 5', function() {
      expect(Buzz(5)).to.equal(true);
    });
    it('returns true given 9', function() {
      expect(Buzz(9)).to.equal(false);
    });
  });

  describe('FizzBuzz function', function() {
    it('returns true given 15', function() {
      expect(FizzBuzz(15)).to.equal(true);
    });
  });