### code challenge 21 : 
# Quick Sort 
a function that takes in an array and return it sorted by quick sorting

## Challenge Summary
Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual
```
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp

```

## Whiteboard Process
![white board](https://github.com/tamaraalbilleh/data-structures-and-algorithms/blob/main/javascript-401d9/challenges/assets/cc22.png?raw=true)
for more clear image see it more clear [click here](https://app.diagrams.net/?src=about#G1IV_LXl-IAQaS6G7C7wmIfVriy0WEJ2rq)


## Approach & Efficiency
### big O :
- time : o(n log n)
- space : o(1)

### algorithm for quickSort  : it takes in an array and a right and left value 
1. check if no parameters entered or the array is empty or it has non numerical values 
2. define a position to be the returned value of calling the partition function on the array and left and right values 
3. call the quickSort function on the array with the left and position decreased by one and then once again on the array with the position incremented by one along with the right value
4. finally return the array 

### algorithm for partition  : it takes in an array with a left and a right values 
1. define a pivot variable to have the value of the array item with the index of right 
2. define a low variable to have the value of the left minus one .
3. loop from left to right checking if the array item with the index of the iterator pointer is less or equal the value of the pivot variable then increase the low value by one and call the swap function on the array and the iterator pointer and the low value 
4. after the loop call the swap function one more time on the array and the right value and the low value increased by one 
5. return the value of low after increment by one 
### algorithm for swap  : it takes in an array an two variables i and low 
1. define a template value with out assigning it a value. 
2. let the template equal the array item with the index of i.
3. let the array item with the index of i equal the array item with the index of low 
4. let the array item with the index of low equal the template value .

## Solution : 
to run this code we call the function mergeSort on a sorted , non-sorted , nearly-sorted or an array with few unique values and expect the result to be the array sorted incrementally .

