# Insertion Sort

Insertion sort builds a sorted array one element at a time by repeatedly picking the next element and inserting it into its correct position within the already sorted part of the array.

```Javascript
function insertionSort(nums) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j > 0 && nums[j - 1] > nums[j]; j--) {
      [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]];
    }
  }
  return nums;
}
```

## Time Complexity

- Best Case O(n) When the array is already sorted, only one comparison per element is needed.
- Worst Case O(n^2^) When the array is sorted in reverse order, every element must be compared with all elements in the sorted portion.
- Average Case O(n^2^) For random data, the algorithm has to perform multiple shifts on average.

## Space Complexity

- O(1) - In-place sorting algorithm (no extra space required).

## Key Points

- Simple and easy to implement.
- Efficient for small datasets or nearly sorted data.
- Stable sorting algorithm (maintains the relative order of equal elements).
  