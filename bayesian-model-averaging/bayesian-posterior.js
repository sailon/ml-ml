'use strict';
/*
 * Simple script to demonstrate Posterior Predictive Distributions based on discrete Bayesian models.
 */

/**
 * Initializes the set, or classifier range.
 * @param {int} setStart The desired start point for the classifier range (inclusive)
 * @param {int} setEnd The desired end point for the classifier range (inclusive)
 * @returns {Array}
 */
function init(setStart, setEnd) {
	var set = [];
	for (var i=setStart; i <= setEnd; i++) {
		set.push(i);
	}
	return set;
}

var models = require('./models');
var _ = require('lodash');

// Set up basic variables
var setStart = 0;
var setEnd = 1000;

// Data points matching the rule
var input = [10, 20];

// Override defaults with command line args
process.argv.forEach(function (val, index) {
  var toks = val.split('=');
  if (toks[0] === 'start') {
  	setStart = toks[1];
  }
  if (toks[0] === 'end') {
  	setEnd = toks[1];
  }
  if (toks[0] === 'input') {
  	input = toks[1].split(',');
  }
});

// Run the models
var H = {}; // Hypothesis space
var total = 0;

for (var model in models) {
	H[model] = models[model](init(setStart, setEnd), input); // Store the result of the model in a self-named field
	total += H[model]; // Update the total probability of the hypothesis space
}

// Output the parameters
console.log('Domain: Positive integers from: ' + setStart + ' to ' + setEnd);
console.log('D = ' + input);

for (var h in H) {
	H[h] = (H[h] > 0) ? ((H[h] / total) * 100) : 0; // Normalize each hypothesis
	console.log( h + ': ' + H[h]); // Output the results
}
