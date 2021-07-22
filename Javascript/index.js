document.getElementById("header").innerHTML = "Hello World from js file";
/ var number1 = 1;
  // console.log(number1);
  // // es6 we can use let/const
  // let number2 = 2;
  // console.log(number2);
  // hoisting
  // console.log(number);
  // var number = 1;
  // const number = 1;
  
  // block scoping
  // {
  //   let name = "Yagnesh";
  //   console.log(name);
  // }
  // console.log(name);
  // we cannot redefine variable if we use const keyword
  // const number = 1;
  // console.log(number);
  // number = 2;
  // console.log(number);
  
  
  // // Primitive types
  // // string
  // let name = "String";
  // console.log(name);
  // // number
  // let number = 1;
  // console.log(number);
  
  // // boolean
  // console.log(true);
  
  // // undefined
  // let notDefined = undefined;
  // console.log(notDefined);
  
  // // null
  // let selectColor = null;
  // console.log(selectColor);


  // reference types
  // object
  
  // let object = {
  //   name: "Yagnesh",
  //   age: 32,
  //   gender: "male",
  // };
  // console.log(object);
  // console.log(object.age);
  // console.log(object.gender);
  
  // console.log(object.name);
  // console.log(object['name']);
  
  // array
//   let colors = ["red", "blue"];
//   // 0
//   // 1
//   console.log(colors);
//   console.log(colors[0]);
//   console.log(colors[1]);
//   colors[2] = "green";
//   console.log(colors[2]);
//   console.log(colors.length);
  
  // function
// function
// function greet() {
//     return "Hello World from function";
//   }
//   console.log(greet());
  
//   // function sum(a, b) {
//   //   return a + b;
//   // }
  
//   // Es6 arrow function
//   const sum = (a, b) => a + b;
  
//   console.log(sum(5, 5));
  
// mathematics operator 
// let x = 10;
// let y = 3;
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);
// // x raise to y
// // increment operator
// console.log(x++);
// console.log(x);

// console.log(--y);

// assignment operator
// let x = 10;
// // console.log(x++);
// // console.log(x);
// // x += 5;
// // x =x +5;
// x *= 5;
// // x=x*5
// console.log(x);

// comparison operator
// let x = "5";
// // console.log(x >= 5);

// console.log(x == 5);
// console.log(x === 5);
// console.log(typeof x);

// if hour is between 6 to 12 return 'Good morning;
// if hour is between 12 to 18 return 'Good afternoon'
// otherwise return 'Good evening
// ternary operator (conditional based)
// const points = 90;
// let type = points > 100 ? "Gold" : "Silver";
// console.log(type);

// const hour = 21;
// console.log(hour);

// if (hour > 6 && hour <= 12) {
//   console.log("Good morning");
// } else if (hour > 12 && hour <= 18) {
//   console.log("Good afternoon");
// } else {
//   console.log("Good evening");
// }

// logical operator
// console.log(false || true);
// let highIncome = true;
// let goodScore = true;
// let eligibleForLoan = highIncome && goodScore;
// console.log(eligibleForLoan);
// let refusedForLoan = !eligibleForLoan;
// console.log(refusedForLoan);

// let a = "Red";
// let b = "Blue";
// let c = a;
// a = b;
// // a ,b= 'Blue'
// b = c;
// // a ='Blue' ,b='red'
// console.log(a);
// console.log(b);
// you can redefine to another variable but not redefine the variable
// Blue
// Red

// switch case

// switch (role) {
//   case "guest":
//     console.log("Guest user");
//     break;
//   case "moderator":
//     console.log("Moderator user");
//     break;
//   default:
//     console.log("Unknown User");
// }
// let role = "";
// console.log(role);
// if (role === "guest") console.log("Guest user");
// else if (role === "moderator") console.log("Moderator user");
// else console.log("Unknown User");


// FizzBuzz

// define one input =3;
// if number is divisible by 3 then i want output of 'Fizz'
// if number is divisible by 5 then i want output of 'Buzz'
// if number is divisible by both 3 & 5 then i want output of 'FizzBuzz'
// if type of input is not equal to 'number' then i want output of 'Not a number'
// Answer
// let input;
// if (input % 3 === 0 && input % 5 === 0) {
//   console.log("FizzBuzz");
// } else if (input % 3 === 0) {
//   console.log("Fizz");
// } else if (input % 5 === 0) {
//   console.log("Buzz");
// } else if (typeof input !== "number") {
//   console.log("Not a number");
// } else {
//   console.log(input);
// }
// for loop
// for (let i = 0; i < 10; i++) {
//   if (i % 2 !== 0) {
//     console.log(i, "HEllo world");
//   }
// }

// while loop
// let i = 10;
// while (i < 10) {
//   console.log(i, "Hello world");
//   i++;
// }

// do while loop
// in do while loop it will iterate for first time and then it will check for condition
// let i = 11;
// do {
//   console.log("Hello world");
//   i++;
// } while (i < 10);

// for in
// const objectData = {
//   name: "Yagnesh",
//   age: 32,
// };
// for (const key in objectData) {
//   console.log(key, objectData[key]);
// }

// const colors = ["red", "green", "blue"];
// // array has index
// for (const index in colors) {
//   console.log(index,colors[index]);
// }

// for of
// ES6 introduced
// iterate objects as well as array
// const colors = ["red", "green", "blue"];
// for (const iterator of colors) {
//   console.log(iterator);
// }
// const objectData = {
//   name: "Yagnesh",
//   age: 32,
// };
// for (const [key] of Object.entries(objectData)) {
//   console.log(key);
//   console.log(objectData[key]);
// }

// array methods
// const numbers = [3, 4];
// // end
// numbers.push(5, 6);
// // beginning
// numbers.unshift(1, 2);

// // middle
// numbers.splice(3, 0, 10, 11);
// console.log(numbers);

// find
// primitive
// const numbers = [1, 2, 3, 4];
// // console.log(numbers.indexOf("a"));
// console.log(numbers.includes('a'));

// reference
// const courses = [
//   {
//     id: 1,
//     name: "HTML",
//   },
//   {
//     id: 2,
//     name: "CSS",
//   },
//   {
//     id: 3,
//     name: "Javascript",
//   },
// ];
// const findCourse = courses.find((course) => course.id === 3);
// const index = courses.findIndex((course) => {
//   return course.name === "HTML";
// });
// console.log(index);
// console.log(findCourse);

// remove element from array
// // end
// numbers.pop();
// // console.log(numbers);

// // start
// numbers.shift();
// // console.log(numbers);

// // middle
// numbers.splice(1, 1);
// console.log(numbers);

// completely empty the array
// const numbers = [1, 2, 3, 4, 5];
// // console.log(numbers.length);
// // let another = numbers;
// // console.log(another);
// // numbers=[];
// // console.log(numbers);
// // numbers.length = 0;
// // console.log(numbers);
// // numbers.splice(0, numbers.length);
// // console.log(numbers);
// for (let i = 0; numbers.length > 0; i++) {
//   numbers.pop();
// }
// console.log(numbers);
const numbers = [1, 2, 3, 4, 5, 6];
let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   sum += element;
//   console.log(sum);
// }
const sumOfArray = numbers.reduce((p, c, i) => {
  if (i === 0) {
    return [...p, c];
  }
  return [...p, c + c-1];
}, []);
console.log(sumOfArray);
// const sumFind = (array) => {
//   if (array === null) {
//     return 0;
//   }
//   return array.slice({ ...array }, { ...array }));
// };
// console.log(sumFind([1, 2, 3, 4, 5]));

// get sum of these elements in array
// iterate it using loop
// if i add one more variable then sum should change accordingly

// // combining array
// const first = [1, 2, 3];
// const second = [4, 5, 6];
// // concat
// // const combined = first.concat(second);
// // console.log(combined);

// // spread operator
// const combined = [...first, 9, 10, ...second];
// console.log(combined);

// iterating an array
// for each method
// const numbers = [1, 2, 3, 4, 5];
// const iterate = numbers.forEach((x) => console.log(x));

// // filter
// const courses = [
//   {
//     id: 1,
//     name: "HTML",
//   },
//   {
//     id: 2,
//     name: "CSS",
//   },
//   {
//     id: 3,
//     name: "Javascript",
//   },
// ];
// const filteredData = courses.filter((course) => course.id === 1);
// console.log(filteredData);

// map
// to manipulate data
// const courses = [
//   {
//     id: 1,
//     name: "HTML",
//   },
//   {
//     id: 2,
//     name: "CSS",
//   },
//   {
//     id: 3,
//     name: "Javascript",
//   },
// ];

// const editedData = courses.map((course) => {
//   if (course.name === "HTML") {
//     return { ...course, name: "React JS" };
//   }
//   if (course.name === "CSS") {
//     return { ...course, name: "MySQL" };
//   }
//   return course;
// });
// console.log(editedData);

// const data2 = courses.map((course) => course);
// console.log(data2);

// reduce method (loop)
// it is the most powerful loop among all loops
const numbers = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);

const sum = numbers.reduce((previous, current) => {
  return previous + current;
  // 0+1
  // 1+2
  // 2+3
}, 0);
console.log(sum);

const data = [
  {
    name: "Virat",
    gender: "male",
    age: 35,
  },
  {
    name: "Rohit",
    gender: "male",
    age: 37,
  },
  {
    name: "Deepika",
    gender: "female",
    age: 36,
  },
  {
    name: "Priyanka",
    gender: "female",
    age: 38,
  },
];
// group by gender in array using reduce loop
//  [
//     male :{
//         {
//             name: "Virat",
//             gender: "male",
//             age: 35,
//           },
//           {
//             name: "Rohit",
//             gender: "male",
//             age: 37,
//           },
//     }
//     , female:{
//         {
//             name: "Deepika",
//             gender: "female",
//             age: 36,
//           },
//           {
//             name: "Priyanka",
//             gender: "female",
//             age: 38,
//           },
//     }
// ]

const data = [
    {
      name: "Virat",
      gender: "male",
      age: 35,
    },
    {
      name: "Rohit",
      gender: "male",
      age: 37,
    },
    {
      name: "Deepika",
      gender: "female",
      age: 36,
    },
    {
      name: "Priyanka",
      gender: "female",
      age: 38,
    },
  ];
  
  const groupByGender = data.reduce((p, c) => {
    if (p[c.gender]) {
      p[c.gender].push(c);
    } else {
      p[c.gender] = [c];
    }
    return p;
  }, []);
  console.log(groupByGender);
  
  

// string literal
// const name = "Rohit";
// const age = 32;
// console.log(`My name is ${name} and my age is ${age}`);

// classes
// es6
// const name = "Dog";
// function greet() {
//   return `Animal name is ${name}`;
// }
// console.log(greet());
// if we define any function inside this class it is called method not function
// and if we define outside of the class then it is called function
class Animals {
  constructor(name) {
    this.name = name;
  }
  //   getter and setter
  set name(name) {
    this._name = name[0].toUpperCase() + name.slice(1).toLowerCase();
  }
  get name() {
    return this._name;
  }
  //   static method will not change in future also
  static greet() {
    return "Animals are the best";
  }
  printname() {
    return `Animal name is ${this.name}`;
  }
}
// main keywords are extend , super to access variable as well as method of parent class
class Dog extends Animals {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  printname() {
    const data = super.printname();
    return `${data} and it's breed is ${this.breed}`;
  }
}
const puffy = new Dog("puffy", "St Bernard");
console.log(puffy);
console.log(puffy.printname());
const rocky = new Dog("rocky", "German Shepherd");
console.log(rocky);
console.log(rocky.printname());

// console.log(Animals.greet());
// const dog = new Animals("dOG");
// console.log(dog.printname());
// console.log(dog.name);
// const cat = new Animals("cat");
// console.log(cat.printname());
// console.log(cat.name);
