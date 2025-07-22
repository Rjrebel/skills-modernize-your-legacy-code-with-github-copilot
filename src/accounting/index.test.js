const { creditAccount, debitAccount, readBalance, writeBalance } = require('./index');

describe('Student Account System', () => {
  beforeEach(() => {
    writeBalance(1000.00);
  });

  test('TC01: Add new student account (simulate by setting balance)', () => {
    writeBalance(500.00);
    expect(readBalance()).toBe(500.00);
  });

  test('TC02: Update student account (simulate by updating balance)', () => {
    writeBalance(800.00);
    expect(readBalance()).toBe(800.00);
  });

  test('TC06: Prevent negative balances', () => {
    expect(() => debitAccount(2000.00)).not.toThrow();
    expect(readBalance()).toBe(1000.00);
  });

  test('TC09: Retrieve student account data', () => {
    expect(readBalance()).toBe(1000.00);
  });

  test('TC10: Display outcome to user (simulate by checking balance after credit)', () => {
    creditAccount(100.00);
    expect(readBalance()).toBe(1100.00);
  });
});
