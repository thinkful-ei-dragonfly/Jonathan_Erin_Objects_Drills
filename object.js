'use strict';
// function createMyObject(){
//   return {foo: 'bar', answerToUniverse: 42, 'olly olly': 'oxen free', sayHello: function(){
//     return 'hello';
//   }};
// }

// function updateObject(obj){
//   obj.foo = 'foo';
//   obj.bar = 'bar';
//   obj['bizz'] = 'bizz';
//   obj['bang'] = 'bang';
//   return obj;
// }


// function personMaker() {
//   let person = {
//     firstName: 'Paul',
//     lastName: 'Jones',
//     fullName: function() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//   };
//   return person;
// }

// function keyDeleter(obj) {
//   delete obj.foo;
//   delete obj.bar;
//   return obj;
// }

// function makeStudentsReport(data){
//   let result = [];
//   for(let i = 0; i < data.length; i++){
//     result.push(`${data[i].name}: ${data[i].grade}`);
//   }
//   return result;
// }

//why the second return?
// function enrollInSummerSchool(students){
//   return students.map(student => {
//     return {    
//       name: student.name,
//       status: 'In Summer School',
//       course: student.course,
//     };
//   });
// }

// const scratchData = [
//   { id: 22, foo: 'bar' },
//   { id: 28, foo: 'bizz' },
//   { id: 19, foo: 'bazz' },
// ];

// function findById(items, idNum) {
//   return items.find(value => value.id === idNum);
// }

// let example = findById(scratchData, 19);
// console.log(example);


function validateKeys(object, expectedKeys) {
  if (Object.keys(object).length !== expectedKeys.length) {
    return false;
  }

  for (let i = 0; i <expectedKeys.length; i++) {
    if (!Object.keys(object).find(expKey => expKey === expectedKeys[i])) {
      return false;
    }
  } 
  //why doesn't this work?
  // else {for (let i =0; i < expectedKeys.length; i++) {
  //   if (expectedKeys[i] in object) {
  //     return true;}
}

const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
  hello: 'hi',
};

const expectedKeys = ['id', 'name', 'age', 'city'];

let test1 = validateKeys(objectB, expectedKeys);
console.log(test1);

const loaf = {flour: 300, water: 210};
for(let key in loaf){
  console.log(key);
}
loaf.hydration = function(){
  return ((this.water/this.flour) * 100);
};
console.log(loaf.hydration());

const obj = {foo: 'foo', bar: 'bar', fum: 25, quux: 70};
for(let key in obj){
  console.log(`${key}: ${obj[key]}`);
}

const obj2 = {meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']}
console.log(obj2.meals[3]);

const obj3 = {name: 'Bud', 'job title': 'Programmer'};
const obj4 = {name: 'Sally', 'job title': 'Student'};
const obj5 = {name: 'Erin', 'job title': 'Unemployed'};

const objArr = [obj3, obj4, obj5];
objArr.forEach(object => console.log(`Job: ${object['job title']}, Name: ${object['name']}`));