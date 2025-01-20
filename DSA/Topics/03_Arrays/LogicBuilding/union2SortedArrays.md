# Union of two sorted arrays

Given two sorted arrays nums1 and nums2, return an array that contains the union of these two arrays. The elements in the union must be in ascending order.  
The union of two arrays is an array where all values are distinct and are present in either the first array, the second array, or both.  

#### <ins>Examples:</ins>

Input: nums1 = [1, 2, 3, 4, 5], nums2 = [1, 2, 7]  
Output: [1, 2, 3, 4, 5, 7]  
Explanation: The elements 1, 2 are common to both, 3, 4, 5 are from nums1 and 7 is from nums2  
  
Input: nums1 = [3, 4, 6, 7, 9, 9], nums2 = [1, 5, 7, 8, 8]  
Output: [1, 3, 4, 5, 6, 7, 8, 9]  
Explanation: The element 7 is common to both, 3, 4, 6, 9 are from nums1 and 1, 5, 8 is from nums2  
  
Input: nums1 = [3, 4, 4, 4], nums2 = [6, 7, 7]  
Output:[3, 4, 6, 7]  

#### <ins>Constraints:</ins>

- 1 <= nums1.length, nums2.length <= 1000
- -10<sup>4</sup> <= nums1[i] , nums2[i] <= 10<sup>4</sup>  
- Both nums1 and nums2 are sorted in non-decreasing order    

## Solution

```Javascript
function addEle(arr, ele) {
  if (!arr.includes(ele)) {
    arr.push(ele);
  }
}
function unionArray(nums1, nums2) {
  let ans = [],
    n1 = nums1.length,
    n2 = nums2.length,
    n = Math.max(n1, n2);
  for (let i = 0; i < n; i++) {
    if (i < n1) {
      this.addEle(ans, nums1[i]);
    }
    if (i < n2) {
      this.addEle(ans, nums2[i]);
    }
  }
  return ans.sort((a, b) => a - b);
}
```
