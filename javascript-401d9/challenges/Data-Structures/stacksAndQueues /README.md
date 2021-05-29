# Stacks and Queues 
a function that creates a new linked list and adds nodes in to it's head , checks if a certain value exists in the list and returns a string representing the value of all nodes in the linked list , adds a node to the end of the list , adds nodes before a certain value provided or after a certain value, finds a value of a backwards index and zip 2 linked list together and alternate their values .

## Whiteboard Process
### code challenge 10 : 
![white board](https://github.com/tamaraalbilleh/data-structures-and-algorithms/blob/main/javascript-401d9/challenges/assets/cc10.png?raw=true)
for more clear image see it more clear [click here](https://app.diagrams.net/#G1Bvlx6H18OBJsx9vjkUBtNLiHD74On-rW)


## Challenges
* Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
* Create a Stack class that has a top property. It creates an empty Stack when instantiated.
    * Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
    * Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value ,Should raise exception when called on empty stack.
    * Define a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack ,Should raise exception when called on empty stack.
    * Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the stack is empty.
* Create a Queue class that has a front property. It creates an empty Queue when instantiated.
    * Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
    * Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value ,Should raise exception when called on empty queue.
    * Define a method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue ,Should raise exception when called on empty queue.
    * Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the queue is empty.
## Approach & Efficiency

### push (value) :
1. create a new node
2. point the new node to the top
3. make the top to be the new node
4. increase the length of the stack by one
### big O
* time  :O( 1 )
* space :O ( 1 )
***
###  pop () :
1. if the top doesn't point to null :
2. create a new pointer to store the top pointer
3. let it point to null
4. decrease the length of the stack by one
5. if the top does point to null : throw exception Error
### big O
* time  :O( 1 )
* space :O ( 1 )
***
### peek () :
1. if the top doesn't point to null :
2. store the top value in a variable 
3. return the variable 
4. if the top does point to null : throw exception 
### big O
* time  :O( 1 )
* space :O ( 1 )
***
### isEmpty () :
1. if the top doesn't point to null :
2. return false
3. if the top does point to null :
4. return true 
### big O
* time  :O( n )
* space :O ( 1 )
***
### enqueue (value) :
1. create a new node 
2. check if the front doesn't point to null : 
3. check if the rear is pointing to null :
4. make the rear point to the new node 
5. make the next of front point to the rear
7. if not : make the next of the rear the new node 
8. make the rear to be the new node 
9. if the front points to null : 
10. make the new node to be the front 
11. make the rear to be after the front 
12. increase the length of the queue by one
### big O
* time  :O( 1 )
* space :O ( 1 )
***
### dequeue () :
1. check if the front doesn't point to null : 
2. define a new current pointer that points to the front 
3. let the front to be the fronts next node 
4. make current point to null
5. return current value 
6. if not : throw new exception error
7. decrease the length of the queue by one
### big O
* time  :O( 1 )
* space :O ( 1 )
***
### peek () :
1. check if the front exist :
2. return the front value 
3. if not : throw an exceptions
### big O
* time  :O( 1 )
* space :O ( 1 )
***
### isEmpty () :
1. check if the front exist :
2. return true 
3. else : 
4. return false 
### big O
* time  :O( n )
* space :O ( 1 )
***
<br>

## API
* push: Takes in a value of any type and make add it to the top of the stack .
* pop: removes a node from the top 
* peek: returns the top value of a stack
* isEmpty: indicates if the stack is empty or not 
* enqueue: Takes in a value of any type and make add it to the rear of the queue .
* dequeue: removes a node from the front  
* peek: returns the front value of a queue
* isEmpty: indicates if the queue is empty or not 
