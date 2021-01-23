export const getBubbleSortAnimations = arr => {
  console.log(arr);
  const animations = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      animations.push({
        indexes: [i, j],
      });
      animations.push({
        indexes: [i, j],
        revertColor: true,
      });
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        animations.push({
          indexes: [i, j],
          heights: [arr[j], arr[i]],
          swap: true,
          revertColor: true,
        });
      }
    }
  }

  return animations;
};
