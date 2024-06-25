function isPalindrome(value) {
  if (!value) {
    return false
  }

  if(value.length === 0){
    return false
  }

  const cleanedValue = value.toLowerCase()
  const reversedValue = cleanedValue.split("").reverse().join("")

  return cleanedValue === reversedValue
}

module.exports = isPalindrome;
