# Repeated Words 

finds the first repeated word in a string using hashtables


### code challenge 31 :
- Write a function called repeated word that finds the first word to occur more than once in a string
    - Arguments: string
    - Return: string


## Approach & Efficiency
1. check if the value given is a string or not 
2. create a new hash table to store the values inside of it 
3. split the string value into words and store them inside the array 
4. convert each word to a lower case word
5. if the word as a key have values stored in it return them 
6. if it doesn't have any values add the values to that key
7. return null if there aren't any duplicates 
### 
### big O
* time  :O( n )
* space :O ( n )
***

## API : Whiteboard Process

![white board](https://github.com/tamaraalbilleh/data-structures-and-algorithms/blob/main/javascript-401d9/challenges/assets/cc24.png?raw=true)

for more clear image see it more clear [click here](https://app.diagrams.net/#G1FIVQiWem0vLd0AM_WLVEtq_bZvTk7Xq6)