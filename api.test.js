const { applyDiscount } = require('./api');

describe('API', () => {
  describe('applyDiscount', () => {
    it('should apply 10% discount correctly', () => {
      const value = 1150.23;
      const coupon = '10%';
      const result = applyDiscount(value, coupon);
      expect(result).toBe(103521);
    });

    it('should apply 15% discount correctly', () => {
      const value = 1150.23;
      const coupon = '15%';
      const result = applyDiscount(value, coupon);
      expect(result).toBe(97770);
    });

    it('should round down when discount results in decimal', () => {
      const value = 99.99;
      const coupon = '10%';
      const result = applyDiscount(value, coupon);
      expect(result).toBe(8999);
    });

    it('should round up when discount results in decimal', () => {
      const value = 99.98;
      const coupon = '15%';
      const result = applyDiscount(value, coupon);
      expect(result).toBe(8498);
    });
  });
});