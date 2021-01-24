export function getInsertionSortAnimations(inputArr) {
  let n = inputArr.length;
  const animations = [];
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = inputArr[i];
    // The last element of our sorted subarray
    let j = i - 1;

    while (j > -1 && current < inputArr[j]) {
      animations.push({
        indexes: [j + 1, j],
      });
      animations.push({
        indexes: [j + 1, j],
        revertColor: true,
      });

      inputArr[j + 1] = inputArr[j];
      animations.push({
        indexes: [j + 1, j],
        heights: [inputArr[j], inputArr[j + 1]],
        swap: true,
        revertColor: true,
      });

      j--;
    }

    inputArr[j + 1] = current;
    animations.push({
      indexes: [j + 1, i],
      heights: [inputArr[i], inputArr[j + 1]],
      swap: true,
      revertColor: true,
    });
  }
  return animations;
}
