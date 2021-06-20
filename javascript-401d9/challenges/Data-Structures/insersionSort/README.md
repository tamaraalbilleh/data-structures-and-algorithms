### code challenge 20 : 
# Insertion Sort 
a function that takes in an array and return it sorted 

## Challenge Summary
Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.
```
 InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
```

## Whiteboard Process
![white board](https://github.com/tamaraalbilleh/data-structures-and-algorithms/blob/main/javascript-401d9/challenges/assets/cc20.png?raw=true)
for more clear image see it more clear [click here](https://app.diagrams.net/#G1Nzf-nlSzEZSYLro4_zq2IGrO5qu8tV6O)


## Approach & Efficiency
### big O :
- time : o(n^2)
- space : o(1)
### algorithm :
1. loop over the array given 
2. for each item declare j to be the i - 1
3. declare a temporary value to point for the array item that has the index the same as i
4. loop over the items as long as j is more or equal 0 and as long as temp is less then the array item that have the index j 
5. while looping : let the array item with the index of j + 1 equals the array item with the index j
6. update the value of j to be decreased by 1
7. after breaking the while loop : update the array item with the index of j +1 to be the new temp value
8. after all is done return the array 


## Solution : 
to run this code we call the function on a sorted , non-sorted , nearly-sorted or an array with few unique values and expect the result to be the array sorted incrementally .

