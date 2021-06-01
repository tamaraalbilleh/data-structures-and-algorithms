# code challenge 13 : 
## Multi-bracket Validation
create a function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:

* Round Brackets : ( )
* Square Brackets : [ ]
* Curly Brackets : { }

## Whiteboard Process
for more clear image see it more clear [click here](https://app.diagrams.net/#G1aFwICzPK8CbPe8Y1lOeSqv2-nSuDZBBs)
![white board](https://github.com/tamaraalbilleh/data-structures-and-algorithms/blob/main/javascript-401d9/challenges/assets/cc13.png?raw=true)

## Challenge
## Approach & Efficiency
### multiBracketValidation (input) :
1. define the brackets that are considered starters in an array and enders in another array
2. create a new stack
3. split the input and make an array out of it 
4. define a final array 
5. define a starter counter and an ender counter 
6. loop over the split array :
7. check if the item is one of the starters or the enders 
8. if it is an ender push it to the stack and increase the start counter 
9. if it is an ender and the stack is still not empty : 
10. define temp and change its value to complement the ender item correctly 
11. and peek on the stack and compar the peeked value with the temp value if equal push true to the final array and pop from stack and increase the ender counter, if not push false 
12. define a function that checks if a value is true or not
13. invoke this function as a callback to the every method which will return a boolean
14. return the value of (the previous boolean and if the starter and ender counters are equal)...
15. if no input is inserted return error
### big O
* time  :O ( 1 )
* space :O ( 1 )

***
<br>

## API

multiBracketValidation (input)  : takes in a string as an input and returns a boolean indicating if all the brackets and braces are closed after opening.