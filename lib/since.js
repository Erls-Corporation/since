
/*
  NOTE:
  I can't take credit for this script, but just the module.
  It's a util function that I've been using for a while and
  just ended up being modularized out of a project - lmk.
*/

/*
  since
  @class since
  @author Edward Hotchkiss
  @param {Date} startTime time to calculate detla between
*/

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

/* EOF */