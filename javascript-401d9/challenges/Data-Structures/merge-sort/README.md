### code challenge 21 : 
# Merge Sort 
a function that takes in an array and return it sorted by merge sorting

## Challenge Summary
Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.
```
 ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left

```

## Whiteboard Process
![white board](https://github.com/tamaraalbilleh/data-structures-and-algorithms/blob/main/javascript-401d9/challenges/assets/cc21.png?raw=true)
for more clear image see it more clear [click here](https://app.diagrams.net/?src=about#G1ThbSJMUIooBppvFwAGeYHdE77WL6rULv)


## Approach & Efficiency
### big O :
- time : o(n log n)
- space : o(n)
### algorithm for mergeSort  :
1. declare a variable n that represents the length of the original array
2. we divide the variable by two and consider it the mid 
3. we make two new arrays by slicing the original array to two half's using 0 as a starting point for the left array and the mid as an ending , and the mid as a starting point for the right one and the variable n  as an ending .
4. we keep slicing both arrays until we reach single value arrays by calling the mergeSort function recursively on both left and right arrays 
5. after each call for mergeSort we call the merge function on the resulted left , right and the original array
6. we return the resulted array from the function merge .

### algorithm for merge  :
1. declare 3 variables to be the pointers for the three arrays : i for the left ,  j for the right and k for the result array
2. loop as long as i is less then the left array's length and j is less than the right array's length :
  3. with an if statement decide if the left array item with the index of i is less or equal to the right array item with the index of j then : put the left array item with the index of i in the result array within the index of k and move i to point to the next index 
  4. if the if statement did not apply put the right array item with the index of j in the result array within the index of k and move j to point to the next index 
5. after the result array for sure took a value , move the k pointer to point to the next index 
6. when one of the arrays no longer have values left to compare : we need to put the other arrays values left not sorted in the empty indexes of the result array one by one using a while loop and moving the k pointer one index ahead each time .
7. when the result array is full , return it .

## Solution : 
to run this code we call the function mergeSort on a sorted , non-sorted , nearly-sorted or an array with few unique values and expect the result to be the array sorted incrementally .

