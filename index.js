const print = console.log;


let numbers = [1,2,3,4,5,6,7,8,9]


// pop() pop off the last
// push() adds to back of array
// unshift() adds to front of array
// filter() filters out elements of array
// slice() removes element(s) by index (returns what was cut out)
// splice() removes element(s) by index  (returns what was left)
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


function removeMiddleAddFive(array1){
    let getFirstNum = array1.slice(0);
    let getSecondNum = array1.slice(-1);

    let newArray = [getFirstNum[0],5,getSecondNum[0]]
    print(newArray);
}

removeMiddleAddFive(numberList);


//FOREACH()
print(numberList)
numberList.forEach(addToConsoleAddOne);


function addToConsoleAddOne(element){
    print(element+1);
}
print("");

numberList.forEach(function (element){
    element -=2;
    print(element*5);
});





//FILTER()

print("")

const filteredArray = numberList.filter(overThree);
print(filteredArray);

function overThree(element){
    return element > 3;
}

print("")
const filteredArray1 = numberList.filter(onlyTwo);
print(filteredArray1);

function onlyTwo(element){
    return element == 2;
}

//CHALLENGE
print("")
const drink = ["vodka","tequila","kool-aid","capri-sun","schnapps","horse juice","blended kashmere sweaters"];

drink.forEach(function(element){
    print("i love drinking "+element);
})


const newArray=[];
const arrayLessThanFour = numberList.forEach(function(element){
    console.log('comparing: ', element)
    if(element < 4){
        console.log(element + ' is less than 4')
        newArray.push(element);
    }
})

print(newArray)

//CHALLENGE
print("")

// create new array with the doubles of the other numbers.
// create a for loop to add all numbers in the new array then output new num 


const randomNumArray = [30,444,1908,65,1100009,99900];
doubledNums = []

const numbersDoubled = randomNumArray.forEach(function(element){
    element = element*2;
    doubledNums.push(element)
})

print(doubledNums); 

const newArrayLength = doubledNums.length;
let total = 0;

for(var i=0;i<newArrayLength;i++){
    total += doubledNums[i];
}

print(total)