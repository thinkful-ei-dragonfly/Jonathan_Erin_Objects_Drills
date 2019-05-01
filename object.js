'use strict';
function createMyObject(){
  return {foo: 'bar', answerToUniverse: 42, 'olly olly': 'oxen free', sayHello: function(){
    return 'hello';
  }};
}

function updateObject(obj){
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj['bizz'] = 'bizz';
  obj['bang'] = 'bang';
  return obj;
}


function personMaker() {
  let person = {
    firstName: 'Paul',
    lastName: 'Jones',
    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
  return person;
}

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}

function makeStudentsReport(data){
  let result = [];
  for(let i = 0; i < data.length; i++){
    result.push(`${data[i].name}: ${data[i].grade}`);
  }
  return result;
}

function enrollInSummerSchool(students){
  return students.map(student => {
    return {    
      name: student.name,
      status: 'In Summer School',
      course: student.course,
    };
  });
}