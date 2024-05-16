// Example of 0(n)

function logItems(n){
    for (let i = 0; i < n; i++){
        console.log(i)
    }
};

//logItems(10);


/*
DROP CONSTANTS

Code runs n + n = 2n ----> O(2n) Operation
If there is a constant in the big O notation, drop the constant
O(2n) becomes O(n)

Another example: O(100n^2) becomes O(n^2) by dropping the 100 (constant)
*/

function logItemsTwo(n){
    for( let i = 0; i < n; i++){
        console.log(i)
    };

    for( let j = 0; j < n; j++){
        console.log(j)
    };

};

// logItemsTwo(3);


/*
EXAMPLE OF O(n^2)

Code runs n * n = n^2 -----> O(n^2)
If two sets code accomplishes the same task, one with O(n) and the other with O(n^2). The O(n) is better because it accomplishes the task with fewer operations. Writing code that follows O(n) is much more efficient
*/ 

function logItemsThree(n){
    for( let i = 0; i < n; i++){
        for( let j = 0; j < n; j++){
            console.log(i,j)
        };
    };

};

//logItemsThree(10)


/* 
DROP NON-DOMINANTS

Another method to simply BigO notations
The function below demonstrates the nested forloop + the standard forLoop

O(n^2) + O(n) = O(n^2 + n)

Within O(n^2 + n), "n^2" represents the dominant term while "n" represents the Non-Dominant term. Dropping the Non-Dominant requires removing the "n" term

O(n^2 + n) becomes O(n^2) when dropping the Non-Dominant

*/

function logItemsFour(n){
    // The nested for-loop ran O(n^2)
    for( let i = 0; i < n; i++){
        for( let j = 0; j < n; j++){
            console.log(i,j)
        };
    };

    // This for-loop ran O(n)
    for( let k = 0; k < n; k++){
        console.log(k)
    };

};

//logItemsFour(10);

/*
EXAMPLE OF O(1)

O(1) is the most efficient BigO operations
Often referred to as Constant Time

*/

function addItems(n) {
    return n + n;
}


/*
EXAMPLE OF O(log n)
Technique is called "Divide and Conquer"

Very flat and efficient on a graph

*/

/*
Different Terms of Input

*/

function logItemsDifferentTerms(a, b){
    // The top for-loop represents O(a)
    for( let i = 0; i < a; i++){
        console.log(i)
    };

    // This for-loop represents O(b)
    for( let j = 0; j < b; j++){
        console.log(j)
    };

    //When added together, you end up with O(a + b)

    // For nested for loops, you will multiply
    for( let i = 0; i < a; i++){
        for( let j = 0; j < b; j++){
            console.log(i,j)
        };
    };

    // So you will end up with O(a * b) in a nested situation with different terms
};


/*
EXAMPLE OF bigO ARRAYS
.push & .pop are O(1) operations

O(n), n = the number of items inside the array
If the array has to re-index the items inside, that is considered an O(n) operation.
If you search by value, that is an O(n) operation.
If you search by index, that is an O(1) operation.

*/

let myArray = [11,3, 23, 7];
myArray.push(17);
myArray.splice (1, 0, "Hello");


/*
QUICK REFERENCE

O(n^2) --> Loop within a Loop
O(n) --> Proportional
O(log n) --> Divide and Conquer
O(1) -- Constant

*Considered the Big 4
*/ 
