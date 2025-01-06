# Recursion

## Array Sum

```Javascript
let num = [1, 2, 3, 4, 5];
function sum(arr, n) {
  if (n < 0) return 0;
  if (n === 0) return arr[0];
  return arr[n] + this.sum(arr, n - 1);
}
sum(nums, nums.length - 1); //15
```

## String Reverse

```Javascript
str = "abc";
function reverse(str, n) {
  if (n < 0) return "";
  return str[n] + this.reverse(str, n - 1);
}
reverse(str, str.length - 1);//"cba"
```
