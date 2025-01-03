# problem1(Easy)

You are given an integer n. You need to find out the number of prime numbers in the range [1, n] (inclusive). Return the number of prime numbers in the range.
A prime number is a number which has no divisors except, 1 and itself.

## Examples
Example 1

Input: n = 6
Output: 3
Explanation: Prime numbers in the range [1, 6] are 2, 3, 5.

Example 2

Input: n = 10
Output: 4
Explanation: Prime numbers in the range [1, 10] are 2, 3, 5, 7.

## solution

```javascript
isPrime(x) {
    let factors = 0;
    for (let f = 1; f <= x; f++) {
        if (x % f === 0) {
            factors++;
        }
    }
    if (factors === 2) {
        return true;
    }
    return false;
}
primeUptoN(n) {
    let count = 0;
    for (let i = 2; i <= n; i++) {
        if (this.isPrime(i)) {
            count++;
        }
    }
    return count;
}
```

=========================================================================================================================================================

# problem2(Easy)

You are given two integers n1 and n2. You need find the Lowest Common Multiple (LCM) of the two given numbers. Return the LCM of the two numbers.
The Lowest Common Multiple (LCM) of two integers is the lowest positive integer that is divisible by both the integers.

## Examples

Example 1

Input: n1 = 4, n2 = 6
Output: 12
Explanation: 4 * 3 = 12, 6 * 2 = 12.
12 is the lowest integer that is divisible both 4 and 6.

Example 2

Input: n1 = 3, n2 = 5
Output: 15
Explanation: 3 * 5 = 15, 5 * 3 = 15.
15 is the lowest integer that is divisible both 3 and 5.

## solution

```Javascript
LCM(n1, n2) {
    let lcm;
    let n = Math.max(n1, n2);
    let i = 1;

    while (true) {
        let mul = n * i;
        if (mul % n1 === 0 && mul % n2 === 0) {
            lcm = mul;
            break;
        }
        i++;
    }
    return lcm;
}
```