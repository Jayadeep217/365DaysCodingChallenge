# merge sort

Merge Sort is a powerful sorting algorithm that follows the divide-and-conquer approach. The array is divided into two equal halves until each sub-array contains only one element. Each pair of smaller sorted arrays is then merged into a larger sorted array.

```Javascript
function merge(arr, low, mid, high) {
  let temp_arr = [],
    left = low,
    right = mid + 1;
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp_arr.push(arr[left]);
      left++;
    } else {
      temp_arr.push(arr[right]);
      right++;
    }
  }
  while (left <= mid) {
    temp_arr.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp_arr.push(arr[right]);
    right++;
  }
  for (let i = low; i <= high; i++) {
    arr[i] = temp_arr[i - low];
  }
}
function mergeSort(arr, low, high) {
  if (low >= high) return;
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}
```

## Time Complexity

- Best, Worst, and Average Case: O(nlog⁡n)

## Space Complexity

- O(n)

## Key Points

- Efficient for large datasets.
- Consistent O(nlog⁡n)O(nlogn) performance in all cases.
- Stable sort (maintains the relative order of equal elements).
- Requires extra space proportional to the input size.
- Slower for smaller arrays compared to simpler algorithms like Insertion Sort.
  