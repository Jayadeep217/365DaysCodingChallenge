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

=========================================================================================================================================================

# problem3(Hard)

Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

```NA
5 5 5 5 5 5 5 5 5 
5 4 4 4 4 4 4 4 5 
5 4 3 3 3 3 3 4 5 
5 4 3 2 2 2 3 4 5 
5 4 3 2 1 2 3 4 5 
5 4 3 2 2 2 3 4 5 
5 4 3 3 3 3 3 4 5 
5 4 4 4 4 4 4 4 5 
5 5 5 5 5 5 5 5 5
```

## solution

```javascript
pattern(n) {
    let totalRows = 2 * n - 1;
    for (let row = 0; row < totalRows; row++) {
        for (let col = 0; col < totalRows; col++) {
            let top = row;
            let left = col;
            let bottom = totalRows - 1 - row;
            let right = totalRows - 1 - col;

            process.stdout.write(
                n - Math.min(
                    Math.min(top, left),
                    Math.min(right, bottom)
                ) + " "
            );
        }
        process.stdout.write("\n");
    }
}
```

### Explanation

```NA
Minimum of 4 directions and then we subtract from n because previously we 
would get a pattern whose border has 0's, but we want with border n's and then decreasing inside.
```