function max(numbers) {
    let i = 0;
    let compareNum =numbers[0];
    while(i < numbers.length){
        if(numbers[i] > compareNum){
            compareNum = numbers[i];
        }
        // console.log("This my test",compareNum);
    i++;
    }
    return compareNum;
  }
  
  function min(numbers) {
      let i = 0;
      let compareNum =numbers[0];
      while(i<numbers.length){
          if(numbers[i] < compareNum){
              compareNum = numbers[i]
          }
          i++;
      }
   return compareNum;
  }
  
  /* From here down, you are not expected to 
     understand.... for now :)  
     
     
     Nothing to see here!
     
  */
  
  // tests
  
  function testFunctionWorks(fn, input, expected) {
    if (fn(input) === expected) {
      console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
      return true;
    } else {
      console.log(
        'FAILURE: `' +
          fn.name +
          '([' +
          input +
          '])` should be ' +
          expected +
          ' but was ' +
          fn(input)
      );
      return false;
    }
  }
  
  function testEmpty(fn) {
    if (fn([]) === null || fn([]) == undefined) {
      console.log(`SUCCESS: ${fn.name} works on empty arrays`);
      return true;
    } else {
      console.log(
        `FAILURE: ${fn.name} should return undefined or null for empty arrays`
      );
      return false;
    }
  }
  
  (function runTests() {
    // we'll use the variables in our test cases
    const numList1 = [-5, 28, 98, -20013, 0.7878, 22, 115];
    const realMin1 = numList1[3];
    const realMax1 = numList1[6];
    const numList2 = [0, 1, 2, 3, 4];
    const realMin2 = numList2[0];
    const realMax2 = numList2[4];
  
    const testResults = [
      testFunctionWorks(max, numList1, realMax1),
      testFunctionWorks(max, numList2, realMax2),
      testFunctionWorks(min, numList1, realMin1),
      testFunctionWorks(min, numList2, realMin2),
      testEmpty(max),
      testEmpty(min),
    ];
  
    const numPassing = testResults.filter(function(result) {
      return result;
    }).length;
    console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
  })();
//-----------------------------------------------------------------------------------------------
function average(numbers) {
<<<<<<< HEAD
    // your code goes here
=======
<<<<<<< HEAD
    // your code goes here
    let total = 0;
    numbers.forEach(function(number){
      total += number;
    })
    return total / numbers.length;
=======
   
    
>>>>>>> ae596d220f8e8e63208570da32706b05cf06ccc9
>>>>>>> 1b2e3de8750216514a0d884fc8de4a0ad402ae58
  }
  
  /* From here down, you are not expected to 
     understand.... for now :)  
     
     
     Nothing to see here!
     
  */
  
  // tests
  
  function testFunctionWorks(fn, input, expected) {
    if (fn(input) === expected) {
      console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
      return true;
    } else {
      console.log(
        'FAILURE: `' +
          fn.name +
          '([' +
          input +
          '])` should be ' +
          expected +
          ' but was ' +
          fn(input)
      );
      return false;
    }
  }
  
  (function runTests() {
    const numList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const correctAns1 = 5.5;
    const numList2 = [0, -1, 1];
    const correctAns2 = 0;
  
    const testResults = [
      testFunctionWorks(average, numList1, correctAns1),
      testFunctionWorks(average, numList2, correctAns2),
    ];
    const numPassing = testResults.filter(function(result) {
      return result;
    }).length;
    console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
  })();
//-----------------------------------------------------------------------    
