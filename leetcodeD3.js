let s = "aababbab";

var minimumDeletions = function (s) {
  let countB = 0;
  let minDeletions = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "b") {
      countB++;
    } else {
      minDeletions = Math.min(minDeletions + 1, countB);
    }
  }
  return minDeletions;
};
