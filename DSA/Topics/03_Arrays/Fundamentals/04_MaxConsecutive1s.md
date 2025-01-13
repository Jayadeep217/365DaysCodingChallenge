# Maximum Consecutive Ones

Given a binary array nums, return the maximum number of consecutive 1s in the array.  

A binary array is an array that contains only 0s and 1s.

#### <ins>Examples:</ins>

Input: nums = [1, 1, 0, 0, 1, 1, 1, 0]  
Output: 3  
Explanation: The maximum consecutive 1s are present from index 4 to index 6, amounting to 3 1s  
  
Input: nums = [0, 0, 0, 0, 0, 0, 0, 0]  
Output: 0  
Explanation: No 1s are present in nums, thus we return 0  
  
Input: nums = [1, 0, 1, 1, 1, 0, 1, 1, 1]  
Output:3  

#### <ins>Constraints:</ins>

1 <= nums.length <= 10<sup>5</sup>  
nums[i] is either 0 or 1.  

## Solution

```Javascript
function findMaxConsecutiveOnes(nums) {
  let count = 0,
    max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
      max = Math.max(count, max);
    } else {
      count = 0;
    }
  }
  return max;
}
```
