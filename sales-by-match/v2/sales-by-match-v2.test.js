const sockMerchant = require('./index')

describe('sockMerchant v2', () => {
  test('should return "0" with empty array', () => {
    const res = sockMerchant()

    expect(res).toBe(0)
  })
  test('should return "0" with one sock', () => {
    const res = sockMerchant([1])

    expect(res).toBe(0)
  })
  test('should return "1" with 1 pair', () => {
    const res = sockMerchant([1, 1])

    expect(res).toBe(1)
  })

  test('should return "1" with 1 pair and another sock', () => {
    const res = sockMerchant([1, 1, 2])

    expect(res).toBe(1)
  })

  test('should return "3" with 3 pairs and another sock', () => {
    const res = sockMerchant([1, 2, 3, 4, 5, 6, 6, 2, 3])

    expect(res).toBe(3)
  })
})
