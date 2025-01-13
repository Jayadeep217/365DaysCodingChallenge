# Selection Sort

The selection sort algorithm sorts an array by repeatedly finding the minimum element from the unsorted part and putting it at the beginning. The largest element will end up at the last index of the array.

```Javascript
function selectionSort(nums) {
  let arrLen = nums.length;
  for (let i = 0; i < arrLen - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arrLen; j++) {
      if (nums[minIndex] > nums[j]) {
        minIndex = j;
      }
    }
    if (minIndex != i) {
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
  }
  return nums;
}
```

### Time Complexity

- Best Case: O(n<sup>2</sup>)
- Average Case: O(n<sup>2</sup>)
- Worst Case: O(n<sup>2</sup>)

### Space Complexity

- O(1) (In-place sorting)

## Key Points

- Selection Sort is not adaptive (it does not consider if the array is already sorted).
- It is inefficient for large datasets due to its O(n<sup>2</sup>) time complexity.
- It performs well on small arrays and is easy to implement.
