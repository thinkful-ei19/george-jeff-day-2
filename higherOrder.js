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




// // DO NOT EDIT BETWEEN THESE LINES ----->
// // Return only names that begin with 'R'
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// const filteredNames = filter(myNames, function(name) {
//     // This is a "predicate function" - it's a function that only returns a boolean
//     return name[0] === 'R';
// });

// console.log(filteredNames) // => ['Rich', 'Ray']
// // <---- DO NOT EDIT BETWEEN THESE LINES

// // TASK: DEFINE YOUR FILTER FUNCTION BELOW:
// function filter(arr,fn){
//     let newArr = [];
//     // console.log('Filter function ::',fn(arr[0]));
//     for(let i = 0; i < arr.length; i++){
//         // console.log(arr[i].slice(0,1));
//         if(fn(arr[i])){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// function hazardWarningCreator(typeOfWarning){
//     let warningCounter = 0;
//     return function(location){
//         warningCounter++;
//         console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`)
//         console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`)
//     }
    
// }
// const rocksWarning = hazardWarningCreator('Rocks on the Road!')
// const hurricaneWarning = hazardWarningCreator('hurricane')
// const smurfsWarning = hazardWarningCreator('Army of Smurfs')
// rocksWarning('main st ')
// hurricaneWarning('Santa Monica Pier')
// smurfsWarning("New York City")

// let turtleMoving = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

// turtleMoving.filter(function(move){
//     if (move[0] >= 0 && move[1] >= 0){
//         console.log(move);
//     }
// })

// turtleMoving.map(function(move){
//     console.log(move[0] + move[1]);
// })

// turtleMoving.forEach(function(move){
//     console.log(move[0]);
//     console.log(move[1]);
// });

let code ="noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest".split(' ');
code.reduce(function(decode,word){
//    decode = ' ';
    if(word.length === 3 ){
        decode = decode.concat(" ");
    }
    else{
  decode = decode.concat(word[word.length-1].toUpperCase());
        
    }
    console.log('here the next letter',decode)
    return decode;
},'')
// code.reduce(function(decode,word){
//     console.log(word)
// })


