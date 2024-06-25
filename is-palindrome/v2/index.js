function isPalindrome(value) {
  if (!value) {
    return false
  }

  if(value.length === 0){
    return false
  }

  const cleanedValue = value.toLowerCase()

  for (let i = 0; i < cleanedValue.length; i++) {
    if (cleanedValue[i] !== cleanedValue[cleanedValue.length - 1 - i]) {
      return false
    }
  }

  return true
}

module.exports = isPalindrome;
