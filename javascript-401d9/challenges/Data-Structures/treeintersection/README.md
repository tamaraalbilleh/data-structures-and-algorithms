# Tree Intersection

returns the values of the nodes that are duplicated between two binary trees.


### code challenge 31 :
- Find all values found to be in 2 binary trees

- Write a function called tree intersection
    - Arguments: two binary trees
    - Return: array


## Approach & Efficiency
1. loop over both trees in  pre order and return the arrays of the values 
2. add all the values of the first tree to the hash table
3. loop over the other tree values and compare if the value is in the hash table push the value to the out put array
4. return the output  

### big O
* time  :O( n )
* space :O ( n )
***

## API : Whiteboard Process

![white board](https://github.com/tamaraalbilleh/data-structures-and-algorithms/blob/main/javascript-401d9/challenges/assets/cc25.png?raw=true)

for more clear image see it more clear [click here](https://app.diagrams.net/#G1kUBMS_Wq2eTvUlncZEV55wxudBdVH3ED)