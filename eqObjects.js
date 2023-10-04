const assertEqual = function(actual, expected) {
  let output = "";
  if (actual === expected) output = `Assertion Passed: [${actual}] === [${expected}]`;
  if (actual !== expected) output = `Assertion Failed: [${actual}] !== [${expected}]`;
  console.log(output);
};

//Takes in 2 objects and returns true if they are equal, false otherwise
const eqObjects = function(object1, object2) {
  let obj1_keys = (Object.keys(object1).sort())
  let obj2_keys = (Object.keys(object2).sort())
  if (obj1_keys.length !== obj2_keys.length) {
    return false
  } for (let i = 0; i < obj1_keys.length; i++) {
    if (obj1_keys[i] !== obj2_keys[i])
    return false
  } for (let i = 0; i < obj1_keys.length; i++) {
    if (object1[obj1_keys[i]] !== object2[obj2_keys[i]])
    return false
  }
  return true
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

a = Object.keys(shirtObject).length