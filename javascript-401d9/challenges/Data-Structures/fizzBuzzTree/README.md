# code challenge 18: “FizzBuzz” on a k-ary tree
Write a function called FizzBuzzTree which takes a k-ary tree as an argument.
Without utilizing any of the built-in methods available to your language, determine whether or not the value of each node is divisible by 3, 5 or both. Create a new tree with the same structure as the original, but the values modified as follows:
* If the value is divisible by 3, replace the value with “Fizz”
* If the value is divisible by 5, replace the value with “Buzz”
* If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
* If the value is not divisible by 3 or 5, simply turn the number into a String.
> Return a new tree.


## Whiteboard Process : 18
for more clear image see it more clear [click here](https://app.diagrams.net/#G15TKBOUfCIdca3z4AogLSfSg0P1XOCgMJ)
![white board](https://github.com/tamaraalbilleh/data-structures-and-algorithms/blob/main/javascript-401d9/challenges/assets/cc18.png?raw=true)


## Challenge
## Approach & Efficiency
### fizzBuzzTree(tree) :
1. if the tree don't have a root return this tree has no root node
2. make a new tree from the old tree 
3. define a traverse method to traverse through the tree 
4. check every node value if it devisable by three replace the value with the word Fizz
5. check every node value if it devisable by five replace the value with the word Buzz
6. check every node value if it devisable by three and five replace the value with the word FizzBuzz
7. check every node value if it non devisable by three nor five replace the value with the string of that number 
8. check if the original tree have a root : traverse on the root 
9. return the new tree.
### big O
* time  :O ( n2 )
* space :O ( n )
***

<br>

## API
- fizzBuzzTree : takes in a k-ary tree and returns a tree that have the word 'Buzz' in the place of the values that are divisible by 5 , 'Fizz' in the place of the values that are divisible by 3 , and 'FizzBuzz' in place of values that are divisible by 3 and 5 , and If the value is not divisible by 3 or 5 turns the number into a String of that number .