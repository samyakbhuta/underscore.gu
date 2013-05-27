var assert = require('assert');
var _gu = require('../lib/underscore.gu');

describe('underscore.gu', function(){
  describe('#isInGUCRange()', function(){
    it('should return false when character is out of Gujarati Unicode Character range', function(){
      assert.equal(false,_gu.isInGUCRange('a'));
      assert.equal(false,_gu.isInGUCRange('औ'));
      assert.equal(false,_gu.isInGUCRange('ଆ'));
    });
    it('should return true when character is in Gujarati Unicode Character range', function(){
      assert.equal(true,_gu.isInGUCRange('઀'));
      assert.equal(true,_gu.isInGUCRange('઄'));
      assert.equal(true,_gu.isInGUCRange('ં'));
      assert.equal(true,_gu.isInGUCRange('અ'));
      assert.equal(true,_gu.isInGUCRange('ક'));
      assert.equal(true,_gu.isInGUCRange('સ'));
      assert.equal(true,_gu.isInGUCRange('ય'));
      assert.equal(true,_gu.isInGUCRange('઩'));
      assert.equal(true,_gu.isInGUCRange('ૃ'));
      assert.equal(true,_gu.isInGUCRange('૿'));
    });
  });

  describe('#isValidGUC()', function(){
    it('should return false when character is reserved character in Gujarati Unicode Character range', function(){
      assert.equal(false,_gu.isValidGUC('઀'));
      assert.equal(false,_gu.isValidGUC('઄'));
      assert.equal(false,_gu.isValidGUC('઩'));
      assert.equal(false,_gu.isValidGUC('૿'));
    });
    it('should return true when character is not reserved in Gujarati Unicode Character range', function(){
      assert.equal(true,_gu.isValidGUC('ં'));
      assert.equal(true,_gu.isValidGUC('અ'));
      assert.equal(true,_gu.isValidGUC('ક'));
      assert.equal(true,_gu.isValidGUC('સ'));
      assert.equal(true,_gu.isValidGUC('ય'));
      assert.equal(true,_gu.isValidGUC('ૃ'));
    });
  });

  describe('#isVowel()', function(){
    it('should return false when character is not a vowel', function(){
      assert.equal(false,_gu.isVowel('ં'));
      assert.equal(false,_gu.isVowel('ક'));
      assert.equal(false,_gu.isVowel('સ'));
      assert.equal(false,_gu.isVowel('ય'));
    });
    it('should return true when character is a vowel', function(){
      assert.equal(true,_gu.isVowel('અ'));
      assert.equal(true,_gu.isVowel('ૃ'));
    });
  });

  describe('#isConsonant()', function(){
    it('should return false when character is not a consonant', function(){
      assert.equal(false,_gu.isConsonant('અ'));
      assert.equal(false,_gu.isConsonant('ૃ'));
    });
    it('should return true when character is a consonant', function(){
      assert.equal(true,_gu.isConsonant('ં'));
      assert.equal(true,_gu.isConsonant('ક'));
      assert.equal(true,_gu.isConsonant('સ'));
      assert.equal(true,_gu.isConsonant('ય'));
    });
  });

  describe('#isDipthong()', function(){
    it('should return false when character is not a dipthong', function(){
      assert.equal(false,_gu.isDipthong('ં'));
      assert.equal(false,_gu.isDipthong('ક'));
      assert.equal(false,_gu.isDipthong('સ'));
      assert.equal(false,_gu.isDipthong('અ'));
      assert.equal(false,_gu.isDipthong('ૃ'));
    });
    it('should return true when character is a dipthong', function(){
      assert.equal(true,_gu.isDipthong('ય'));
    });
  });


  describe('#isPlosive()', function(){
    it('should return false when character is not a plosive', function(){
      assert.equal(false,_gu.isPlosive('અ'));
      assert.equal(false,_gu.isPlosive('ય'));
      assert.equal(false,_gu.isPlosive('ૃ'));
      assert.equal(false,_gu.isPlosive('સ'));
    });
    it('should return true when character is a plosive', function(){
      assert.equal(true,_gu.isPlosive('ં'));
      assert.equal(true,_gu.isPlosive('ક'));
    });
  });

  describe('#isFricative()', function(){
    it('should return false when character is not a plosive', function(){
      assert.equal(false,_gu.isFricative('અ'));
      assert.equal(false,_gu.isFricative('ય'));
      assert.equal(false,_gu.isFricative('ૃ'));
      assert.equal(false,_gu.isFricative('ં'));
      assert.equal(false,_gu.isFricative('ક'));
    });
    it('should return true when character is a plosive', function(){
      assert.equal(true,_gu.isFricative('સ'));
    });
  });

});
