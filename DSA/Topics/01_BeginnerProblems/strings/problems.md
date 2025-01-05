# Problem1

### Reverse a string
Given a string, the task is to reverse it. The string is represented by an array of characters s. Perform the reversal in place with O(1) extra memory.

## Examples

Example 1

Input : s = ["h", "e" ,"l" ,"l" ,"o"]
Output : ["o", "l", "l", "e", "h"]
Explanation : The given string is s = "hello" and after reversing it becomes s = "olleh".

Example 2

Input : s = ["b", "y" ,"e" ]
Output : ["e", "y", "b"]
Explanation : The given string is s = "bye" and after reversing it becomes s = "eyb".

Example 3

Input : s = ["h", "a" ,"n" ,"n" ,"a", "h"]
Output:["h", "a" ,"n" ,"n" ,"a", "h"]

## Solution

```Javascript
reverseString(s) {
    let start = 0, end = s.length - 1; 
    while(start<end){
        let temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start++, end--;
    }
    return s;
}
```

===================================================================================================================================================================

# Problem2

### Palindrome Check
You are given a string s. Return true if the string is palindrome, otherwise false. A string is called palindrome if it reads the same forward and backward.

## Examples

Example 1

Input : s = "hannah"
Output : true
Explanation : The given string when read backward is -> "hannah", which is same as when read forward.
Hence answer is true.

Example 2

Input : s = "aabbaaa"
Output : false
Explanation : The given string when read backward is -> "aaabbaa", which is not same as when read forward.
Hence answer is false.

Example 3

Input : s = "aabbccbbaa"
Output:
true

## Solution

```Javascript
palindromeCheck(s) {
    let start = 0, end = s.length - 1; 
    while(start<end){
        if(s[start]!=s[end]){
            return false;
        }
        start++, end--;
    }
    return true;
}
```

===================================================================================================================================================================

# Problem3

### Largest odd number in a string
Given a string s, representing a large integer, the task is to return the largest-valued odd integer (as a string) that is a substring of the given string s.
The number returned should not have leading zero's. But the given input string may have leading zero.

## Examples

Example 1

Input : s = "5347"
Output : "5347"
Explanation : The odd numbers formed by given strings are --> 5, 3, 53, 347, 5347.
So the largest among all the possible odd numbers for given string is 5347.

Example 2

Input : s = "0214638"
Output : "21463"
Explanation : The different odd numbers that can be formed by the given string are --> 1, 3, 21, 63, 463, 1463, 21463.
We cannot include 021463 as the number contains leading zero.
So largest odd number in given string is 21463.

Example 3

Input : s = "0032579"
Output:
"32579"

## Solution

```Javascript
largeOddNum(s) {
    let ans = '', start = 0, end = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if ((s[i] - '0') % 2 != 0) {
            end = i;
            break;
        }
    }
    for (let j = 0; j <= end; j++) {
        if (s[j] !== '0') {
            start = j;
            break;
        }
    }
    return s.substring(start, end + 1);
}
```
