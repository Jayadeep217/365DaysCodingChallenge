# Left Rotate Array by K Places

Given an integer array nums and a non-negative integer k, rotate the array to the left by k steps.

#### <ins>Examples:</ins>

Input: nums = [1, 2, 3, 4, 5, 6], k = 2  
Output: nums = [3, 4, 5, 6, 1, 2]  
Explanation: rotate 1 step to the left: [2, 3, 4, 5, 6, 1]  
rotate 2 steps to the left: [3, 4, 5, 6, 1, 2]  
  
Input: nums = [3, 4, 1, 5, 3, -5], k = 8  
Output: nums = [1, 5, 3, -5, 3, 4]  
Explanation: rotate 1 step to the left: [4, 1, 5, 3, -5, 3]  
rotate 2 steps to the left: [1, 5, 3, -5, 3, 4]  
rotate 3 steps to the left: [5, 3, -5, 3, 4, 1]  
rotate 4 steps to the left: [3, -5, 3, 4, 1, 5]  
rotate 5 steps to the left: [-5, 3, 4, 1, 5, 3]  
rotate 6 steps to the left: [3, 4, 1, 5, 3, -5]  
rotate 7 steps to the left: [4, 1, 5, 3, -5, 3]  
rotate 8 steps to the left: [1, 5, 3, -5, 3, 4]  
  
Input: nums = [1, 2, 3, 4, 5], k = 4  
Output: [5, 1, 2, 3, 4]  
  
#### <ins>Constraints:</ins>

- 1 <= nums.length <= 10<sup>5</sup>  
- -10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>  
- 0 <= k <= 10<sup>5</sup>  

## Solution

```Javascript
function reverseArr(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}
function rotateArray(arr, k) {
  let n = arr.length;
  k = k % n;
  reverseArr(arr, 0, k - 1);
  reverseArr(arr, k, n - 1);
  reverseArr(arr, 0, n - 1);
}

```
