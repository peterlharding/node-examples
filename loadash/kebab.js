

// See - https://lodash.info/


// Load the full build.
const _ = require('lodash');

var one = _.kebabCase('Foo Bar');

console.log(`    _.kebabCase('Foo Bar') |${one}|`);
// => 'foo-bar'
 
const two = _.kebabCase('fooBar');

console.log(`     _.kebabCase('FooBar') |${two}|`);
// => 'foo-bar'
 
const three = _.kebabCase('__FOO_BAR__');

console.log(`_.kebabCase('__FOO_BAR__') |${three}|`);
// => 'foo-bar'

