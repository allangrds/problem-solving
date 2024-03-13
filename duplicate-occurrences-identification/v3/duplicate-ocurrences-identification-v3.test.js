const calculateOcurrenceIdentification = require('./index')

describe('calculateOcurrenceIdentification v3', () => {
  test('should return no array modification', () => {
    const res = calculateOcurrenceIdentification(['dog', 'cat', 'chicken',])

    expect(res).toEqual(['dog', 'cat', 'chicken',])
  })

  test('should return a modified array for "dog" duplication', () => {
    const res = calculateOcurrenceIdentification(['dog', 'cat', 'chicken', 'dog',])

    expect(res).toEqual(['dog', 'cat', 'chicken', '*'])
  })

  test('should return a modified array for "dog" and "cow" duplication', () => {
    const res = calculateOcurrenceIdentification(['dog', 'cat', 'chicken', 'dog', 'cow', 'cow', 'dog'])

    expect(res).toEqual(['dog', 'cat', 'chicken', '*', 'cow', '*', '*'])
  })
})
