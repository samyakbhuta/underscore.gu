// Module Setup
// ------------
var _gu = {


// Checkers
// --------

  // Checks if `aChar` is in Gujarati Unicode Character (GUC) range.
  isInGUCRange : function (aChar) {
    if ('\u0A80' <= aChar && aChar <= '\u0AFF') {
      return true;
    } else {
      return false;
    }
  },


  // Checks if `aChar` holds any significance and is not any of the reserved character.
  // e.g. '\u0A80' or '\u0A84' though falls in GUC range, doesn't have any significance or value.
  // Complete list is as follows.

  // * '\u0A80'
  // * '\u0A84'
  // * '\u0A8E'
  // * '\u0A92'
  // * '\u0AA9'
  // * '\u0AB1'
  // * '\u0AB4'
  // * '\u0ABA'
  // * '\u0ABB'
  // * '\u0AC6'
  // * '\u0ACA'
  // * '\u0ACE'
  // * '\u0ACF'
  // * '\u0AD1' to '\u0ADF'
  // * '\u0AE4' to '\u0AE5'
  // * '\u0AF2' to '\u0AFF'
  isValidGUC : function (aChar) {
    if (this.isInGUCRange(aChar)) {
      if (aChar === '\u0A80' || aChar === '\u0A84' || aChar === '\u0A8E' || aChar === '\u0A92' ||
          aChar === '\u0AA9' || aChar === '\u0AB1' || aChar === '\u0AB4' || aChar === '\u0ABA' ||
          aChar === '\u0ABB' || aChar === '\u0AC6' || aChar === '\u0ACA' || aChar === '\u0ACE' ||
          aChar === '\u0ACF' ||
          ('\u0AD1' <= aChar && aChar <= '\u0ADF') ||
          ('\u0AE4' <= aChar && aChar <= '\u0AE5') ||
          ('\u0AF2' <= aChar && aChar <= '\u0AFF')) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  },

  // Checks if `aChar` is a vowel character.
  // For this check to pass, a character need to be either a explicit vowel character or a vowel sign character signifying a vowel.
  isVowel : function (aChar) {
    if (this.isValidGUC(aChar)) {
      if (('\u0A85' <= aChar && aChar <= '\u0A94') || ('\u0ABD' <= aChar && aChar <= '\u0ACC')) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },

  // Checks if `aChar` is a consonant character.
  // For this check to pass, a character need to be a consonant or Anusvara which represents a consonant.
  // Note : Dipthongs are considered consonants here.
  isConsonant : function (aChar) {
    if (this.isValidGUC(aChar)) {
      if (('\u0A95' <= aChar && aChar <= '\u0AB9') || (aChar === '\u0A82')) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },

  // Checks if `aChar` is any of the dipthongs.
  isDipthong : function (aChar) {
    if (this.isValidGUC(aChar)) {
      if (aChar === '\u0AAF' || aChar === '\u0AB2' || aChar === '\u0AB3' ||  aChar === '\u0AB5') {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },

  // Checks if `aChar` is any of the plosives.
  isPlosive : function (aChar) {
    if (this.isValidGUC(aChar)) {
      if (('\u0A95' <= aChar && aChar <= '\u0AAE') || (aChar === '\u0A82')) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },

  // Checks if `aChar` is any of the fricatives.
  isFricative : function (aChar) {
    if (this.isValidGUC(aChar)) {
      if ('\u0AB6' <= aChar && aChar <= '\u0AB8') {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

};

// Exporting
// ---------

// CommonJS module is defined
if (typeof exports !== 'undefined') {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = _gu;
  }
  exports._gu = _gu;
}

// Register as a named module with AMD.
if (typeof define === 'function' && define.amd) {
  define('underscore.gu', [], function(){ return _gu; });
}
