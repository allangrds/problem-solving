function sockMerchant(socks = []) {
  let pairs = 0
  const matches = {}

  socks.forEach((sock) => {
    if (matches[sock]) {
      pairs = pairs + 1
    }

    matches[sock] = !matches[sock]
  })

  return pairs
}

module.exports = sockMerchant
