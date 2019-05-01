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


// function validateKeys(object, expectedKeys) {
//   if (Object.keys(object).length !== expectedKeys.length) {
//     return false;
//   }

//   for (let i = 0; i <expectedKeys.length; i++) {
//     if (!Object.keys(object).find(expKey => expKey === expectedKeys[i])) {
//       return false;
//     }
//   } 
//   //why doesn't this work?
//   // else {for (let i =0; i < expectedKeys.length; i++) {
//   //   if (expectedKeys[i] in object) {
//   //     return true;}
// }

// const objectA = {
//   id: 2,
//   name: 'Jane Doe',
//   age: 34,
//   city: 'Chicago',
// };

// const objectB = {
//   id: 3,
//   age: 33,
//   city: 'Peoria',
//   hello: 'hi',
// };

// const expectedKeys = ['id', 'name', 'age', 'city'];

// let test1 = validateKeys(objectB, expectedKeys);
// console.log(test1);

// const loaf = {flour: 300, water: 210};
// for(let key in loaf){
//   console.log(key);
// }
// loaf.hydration = function(){
//   return ((this.water/this.flour) * 100);
// };
// console.log(loaf.hydration());

// const obj = {foo: 'foo', bar: 'bar', fum: 25, quux: 70};
// for(let key in obj){
//   console.log(`${key}: ${obj[key]}`);
// }


// const obj2 = {meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']}
// console.log(obj2.meals[3]);


// const obj3 = {name: 'Bud', 'job title': 'Programmer'};
// const obj4 = {name: 'Sally', 'job title': 'Student'};
// const obj5 = {name: 'Erin', 'job title': 'Unemployed'};

// const objArr = [obj3, obj4, obj5];
// objArr.forEach(object => console.log(`Job: ${object['job title']}, Name: ${object['name']}`));


//properties that aren't there

// function Employee(name, jobTitle) {
//   this.name = name;
//   this.jobTitle = jobTitle;
// }

// function Owner(name, jobTitle) {
//   this.name = name;
//   this.jobTitle = jobTitle;
// }


// const obj6 = new Employee('Bud', 'Programmer');
// const obj7 = new Employee('Sally', 'Student');
// const obj8 = new Owner('Erin', 'Unemployed');

// Employee.prototype.boss = 'Erin';

// console.log(obj6);

// const objArr2 = [obj6, obj7, obj8];

// objArr2.forEach(function(object) {
//   if ('boss' in object) {
//     console.log(`${object.jobTitle} ${object['name']} reports to ${object['boss']}`);
//   } else {
//     console.log(`${object['jobTitle']} ${object['name']} doesn't report to anybody.`);
//   }
// });


//cracking the code

const cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5,
};

function decode(word) {
  if (!(word[0] in cipher)) {
    return ' ';
  }
  else {
    for (let key in cipher) {
      if (key === word[0]) {  
        //return cipher[key];
        return word[cipher[key]-1];
      }
    }
  }
}

function decodeWords(string) {
  let result3 = [];
  let stringArray = string.split(' ');
  stringArray.forEach(message => result3.push(decode(message)));
  return result3.join('');


}

let stringExample = 'craft block argon meter bells brown croon droop';
let finalAnswer = decodeWords(stringExample);
console.log(finalAnswer);

function createCharacter(name, nickname, race, origin, attack, defense){
  return {name, nickname, race, origin, attack, defense, describe: function(){
    console.log(`${this.name} is a ${this.race} from ${this.origin}`);
  }, evaluateFight: function(character){
    let x = this.attack - character.defense;
    let y = character.attack - this.defense;
    if(x < 0){
      x = 0;
    }
    if(y < 0){
      y = 0;
    }
    return `Your opponent takes ${x} damage and you receive ${y} damage.` 
  }}};

let characters = [
  createCharacter('Gandalf the White', 'gandalf','Wizard','Middle Earth',10,6), 
  createCharacter('Bilbo Baggins', 'bilbo','Hobbit','The Shire',2,1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain',6,8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm',8,5)
];

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendale',7,5));
characters.find(char => char.nickname === 'aragorn').describe();
const hobbits = characters.filter(char => char.race === 'Hobbit');
const strong = characters.filter(char => char.attack > 5);