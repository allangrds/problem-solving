function countingWinningTeams(participants = "") {
  const participantsArr = participants.split("");
  const charMap = {};

  participantsArr.forEach((char) => {
    if (charMap[char]) {
      charMap[char] = charMap[char] + 1;
    } else {
      charMap[char] = 1;
    }
  });

  const winOneTime = Object.values(charMap).filter((count) => count === 1);

  return winOneTime.length;
}

module.exports = countingWinningTeams;

/*
The time complexity of this code is O(n) because the map and filter

The space complexity of this code is O(n)
*/
