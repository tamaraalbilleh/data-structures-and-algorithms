# Singly Linked Lists
a function that creates a new linked list and adds nodes in to it's head , checks if a certain value exists in the list and returns a string representing the value of all nodes in the linked list , adds a node to the end of the list , adds nodes before a certain value provided or after a certain value, finds a value of a backwards index.

## Whiteboard Process
### code challenge 05 : 
![white board](https://github.com/tamaraalbilleh/data-structures-and-algorithms/blob/main/javascript-401d9/challenges/assets/cc5.png?raw=true)
for more clear image see it more clear [click here](https://app.diagrams.net/#G1rxloby7oJBVvXKpCinqj0bd7bUrqTpIb)
### code challenge 06 :
![white board](https://github.com/tamaraalbilleh/data-structures-and-algorithms/blob/main/javascript-401d9/challenges/assets/cc6.png?raw=true)
for more clear image see it more clear [click here](https://app.diagrams.net/#G1rxloby7oJBVvXKpCinqj0bd7bUrqTpIb)
### code challenge 07 :
![white board](https://github.com/tamaraalbilleh/data-structures-and-algorithms/blob/main/javascript-401d9/challenges/assets/cc7.png?raw=true)
for more clear image see it more clear [click here](https://app.diagrams.net/#G1rxloby7oJBVvXKpCinqj0bd7bUrqTpIb)


## Challenge
* Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
    * Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
    * Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
    * Define a method called toString which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"
* Add the following methods for the Linked List class:
    * append(value) which adds a new node with the given value to the end of the
    * insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node
    * insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node
* Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.
## Approach & Efficiency

### insert (value) :
1. create a new node
2.  check for if a the head points to null 
3. if so , make the node to be the head
4. if not, make the new node pointer to be the head pointer 
5. make the head to be the next pointer 
### big O
* time  :O( 1 )
* space :O ( 1 )
***
###  includes (value) :
1. checks if there is no nodes and return false if there isn't
2.  if there is , loops through the linked list searching for the value of the wanted node 
3. returns true if it does exists 
4. returns false if it doesn't exist
### big O
* time  :O( n )
* space :O ( 1 )
***
### toString () :
1. checks if there is no nodes and return false if there isn't
2.  if there is , loops through the linked list searching for the value of the wanted node 
3. returns true if it does exists 
4. returns false if it doesn't exist
### big O
* time  :O( n )
* space :O ( n )
***
### append (value) :
1. create a pointer to the head node
2. create a new node with the provided value
3. loop through the node until the end of the list 
4. add the node at the end 
### big O
* time  :O( n )
* space :O ( 1 )
***
### insertBefore (value, newVal) :
1. create a pointer to the head node
2. create a new node with the provided value
3. check if the head node value is equal to the value we want , if so add the new node before the head
4. in not , loop through the nodes and check every node for its next node value to find a match.
5. when found a match insert the new node before the match
6. if the list didn't have a match return an exception error
### big O
* time  :O( n )
* space :O ( 1 )
***
### insertAfter (insertBefore) :
1. create a pointer to the head node
2. create a new node with the provided value
3. loop through the nodes until you find a node with the value we are looking for
4. when found a match insert the new node after the match
6. if the list didn't have a match return an exception error
### big O
* time  :O( n )
* space :O ( 1 )
***
### kthFromEnd (k) :
1. create a pointer to the head node
2. define the wanted position to be the length of the list as a start
3. loop through the nodes as long as the pointer current refers to an actual node until position is equal to the input value every time decreasing the position by one
4. return the value of the current node 
6. if the provided value is less/ then the length or negative it throws an exception error
### big O
* time  :O( n )
* space :O ( 1 )
***
<br>

## API
* Insert: Takes in a value of any type and make add it to the head of the linked list .
* includes: Takes in a value of any type and checks if the value exists in the linked list .
* toString: does not take any argument , but returns a string with the values of the nodes in the linked list "{ a } -> { b } -> { c } -> NULL" and "NULL" only if there isn't any nodes in the linked list .
* append: Takes in a value of any type and add it to the tail of the linked list.
* insertBefore: takes in two values and add a new node before the other in the linked list.
* insertAfter: takes in two values and add a new node after the other in the linked list.
*  kthFromEnd: takes in an integer value and returns the value of the node that has this index backwards 