# code challenge 12 : 
## fifo Animal Shelter
Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.

## Whiteboard Process
for more clear image see it more clear [click here](https://app.diagrams.net/#G152k9XGDmUNyq9_PKnAZ5pd9hwRBjIION)
![white board](https://github.com/tamaraalbilleh/data-structures-and-algorithms/blob/main/javascript-401d9/challenges/assets/cc12.png?raw=true)

## Challenge
## Approach & Efficiency
### enqueue (value) :
1. check if the animal argument exists : 
2. check the type of the animal enqueued if equal 'cat' enqueue it to the cat queue , if equal to 'dog' enqueue it the dog queue , if other than that throw an error
3. if there is no animal argument throw an error
### big O
* time  :O ( 1 )
* space :O ( 1 )
***
### dequeue (pref) :
1. check if a preference is specified , if not return null
2. check if pref is cat : dequeue from the cat queue in the shelter and return the cat that was dequeued
3. check if pref is dog : dequeue from the dog queue in the shelter and return the dog that was dequeued
4. if the pref is other than cat or dog also return null
### big O
* time  :O( 1 )
* space :O ( 1 )
***
<br>

## API
* enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
* dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null.
