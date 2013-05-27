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
});
