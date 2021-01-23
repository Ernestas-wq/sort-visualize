let animations = [];
function swap(arr, x, y) {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}
function max_heapify(a, i, n) {
  let left = 2 * i; //Left child index
  let right = 2 * i + 1; //Right child index
  let maximum;
  if (right < n) {
    //Checks if right child exist
    if (a[left] >= a[right]) {
      animations.push({
        indexes: [left, right],
      });
      animations.push({
        indexes: [left, right],
        revertColor: true,
      });

      //Compares children to find maximum
      maximum = left;
    } else {
      maximum = right;
    }
  } else if (left < n) {
    //Checks if left child exists
    maximum = left;
  } else return; //In case of no children return
  if (a[i] < a[maximum]) {
    animations.push({
      indexes: [i, maximum],
    });
    animations.push({
      indexes: [i, maximum],
      revertColor: true,
    });

    //Checks if the largest child is greater than parent
    swap(a, i, maximum); //If it is then swap both
    animations.push({
      indexes: [i, maximum],
      heights: [a[maximum], a[i]],
      swap: true,
      revertColor: true,
    });

    max_heapify(a, maximum, n); //max-heapify again
  }
  return;
}

export function getHeapSortAnimations(a) {
  let n = a.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    max_heapify(a, i, n); //Building max heap
  }
  for (let i = n - 1; i >= 0; i--) {
    swap(a, 0, i); //Deleting root element
    animations.push({
      indexes: [0, i],
      heights: [a[i], a[0]],
      swap: true,
      revertColor: true,
    });

    max_heapify(a, 0, i); //Building max heap again
  }
  return animations;
}
export const resetHeapSortAnimations = () => {
  animations = [];
};
