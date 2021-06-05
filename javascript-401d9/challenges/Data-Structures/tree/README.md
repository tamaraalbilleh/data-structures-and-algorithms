# code challenge 15: Binary Tree and BST Implementation
## Trees
* Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
* Create a BinaryTree class
    * Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.
* Create a BinarySearchTree class
    * Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
    * Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

## Whiteboard Process
for more clear image see it more clear [click here](https://app.diagrams.net/#G1X-5Fw5LqzcKpxkvIm1XFUCkP5p5NXK54)
![white board](https://github.com/tamaraalbilleh/data-structures-and-algorithms/blob/main/javascript-401d9/challenges/assets/cc15.png?raw=true)

## Challenge
## Approach & Efficiency
###  preOrder(): root >> left >> right
1. define an empty array to hold the result values
2. define a recursive function to traverse through the tree and call it on the root node 
3. push the node to the array defined
4. check if the node has a left child node : if it does traverse with the function on the left node 
5. check if the node has a right child node : if it does , traverse with the function on the right node 
6. if the tree has no root node throw an error of a missing root .
7. return the array after it is full.
### big O
* time  :O ( n )
* space :O ( n )
***
###  inOrder (): left >> root >> right
1. define an empty array to hold the result values
2. define a recursive function to traverse through the tree and call it on the root node 
3. check if the node has a left child node : if it does traverse with the function on the left node 
4. push the node to the array defined
5. check if the node has a right child node : if it does , traverse with the function on the right node 
6. if the tree has no root node throw an error of a missing root .
7. return the array after it is full.
### big O
* time  :O ( n )
* space :O ( n )
***
###  postOrder (): left >> right >> root
1. define an empty array to hold the result values
2. define a recursive function to traverse through the tree and call it on the root node
3. check if the node has a left child node : if it does traverse with the function on the left node 
4. check if the node has a right child node : if it does , traverse with the function on the right node 
5. push the node to the array defined
6. if the tree has no root node throw an error of a missing root .
7. return the array after it is full.
### big O
* time  :O ( n )
* space :O ( n )
***
<br>

###  add(value):
1. check for a numerical value , if not throw error for only allowing adding numerical values 
2. create a new node with the inserted value
3. check if there is a root , if there isn't make the new node the root
4. make a pointer that points to the root 
5. loop over the tree as long as the pointer is not pointing to null 
6. check if you found a node with the same value as the node we are inserting and return a message for the user to add a non existing value
7. check if the node value is less than the pointer value check if the pointer has a left value : if not put the node there if it has one go to the next left one
8. check if the node value is greater than the pointer value check if the pointer has a right value : if not put the node there if it has one go to the next right one
### big O
* time  :O ( n )
* space :O ( n )
***
###  contains (value):
1. assume the result is false at the beginning
2. define a recursive function to traverse through the tree and call it on the root node
3. check if the node has a left child node : if it does traverse with the function on the left node 
4. check if the node has a right child node : if it does , traverse with the function on the right node 
5. check if the value of the node equals the value we are looking for : if it is make the result true
6. if the tree has no root node throw an error of a missing root .
7. return the boolean result value. 
### big O
* time  :O ( n )
* space :O ( 1 )
***
<br>

## API
- preOrder : root >> left >> right  : traverses over a binary tree and returns an array indicating the order of which the nodes were traversed on from root to left to right 
- inOrder : left >> root >> right  : traverses over a binary tree and returns an array indicating the order of which the nodes were traversed on from left to root to right 
- postOrder : left >> right >> root : traverses over a binary tree and returns an array indicating the order of which the nodes were traversed on from left to right to root
- add : takes in numeric value and finds a place in the binary search tree to insert it in 
- contains : takes in a numeric value and returns a boolean indicating if the value exists or not 