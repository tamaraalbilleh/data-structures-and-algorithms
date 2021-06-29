# Tree Intersection

returns an array of arrays each containing one of the keys in the left hashmap and its value and the corresponding value with the same key in the right hashmap or null if it didn't occur in the right one


### code challenge 31 :

- Write a function called left join
    - Arguments: two hash maps
    - The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
    - The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
- Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic

## Approach & Efficiency
1. loop over the left hash table and push to the output array the entries of the left hashmap that have any values 
2. loop over the right hash table and on the output arrays at the same time and check if the output array contains the keys of the right hash table and push their values into the arrays of the output that contains the key
3. if a key in the left doesn't exist in right table push null to the array that holds the key
4. return the output array 

### big O
* time  :O( n^2 )
* space :O ( n )
***

## API : Whiteboard Process

![white board](https://github.com/tamaraalbilleh/data-structures-and-algorithms/blob/main/javascript-401d9/challenges/assets/cc26.png?raw=true)

for more clear image see it more clear [click here](https://app.diagrams.net/#LCopy%20of%20Untitled%20Diagram.drawio)