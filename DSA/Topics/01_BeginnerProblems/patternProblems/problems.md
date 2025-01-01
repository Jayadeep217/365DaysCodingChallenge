# problem1(Easy)

Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

```NA

ABCDE  
ABCD  
ABC  
AB  
A

```

## solution

```javascript

pattern(n) {
    let ch = 'A';
    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= n - row + 1; col++) {
            process.stdout.write(String.fromCharCode(ch.charCodeAt(0) - 1 + col));
        }
        process.stdout.write("\n");
    }
}

```

=========================================================================================================================================================

# problem2(Medium)

Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

```NA

*****
*   *
*   *
*   *
*****

```

## solution

```javascript

pattern(n) {
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (row === 0 || col === 0 || row === n - 1 || col === n - 1) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    process.stdout.write("\n");
  }
}

```
