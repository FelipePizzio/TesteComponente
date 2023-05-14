function applyDiscount(value, coupon) {
  const discount = coupon === '10%' ? 0.1 : 0.15;
  const discountedValue = value - (value * discount);
  const centsValue = Math.round(discountedValue * 100);
  return centsValue;
}

module.exports = {
  applyDiscount,
};
