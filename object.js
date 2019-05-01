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


const sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}

(function testKeyDeleter() {
  var obj = keyDeleter({
    foo: 'foo',
    bar: 'bar',
    bizz: 'bizz',
    bang: 'bang',
  });
