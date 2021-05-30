# code challenge 11 : 
## PseudoQueue
Create a brand new PseudoQueue class. Do not use an existing Queue. Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below), but will internally only utilize 2 Stack objects

## Whiteboard Process
for more clear image see it more clear [click here](https://app.diagrams.net/#G1AKmkNLNyTIcs_2mZyrZoiC6punxx3oe0)
![white board]()

## Challenge
## Approach & Efficiency
### enqueue (value) :
1. using the push method to the main stack
### big O
* time  :O ( 1 )
* space :O ( 1 )
***
### dequeue () :
1. check if the main stack have a top : 
2. as long as the main stack have a top : 
3. push its content to the temporary stack
4. pop the last pushed node from the temporary stack and store its value in a variable
5. as long as the temporary have a top :
6. push its content to the main stack 
7. return the the popped value that is stored in the variable .
### big O
* time  :O( n )
* space :O ( n )
***
<br>

## API
* enqueue(value) : inserts value into the PseudoQueue, using a first-in, first-out approach.
* dequeue() : extracts a value from the PseudoQueue, using a first-in, first-out approach.
