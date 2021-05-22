# Singly Linked Lists
a function that creates a new linked list and adds nodes in to it's head , checks if a certain value exists in the list and returns a string representing the value of all nodes in the linked list.
## Whiteboard Process
![white board](https://github.com/tamaraalbilleh/data-structures-and-algorithms/blob/main/javascript-401d9/challenges/assets/cc5.png?raw=true)
for more clear image see it more clear [click here](https://app.diagrams.net/#G1rxloby7oJBVvXKpCinqj0bd7bUrqTpIb)

## Challenge
* Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
    * Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
    * Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
    * Define a method called toString which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"

## Approach & Efficiency

### insert () :
1. create a new node
2.  check for if a the head points to null 
3. if so , make the node to be the head
4. if not, make the new node pointer to be the head pointer 
5. make the head to be the next pointer 
### big O
* time  :O( 1 )
* space :O ( 1 )

###  includes () :
1. checks if there is no nodes and return false if there isn't
2.  if there is , loops through the linked list searching for the value of the wanted node 
3. returns true if it does exists 
4. returns false if it doesn't exist
### big O
* time  :O( n )
* space :O ( 1 )

### toString () :
1. checks if there is no nodes and return false if there isn't
2.  if there is , loops through the linked list searching for the value of the wanted node 
3. returns true if it does exists 
4. returns false if it doesn't exist
### big O
* time  :O( n )
* space :O ( n )
## API
* Insert: Takes in a value of any type and make add it to the head of the linked list .
* includes: Takes in a value of any type and checks if the value exists in the linked list .
* toString: does not take any argument , but returns a string with the values of the nodes in the linked list "{ a } -> { b } -> { c } -> NULL" and "NULL" only if there isn't any nodes in the linked list .
