//Swapping array elements via ES6 array destructuring
let animations = [];

function swap(arr, x, y) {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}
//Pivot function returns the fixed pivot point
function pivot(arr, left = 0, right = arr.length - 1) {
  let shift = left;
  for (let i = left + 1; i <= right; i++) {
    //Move all the small elements on the left side
    animations.push({
      indexes: [i, left],
    });
    animations.push({
      indexes: [i, left],
      revertColor: true,
    });

    if (arr[i] < arr[left]) {
      swap(arr, i, ++shift);
    }
  }
  //Finally swapping the last element with the left
  swap(arr, left, shift);
  animations.push({
    indexes: [left, shift],
    heights: [arr[shift], arr[left]],
    swap: true,
    revertColor: true,
  });

  return shift;
}

export function getQuickSortAnimations(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);
    //Recusrively calling the function to the left of the pivot and to the right of the pivot
    getQuickSortAnimations(array, left, pivotIndex - 1);
    getQuickSortAnimations(array, pivotIndex + 1, right);
  }
  return animations;
  //   return array;
}
export function resetQuickSortAnimations() {
  animations = [];
}
