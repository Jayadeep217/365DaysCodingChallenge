# quick sort

Quick Sort is a divide-and-conquer algorithm like Merge Sort. However, unlike Merge Sort, Quick Sort does not use an extra array for sorting (though it uses an auxiliary stack space). This makes Quick Sort slightly better than Merge Sort from a space perspective.

This algorithm follows two simple steps repeatedly:

    Pick a pivot and place it in its correct position in the sorted array.
    Move smaller elements (i.e., smaller than the pivot) to the left of the pivot and larger ones to the right.

To summarize: The main goal is to place the pivot at its final position in each recursion call, where it should be in the final sorted array.

```Javascript
function partition(arr, low, high) {
  let pivot = arr[low], i = low, j = high;
  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }
    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[low], arr[j]] = [arr[j], arr[low]];
  return j;
}
function quickSortHelper(arr, low, high) {
  if (low < high) {
    let pIndex = this.partition(arr, low, high);
    this.quickSortHelper(arr, low, pIndex - 1);
    this.quickSortHelper(arr, pIndex + 1, high);
  }
}
function quickSort(nums) {
  let n = nums.length;
  this.quickSortHelper(nums, 0, n - 1);
  return nums;
}
```

## Time Complexity

- Best Case O(nlog⁡n)
- Average Case O(nlogn)
- Worst Case O(n<sup>2</sup>)

## Space Complexity

- O(1) + O(N) auxiliary stack space, where N = size of the array.

## Key Points

- Faster than Merge Sort for average cases due to less overhead.
- In-place sorting in the optimized version (no extra arrays needed).
- Suitable for large datasets.
- Worst-case time complexity is O(n<sup>2</sup>) with poor pivot selection.
- Unstable (relative order of equal elements may not be maintained).
- Recursive calls can lead to stack overflow for very large datasets.
