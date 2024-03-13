// You can't use .includes or .indexOf
function calculateOcurrenceIdentification(arr = []) {
  const newArr = []
  const ocurrences = {}

  arr.forEach((item) => {
    if (ocurrences[item]) {
      newArr.push('*')
    } else {
      ocurrences[item] = true
      newArr.push(item)
    }
  })

  return newArr
}

module.exports = calculateOcurrenceIdentification

/*
The time complexity of this code is O(n), where n is the length of the input array 'arr'. This is because the code iterates through each element in the array once using the forEach method.

The space complexity of this code is O(n), where n is the number of unique elements in the input array 'arr'. This is because the code creates a new array 'newArr' that can potentially store all the unique elements in 'arr'. Additionally, the code creates an object 'ocurrences' to keep track of the occurrences of each element, which also takes up space proportional to the number of unique elements.
*/
