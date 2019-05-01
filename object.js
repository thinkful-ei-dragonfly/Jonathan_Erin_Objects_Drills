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
      this.fullName = `${this.firstName} ${this.lastName}`;
      return this.fullName;
    },
  };
  return person;
}

(function testPersonMaker() {
  var person = personMaker();
  if (typeof person !== 'object') {
    console.error('ERROR: `personMaker` must return an object');
    return false;
  }
  if (typeof person.fullName !== 'function') {
    console.error('ERROR: `fullName` must be a method');
    return false;
  }
  if (person.fullName() !== 'Paul Jones') {
    console.error(
      'ERROR: The value for `fullName` should be "Paul Jones" but was ' +
        person.fullName()
    );
    return false;
  }
  person.firstName = 'Lisa';
  person.lastName = 'Simpson';
  if (person.fullName() !== 'Lisa Simpson') {
    console.error(
      '`personMaker` is not using self reference correctly. ' +
        'When firstName set to "Lisa" and lastName set to "Simpson", ' +
        'should return "Lisa Simpson" but returned ' +
        person.fullName()
    );
  }
  console.log('SUCCESS: `updateObject` works correctly!');
})();


const sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
}
