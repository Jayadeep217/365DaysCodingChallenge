# Two Sum

Given an array of integers nums and an integer target. Return the indices(0 - indexed) of two elements in nums such that they add up to target.  
  Each input will have exactly one solution, and the same element cannot be used twice. Return the answer in non-decreasing order.

#### <ins>Examples:</ins>

Input: nums = [1, 6, 2, 10, 3], target = 7  
Output: [0, 1]  
Explanation: nums[0] + nums[1] = 1 + 6 = 7  

Input: nums = [1, 3, 5, -7, 6, -3], target = 0  
Output: [1, 5]  
Explanation: nums[1] + nums[5] = 3 + (-3) = 0  
  
Input: nums = [-6, 7, 1, -7, 6, 2], target = 3  
Output:4  

#### <ins>Constraints:</ins>

- 2 <= nums.length <= 10<sup>5</sup>
- -10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>
- -10<sup>5</sup> <= target <= 10<sup>5</sup>  
- Only one valid answer exists.

## Solution

```Javascript
function twoSum(nums, target) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}
```