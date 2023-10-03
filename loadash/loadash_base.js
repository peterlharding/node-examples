

// See - https://lodash.info/


// Load the full build.
var _ = require('lodash');

// Load the core build.
var _ = require('lodash/core');

// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');
 
// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');
 
// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');


_.kebabCase('Foo Bar');
// => 'foo-bar'
 
_.kebabCase('fooBar');
// => 'foo-bar'
 
_.kebabCase('__FOO_BAR__');
// => 'foo-bar'
G
