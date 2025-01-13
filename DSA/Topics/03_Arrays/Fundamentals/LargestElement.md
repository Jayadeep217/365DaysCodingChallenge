# Largest Element

Given an array of integers nums, return the value of the largest element in the array

<u>#### Examples:</u>

Input: nums = [3, 3, 6, 1]
Output: 6
Explanation: The largest element in array is 6

Input: nums = [3, 3, 0, 99, -40]
Output: 99
Explanation: The largest element in array is 99

Input: nums = [-4, -3, 0, 1, -8]
Output:1

<u>#### Constraints:</u>

1 <= nums.length <= 10^5^
-10^4^ <= nums[i] <= 10^4^
nums may contain duplicate elements.

## Solution

```Javascript
// One-Liner
function largestElement(nums) {
  return Math.max(...nums);;
}
//General
function largestElement(nums) {
  let ans = Number.MIN_SAFE_INTEGER;
  nums.forEach((num) => {
    ans = Math.max(ans, num);
  });
  return ans;
}
function largestElement(nums) {
  nums.sort((a, b) => a - b);
  const largest = nums[nums.length - 1];
  return largest;
}
```
