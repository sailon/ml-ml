'use strict';

//TODO implement numModels

/**
 * Count the size of the hypothesis within the given set
 * @param {Array} set
 * @param {object} testFn The function that tests if a given input belongs to the hypothesis
 * @returns {int}
 */
var _countOccurances = function (set, testFn) {
	var count = 0;
	for (var i=0; i<set.length; i++) { // Count the occurances of the hypothesis in the set
		if (testFn(set[i])) {
			count++;
		}
	}
	return count;
};

/**
 * Determine the probability of a given hypothesis
 * @param {object} testFn The function that tests if a given input belongs to the hypothesis
 * @param {int} count
 * @param {Array} input
 * @param {int} numModels (Optional) # of models in H
 * @returns {float|boolean} Returns false if the hypothesis is not valid
 */
var _probability = function (testFn, count, input, numModels) {
	var isValid = true;
	var N = input.length;
	var prior = (1 / numModels) || 0.1;
	
	var x_bar = input.map(function (x, index) {
		if (testFn(x)) {
			var likelihood = Math.pow(1/count,N);

			return likelihood * prior;
		}
		else {
			isValid = false;
			return 0;
		}
	});

	if (!isValid) {
		return false;
	} else {
		return x_bar.reduce(function (total, x) {
			return total + x;
		});
	}
};


var Models = {

	/**
	 * Initializes the even number hypothesis model.
	 * @param {Array} set
	 * @param {Array} input The given input data
	 * @param {int} numModels (Optional) # of models in H
	 * @returns {float} The discrete Bayesian posterior
	 */
	even: function (set, input, numModels) {

		/**
		 * Hypothesis indicator function.
		 * @param {int} n
		 * @returns {boolean}
		 */
		var _test = function (n) {
			return (n % 2 === 0 && n !== 0);
		};

		var count = _countOccurances(set, _test); // # of occurences of the hypothesis in the set
		var probability = _probability(_test, count, input);

		return (!probability) ? 0 : probability;

	},

	/**
	 * Initializes the odd number hypothesis model.
	 * @param {Array} set
	 * @param {Array} input The given input data
	 * @param {int} numModels (Optional) # of models in H
	 * @returns {float} The discrete Bayesian posterior
	 */
	odd: function (set, input, numModels) {

		/**
		 * Hypothesis indicator function.
		 * @param {int} n
		 * @returns {boolean}
		 */
		var _test = function (n) {
			return (n % 2 !== 0 && n !== 0);
		};

		var count = _countOccurances(set, _test); // # of occurences of the hypothesis in the set
		var probability = _probability(_test, count, input);

		return (!probability) ? 0 : probability;

	},

	/**
	 * Initializes the mult3 number hypothesis model.
	 * @param {Array} set
	 * @param {Array} input The given input data
	 * @param {int} numModels (Optional) # of models in H
	 * @returns {float} The discrete Bayesian posterior
	 */
	mult3: function (set, input, numModels) {

		/**
		 * Hypothesis indicator function.
		 * @param {int} n
		 * @returns {boolean}
		 */
		var _test = function (n) {
			return (n % 3 === 0 && n > 2);
		};

		var count = _countOccurances(set, _test); // # of occurences of the hypothesis in the set
		var probability = _probability(_test, count, input);

		return (!probability) ? 0 : probability;

	},

	/**
	 * Initializes the mult4 number hypothesis model.
	 * @param {Array} set
	 * @param {Array} input The given input data
	 * @param {int} numModels (Optional) # of models in H
	 * @returns {float} The discrete Bayesian posterior
	 */
	mult4: function (set, input, numModels) {

		/**
		 * Hypothesis indicator function.
		 * @param {int} n
		 * @returns {boolean}
		 */
		var _test = function (n) {
			return (n % 4 === 0 && n > 2);
		};

		var count = _countOccurances(set, _test); // # of occurences of the hypothesis in the set
		var probability = _probability(_test, count, input);

		return (!probability) ? 0 : probability;

	},

	/**
	 * Initializes the mult5 number hypothesis model.
	 * @param {Array} set
	 * @param {Array} input The given input data
	 * @param {int} numModels (Optional) # of models in H
	 * @returns {float} The discrete Bayesian posterior
	 */
	mult5: function (set, input, numModels) {

		/**
		 * Hypothesis indicator function.
		 * @param {int} n
		 * @returns {boolean}
		 */
		var _test = function (n) {
			return (n % 5 === 0 && n > 2);
		};

		var count = _countOccurances(set, _test); // # of occurences of the hypothesis in the set
		var probability = _probability(_test, count, input);

		return (!probability) ? 0 : probability;

	},

	/**
	 * Initializes the mult6 number hypothesis model.
	 * @param {Array} set
	 * @param {Array} input The given input data
	 * @returns {object} The discrete Bayesian generative model
	 */
	mult6: function (set, input, numModels) {

		/**
		 * Hypothesis indicator function.
		 * @param {int} n
		 * @returns {boolean}
		 */
		var _test = function (n) {
			return (n % 6 === 0 && n > 2);
		};

		var count = _countOccurances(set, _test); // # of occurences of the hypothesis in the set
		var probability = _probability(_test, count, input);

		return (!probability) ? 0 : probability;

	},

	/**
	 * Initializes the mult7 number hypothesis model.
	 * @param {Array} set
	 * @param {Array} input The given input data
	 * @returns {object} The discrete Bayesian generative model
	 */
	mult7: function (set, input, numModels) {

		/**
		 * Hypothesis indicator function.
		 * @param {int} n
		 * @returns {boolean}
		 */
		var _test = function (n) {
			return (n % 7 === 0 && n > 2);
		};

		var count = _countOccurances(set, _test); // # of occurences of the hypothesis in the set
		var probability = _probability(_test, count, input);

		return (!probability) ? 0 : probability;

	},

	/**
	 * Initializes the mult8 number hypothesis model.
	 * @param {Array} set
	 * @param {Array} input The given input data
	 * @returns {object} The discrete Bayesian generative model
	 */
	mult8: function (set, input, numModels) {

		/**
		 * Hypothesis indicator function.
		 * @param {int} n
		 * @returns {boolean}
		 */
		var _test = function (n) {
			return (n % 3 === 0 && n > 2);
		};

		var count = _countOccurances(set, _test); // # of occurences of the hypothesis in the set
		var probability = _probability(_test, count, input);

		return (!probability) ? 0 : probability;

	},

	/**
	 * Initializes the mult9 number hypothesis model.
	 * @param {Array} set
	 * @param {Array} input The given input data
	 * @returns {object} The discrete Bayesian generative model
	 */
	mult9: function (set, input, numModels) {

		/**
		 * Hypothesis indicator function.
		 * @param {int} n
		 * @returns {boolean}
		 */
		var _test = function (n) {
			return (n % 9 === 0 && n > 2);
		};

		var count = _countOccurances(set, _test); // # of occurences of the hypothesis in the set
		var probability = _probability(_test, count, input);

		return (!probability) ? 0 : probability;

	},

	/**
	 * Initializes the mult10 number hypothesis model.
	 * @param {Array} set
	 * @param {Array} input The given input data
	 * @returns {object} The discrete Bayesian generative model
	 */
	mult10: function (set, input, numModels) {

		/**
		 * Hypothesis indicator function.
		 * @param {int} n
		 * @returns {boolean}
		 */
		var _test = function (n) {
			return (n % 10 === 0 && n > 2);
		};

		var count = _countOccurances(set, _test); // # of occurences of the hypothesis in the set
		var probability = _probability(_test, count, input);

		return (!probability) ? 0 : probability;

	},

	/**
	 * Initializes the powers of 2 hypothesis model.
	 * @param {Array} set
	 * @param {Array} input The given input data
	 * @param {int} numModels (Optional) # of models in H
	 * @returns {float} The discrete Bayesian posterior
	 */
	pow2: function (set, input, numModels) {

		/**
		 * Hypothesis indicator function.
		 * @param {int} n
		 * @returns {boolean}
		 */
		var _test = function (n) {
			return (n > 1 && (Math.pow(2, Math.ceil(Math.log2(n))) - n) === 0);
		};

		var count = _countOccurances(set, _test); // # of occurences of the hypothesis in the set
		var probability = _probability(_test, count, input);

		return (!probability) ? 0 : probability;

	},

	/**
	 * Initializes the powers of 3 hypothesis model.
	 * @param {Array} set
	 * @param {Array} input The given input data
	 * @param {int} numModels (Optional) # of models in H
	 * @returns {float} The discrete Bayesian posterior
	 */
	pow3: function (set, input, numModels) {

		/**
		 * Hypothesis indicator function.
		 * @param {int} n
		 * @returns {boolean}
		 */
		var _test = function (n) {
			return (n > 1 && (Math.pow(3, Math.ceil((Math.log(n)/Math.log(3)))) - n) === 0);
		};

		var count = _countOccurances(set, _test); // # of occurences of the hypothesis in the set
		var probability = _probability(_test, count, input);

		return (!probability) ? 0 : probability;

	},

	/**
	 * Initializes the powers of 4 hypothesis model.
	 * @param {Array} set
	 * @param {Array} input The given input data
	 * @param {int} numModels (Optional) # of models in H
	 * @returns {float} The discrete Bayesian posterior
	 */
	pow4: function (set, input, numModels) {

		/**
		 * Hypothesis indicator function.
		 * @param {int} n
		 * @returns {boolean}
		 */
		var _test = function (n) {
			return (n > 1 && (Math.pow(4, Math.ceil((Math.log(n)/Math.log(4)))) - n) === 0);
		};

		var count = _countOccurances(set, _test); // # of occurences of the hypothesis in the set
		var probability = _probability(_test, count, input);

		return (!probability) ? 0 : probability;

	},

	/**
	 * Initializes the powers of 5 hypothesis model.
	 * @param {Array} set
	 * @param {Array} input The given input data
	 * @param {int} numModels (Optional) # of models in H
	 * @returns {float} The discrete Bayesian posterior
	 */
	pow5: function (set, input, numModels) {

		/**
		 * Hypothesis indicator function.
		 * @param {int} n
		 * @returns {boolean}
		 */
		var _test = function (n) {
			return (n > 1 && (Math.pow(5, Math.ceil((Math.log(n)/Math.log(5)))) - n) === 0);
		};

		var count = _countOccurances(set, _test); // # of occurences of the hypothesis in the set
		var probability = _probability(_test, count, input);

		return (!probability) ? 0 : probability;

	},

};

module.exports = Models;
