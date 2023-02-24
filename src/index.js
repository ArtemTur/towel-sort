
module.exports = function towelSort(matrix) {
  if (!matrix) {
    return []
  }
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 0) {
      arr = [...arr, ...matrix[i]];
    } else {
      arr = [...arr, ...(matrix[i].reverse())];
    }
  }
  return arr;
}