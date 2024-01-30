const print = console.log;


let numbers = [1,2,3,4,5,6,7,8,9]


// pop() pop off the last
// push() adds to back of array
// unshift() adds to front of array
// filter() filters out elements of array
// slice() removes element(s) of index
// map() manipulates and store as new array
// forEach() does a function for each array


    // function removeSeven(theArray){
    //     const firstPop = theArray.pop();
    //     const secondPop = theArray.pop();
    //     theArray.pop();
    //     theArray.push(secondPop);
    //     theArray.push(firstPop);

    //     print(theArray)
    // }

    // // removeSeven(numbers)

    // let result = numbers.slice(2);  // removes first 2 numbers
    // print("result:" + result)

    // let result1 = numbers.slice(1,3); // removes everything before the first number and everything after including the second number. E.g. output would be [2,3]


    // print("result 1: "+result1)

    // numbers.pop();
    // numbers.push(632);
    // numbers.unshift("jamaica");

    // print(numbers)


//CHALLENGE

const numberList = [1,2,3,4,5]
print(numberList)

function removeMiddleAddFive(array1){
    let getFirstNum = array1.slice(0);
    print(getFirstNum)
    let getSecondNum = array1.slice(-1);

    let newArray = [getFirstNum[0],5,getSecondNum[0]]
    print(newArray);
}

removeMiddleAddFive(numberList);



