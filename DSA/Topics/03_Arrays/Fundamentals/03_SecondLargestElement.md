# Second Largest Element

Given an array of integers nums, return the second-largest element in the array. If the second-largest element does not exist, return -1.

#### <u>Examples:</u>

Input: nums = [8, 8, 7, 6, 5]  
Output: 7  
Explanation: The largest value in nums is 8, the second largest is 7  
  
Input: nums = [10, 10, 10, 10, 10]  
Output: -1  
Explanation: The only value in nums is 10, so there is no second largest value, thus -1 is returned  
  
Input: nums = [7, 7, 2, 2, 10, 10, 10]  
Output: 7

#### <u>Constraints:</u>

1 <= nums.length <= 10<sup>5</sup>  
-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>  
nums may contain duplicate elements.  

## Solution

```Javascript
// One-Liner
function secondLargestElement(nums) {
    let n = nums.length;
    if (n < 2) {
      return -1;
    }
    nums.sort((a, b) => a - b);
    let largest = nums[n - 1];
    let secondLargest = -1;
    for (let i = n - 2; i >= 0; i--) {
      if (nums[i] != largest) {
        secondLargest = nums[i];
        break;
      }
    }
    return secondLargest;
  }
//General
function secondLargestElement(arr) {
    if (arr.length < 2) return -1;
    let first = -Infinity, second = -Infinity;
    for (let num of arr) {
      if (num > first) {
        second = first;
        first = num;
      } else if (num > second && num < first) {
        second = num;
      }
    }
    return second === -Infinity ? -1 : second;
  }
}

```
