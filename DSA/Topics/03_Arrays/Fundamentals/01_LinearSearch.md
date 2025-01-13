# Linear Search

Given an array of integers nums and an integer target, find the smallest index (0 based indexing) where the target appears in the array. If the target is not found in the array, return -1

#### <ins>Examples:</ins>

Input: nums = [2, 3, 4, 5, 3], target = 3  
Output: 1  
Explanation: The first occurence of 3 in nums is at index 1  
  
Input: nums = [2, -4, 4, 0, 10], target = 6  
Output: -1  
Explanation: The value 6 does not occur in the array, hence output is -1  
  
Input: nums = [1, 3, 5, -4, 1], target = 1  
Output: 0  

#### <ins>Constraints:</ins>

1 <= nums.length <= 10<sup>5</sup>  
-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>  
-10<sup>4</sup> <= target <= 10<sup>4</sup>  

## Solution

```Javascript
// One-Liner
function linearSearch(nums, target) {
  return nums.findIndex(el => el === target);
}
//General
function linearSearch(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
}

```
