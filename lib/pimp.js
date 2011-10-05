
(function(global, undefined) {
  module.exports = since = function(startTime) {
    var delta = new Date() - startTime;
    threshold = 0;
    if (delta <= threshold) {
      return "Just started!";
    }
    var units = null;
    var conversions = {
      millisecond: 1,
      second: 1000,
      minute: 60,
      hour:   60,
      day:    24,
      month:  30,
      year:   12
    };
    for (var key in conversions) {
      if (delta < conversions[key]) {
          break;
      } else {
          units = key;
          delta = delta / conversions[key];
      }
    }
    delta = Math.floor(delta);
    if (delta !== 1) {
      units += "s";
    }
    var timeSince = [delta, units].join(" ");
    return timeSince;
  }
})(global);