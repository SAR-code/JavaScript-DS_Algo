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

