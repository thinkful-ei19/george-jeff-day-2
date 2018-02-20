// function repeat(fn,num){
// for(let i=0;i<num;i++){
// fn()    
// }

// }
// repeat(hello,5)

// function hello(){
//     console.log("hello world");
// }
// function goodbye(){
//     console.log("goodbye world");
// }

// repeat(goodbye,5)




// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// TASK: DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr,fn){
    let newArr = [];
    // console.log('Filter function ::',fn(arr[0]));
    for(let i = 0; i < arr.length; i++){
        // console.log(arr[i].slice(0,1));
        if(fn(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}