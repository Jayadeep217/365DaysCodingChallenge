# Bubble Sort

The bubble sort algorithm sorts an array by repeatedly swapping adjacent elements if they are in the wrong order. The largest elements "bubble" to the end of the array with each pass.

```Javascript
function bubbleSort(nums) {
  let numsLen = nums.length;
  for (let i = 0; i < numsLen - 1; i++) {
    let isSorted = false;
    for (let j = 0; j < numsLen - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        isSorted = true;
      }
    }
    if (!isSorted) break;
  }
  return nums;
}
```

### Time Complexity

- Best Case: O(n) (when the array is already sorted; due to the swapped flag).
- Average Case: O(n2)
- Worst Case: O(n2)

### Space Complexity

- O(1) (In-place sorting)

## Key Points

- Bubble Sort is easy to understand and implement but inefficient for large datasets.
- It is adaptive if optimized with a flag to check for swaps.
- It is a stable sorting algorithm, meaning it preserves the relative order of equal elements.
