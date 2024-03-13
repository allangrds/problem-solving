function calculateOcurrenceIdentification(arr = []) {
  const newArr = []

  arr.forEach((item, index) => {
    if (newArr.includes(item)) {
      newArr.push('*')
    } else {
      newArr.push(item)
    }
  })

  return newArr
}

module.exports = calculateOcurrenceIdentification

/*
The time complexity of this code is O(n^2) because the `includes` method is called within the `forEach` loop, and the `includes` method has a time complexity of O(n). Since the `includes` method is called for each item in the array, the overall time complexity becomes O(n^2).

The space complexity of this code is O(n) because a new array `newArr` is created to store the modified elements. The size of `newArr` will be equal to the size of the input array `arr`, so the space complexity is linear with respect to the input size.
*/
