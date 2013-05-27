var _gu = {

  // Checks if `aChar` is in Gujarati Unicode Character (GUC) range.
  isInGUCRange : function (aChar) {
    if ('\u0A80' <= aChar && aChar <= '\u0AFF') {
      return true;
    } else {
      return false;
    }
  },

};

// Exporting

// CommonJS module is defined
if (typeof exports !== 'undefined') {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = _gu;
  }
  exports._gu = _gu;
}
