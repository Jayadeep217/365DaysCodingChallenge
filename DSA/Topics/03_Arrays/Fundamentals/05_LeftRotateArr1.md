# Left Rotate Array by One

Given an integer array nums, rotate the array to the left by one.  

#### <ins>Examples:</ins>

Input: nums = [1, 2, 3, 4, 5]  
Output: [2, 3, 4, 5, 1]  
Explanation: Initially, nums = [1, 2, 3, 4, 5]  
Rotating once to left -> nums = [2, 3, 4, 5, 1]  
  
Input: nums = [-1, 0, 3, 6]  
Output: [0, 3, 6, -1]  
Explanation: Initially, nums = [-1, 0, 3, 6]  
Rotating once to left -> nums = [0, 3, 6, -1]  
  
Input: nums = [7, 6, 5, 4]  
Output:[6, 5, 4, 7]  

#### <ins>Constraints:</ins>

- 1 <= nums.length <= 10<sup>5</sup>  
- -10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>  

## Solution

```Javascript
function rotateArrayByOne(nums) {
  const temp = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i - 1] = nums[i];
  }
  nums[nums.length - 1] = temp;
}
```
