const ftoc = function(temp) {
  let celc = (temp - 32) * (5 / 9);
  return parseFloat(celc.toFixed(1));
};

const ctof = function() {

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
