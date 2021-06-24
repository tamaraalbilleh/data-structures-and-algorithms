# Hashtables

a hash table is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found.


### code challenge 30 :
Implement a Hashtable Class with the following methods:

- add

Arguments: key, value
Returns: nothing
This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
- get

Arguments: key
Returns: Value associated with that key in the table
- contains

Arguments: key
Returns: Boolean, indicating if the key exists in the table already.
- hash

Arguments: key
Returns: Index in the collection for that key


## Approach & Efficiency

### hash (key) :
1. split the key into an array , sum the asci code for each character in the array 
2. multiply it by a primary number
3. return the mod of the sum to the size of the hash table .
### big O
* time  :O( 1 )
* space :O ( 1 )
***


###  add ( key , value ):
1. hash the key to extract the index
2. if the index doesn't have a linked list attached to it attach a new linked list 
3. if it has append to the list 
### big O
* time  :O( 1 )
* space :O ( 1 )
***


### get (key) :
1. hash the key to extract the index
2. if the index of the table has values stored :
    - define a pointer to point at the head value of the linked list 
    - loop over the nodes of the list returning the values of the nodes in an array by moving the pointer
3. return the array of the values 


### big O
* time  :O( n )
* space :O ( n )
***


### contains (key)  :
1. hash the key to extract the index
2. if the index of the table has values stored return true 
3. if it didn't have return null 

### big O
* time  :O( 1 )
* space :O ( 1 )
***


## API : Whiteboard Process

![white board](https://github.com/tamaraalbilleh/data-structures-and-algorithms/blob/main/javascript-401d9/challenges/assets/cc23.png?raw=true)

for more clear image see it more clear [click here](https://app.diagrams.net/#G1rxloby7oJBVvXKpCinqj0bd7bUrqTpIb)