# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install Patty467/lotide`

**Require it:**

`const _ = require('Patty467/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEual(...)`: Asserts if two arrays are equal
* `assertEqual(...)`: Tests to see if the assertions are correct or not
* `assertObjectsEqual(...)`: Takes in 2 objects and returns true if they are equal and false otherwise
* `countLetters(...)`: Takes in a sentence and returns a count of each of the letters in the sentence
* `countOnly(...)`: Takes in a collection of items and returns a specific subset of those items
* `eqArrays(...)`: Returns true if the 2 input arrays are equal, and otherwise false
* `eqObjects(...)`: Takes in 2 objects and returns true if they are equal, false otherwise
* `findKey(...)`: Takes in an object and callback and returns the first key that meets the criteria specificed in the callback
* `findKeyByValue(...)`: Takes in an object and a value and returns the first key that corresponds to that value
* `flatten(...)`: Takes in an array that contains elments, including nested arrays of elements, and returns a flattened version of the array.
* `head(...)`: Retrives the first element of an array
* `letterPositions(...)`: Takes in a string and returns all indices of letter positions in the string
* `map(...)`: Takes in an array and a callback and returns a new array based on the results of the callback on each item in the array
* `middle(...)`: Takes in an array and returns the middle most element of the array
* `tail(...)`: Returns the tail of an array
* `takeUntil(...)`: Takes in an array and callback and returns a slice of the array based on the criteria specificed in the callback
* `without(...)`: Takes in a source array, and an itemsToRemove array, and returns only the itmes from the source array that are not in the itemsToRemove array