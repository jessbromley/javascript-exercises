const ftoc = function(temp) {
  let celc = (temp - 32) * (5 / 9);
  return parseFloat(celc.toFixed(1));
};

const ctof = function(temp) {
  let fah = temp * (9/5) + 32;
  return parseFloat(fah.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
