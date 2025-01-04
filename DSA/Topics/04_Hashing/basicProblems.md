# Problem

Given an array of n integers, find the most frequent element in it i.e., the element that occurs the maximum number of times. If there are multiple elements that appear a maximum number of times, find the smallest of them.

## Examples

Example 1

Input: arr = [1, 2, 2, 3, 3, 3]
Output: 3
Explanation: The number 3 appears the most (3 times). It is the most frequent element.

Example 2

Input: arr = [4, 4, 5, 5, 6]
Output: 4
Explanation: Both 4 and 5 appear twice, but 4 is smaller. So, 4 is the most frequent element.

Example 3

Input: arr = [10, 9 ,7]
Output:7

## Solution

```Javascript
function mostFrequentElement(nums) {
  let hm = new Map();
  nums.forEach((num) => {
    if (hm.has(num)) {
      hm.set(num, hm.get(num) + 1);
    } else {
      hm.set(num, 1);
    }
  });
  let maxFrequency = 0;
  let result = Number.MAX_SAFE_INTEGER;

  for (const [key, value] of hm.entries()) {
    if (value > maxFrequency ||
       (value === maxFrequency && key < result)) {
      maxFrequency = value;
      result = key;
    }
  }

  return result;
}
```