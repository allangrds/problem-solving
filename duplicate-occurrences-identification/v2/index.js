// You can't use .includes
function calculateOcurrenceIdentification(arr = []) {
  const newArr = []

  arr.forEach((item) => {
    if (newArr.indexOf(item) !== -1) {
      newArr.push('*')
    } else {
      newArr.push(item)
    }
  })

  return newArr
}

module.exports = calculateOcurrenceIdentification

/*
The time complexity of this code is O(n^2) because the indexOf method is called within the forEach loop, and the indexOf method has a time complexity of O(n). Since the forEach loop iterates over each element in the array, and for each element, the indexOf method is called, the overall time complexity is O(n^2).

The space complexity of this code is O(n) because a new array, newArr, is created to store the modified elements. The size of newArr is directly proportional to the size of the input array, arr. Therefore, the space complexity is O(n).
*/
