# Intersection of two sorted arrays

Given two sorted arrays nums1 and nums2, return an array containing the intersection of these two arrays.  
The intersection of two arrays is an array where all values are present in both arrays.  

#### <ins>Examples:</ins>

Input: nums1 = [1, 2, 2, 3, 5], nums2 = [1, 2, 7]  
Output: [1, 2]  
Explanation: The elements 1, 2 are the only elements present in both nums1 and nums2  
  
Input: nums1 = [1, 2, 2, 3], nums2 = [4, 5, 7]  
Output: []  
Explanation: No elements appear in both nums1 and nums2  
  
Input: nums1 = [-45, -45, 0, 0, 2], nums2 = [-50, -45, 0, 0, 5, 7]  
Output:[-45, 0, 0]  

#### <ins>Constraints:</ins>

- 1 <= nums1.length, nums2.length <= 1000
- -10<sup>4</sup> <= nums1[i], nums2[i] <= 10<sup>4</sup>
- Both nums1 and nums2 are sorted in non-decreasing order.  

## Solution

```Javascript
function intersectionArray(nums1, nums2) {
  const ans = [];
  let i = 0,
    j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums2[j] < nums1[i]) {
      j++;
    } else {
      ans.push(nums1[i]);
      i++;
      j++;
    }
  }
  return ans;
}
```
