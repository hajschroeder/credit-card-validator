//Business Logic

function isValid(creditNumber){
  const valid="This Card Is Valid"
  const notValid= "This Card Is Not Valid"
  const regex = new RegExp("^[0-9]+$");
  if(creditNumber.trim().length===0 || !regex.test(creditNumber)) {
    return notValid;
  }
  const creditArray = creditNumber.split("").map(Number);
  creditArray.reverse();
  const creditArrayMap = creditArray.map(function(element, index) {
    if(index % 2 === 0) {
      element *= 2;
    }
    return element;
  });
  let creditSum = 0;
  creditArrayMap.forEach(function(element){
    creditSum +=  element;
  });
  if (creditSum % 10 === 0){
    return valid;
  }
  else {
    return notValid;
  }
}

console.log(isValid("0404040404043434"));


// Tests:
// Test: "It can process a string representing the card number if every other digit is less or equal than 4."
// Code: isValid("0404040404043434")
// Expected Output: "This card number is valid."







// Notes about higher order array methods (map, reduce and filter)

// // from MDN:
// // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// // map examples
// const array = [0,1,2,3,4,5];
// const doubledArray = array.map(function(element) {
//   return element * 2;
// });
// // console.log(doubledArray);

// const arrayOfThingsILike = ["bubble baths", "kittens", "good books", "clean code"];
// const thingsILike = arrayOfThingsILike.map(function(thing) {
//   return "I like " + thing + "!";
// });
// thingsILike.join(" ");

// // reduce example
// const sum = array.reduce(function(previousElement, currentElement) {
//   return previousElement + currentElement; 
// });

// filter example
// const evens = array.filter(function(element) {
//   return element % 2 === 0;
// });

// console.log(evens);
// const practiceArray = [0, 1, 2, 3, 6, 7, 9];
// const practicePlusOne = practiceArray.map(function(element){
//   return element+1
// });

// console.log(practicePlusOne);

// const practiceWords = ["books", "phone", "pen", "plants"];
// const upperWords= practiceWords.map(function(element){
//   return element.toUpperCase();
// })

// console.log(upperWords);

