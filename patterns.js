// FREQUENCY COUNTER

// Two arrays, return true if every value of array has a squared version in the second array. The frequencies must be the same.
function same(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};
	for (let val of arr1) {
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
	}
	for (let val of arr2) {
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
	}
	for (let key in frequencyCounter1) {
		if (!(key ** 2 in frequencyCounter2)) {
			return false;
		}
		if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
			return false;
		}
	}
	return true;
}

same([ 1, 2, 3, 2, 5 ], [ 9, 1, 4, 4, 11 ]);

// Valid Anagram
// Two Strings, is the second string an anagram of the first?

function validAnagram(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}

	const freqCount1 = {};
	const freqCount2 = {};

	for (const val of str1) {
		freqCount1[val] = (freqCount1[val] || 0) + 1;
	}
	for (const val of str2) {
		freqCount2[val] = (freqCount2[val] || 0) + 1;
	}

	for (const key in freqCount1) {
		if (!(key in freqCount2)) {
			return false;
		}
		if (freqCount2[key] !== freqCount1[key]) {
			return false;
		}
	}
	return true;
}

validAnagram('qwerty', 'ytrewq'); // true

// MULTIPLE POINTERS

// sumZero, accepts a sorted array of ints, return a new array that includes the first pair of ints that sum to zero. Return undefined otherwise.

function sumZero(arr) {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === 0) {
			return [ arr[left], arr[right] ];
		} else if (sum > 0) {
			--right;
		} else {
			++left;
		}
	}
}

sumZero([ -3, -2, -1, 0, 1, 2, 3 ]); // [-3,3]
sumZero([ -2, 0, 1, 3 ]); // undefined

// countUniqueValues, sorted array, that counts unique values in array.
// increment left ptr to be right - 1

function countUniqueValues(arr) {
	if (arr.length === 0) {
		return 0;
	}
	let unique = 1;
	let left = 0;
	let right = 1;
	while (right < arr.length) {
		if (arr[left] !== arr[right]) {
			console.log('arr left is', arr[left], 'right is ', arr[right]);

			unique++;
			right++;
		} else {
			left++;
		}
	}
	return unique;
}

countUniqueValues([ 1, 1, 1, 1, 2 ]);
countUniqueValues([ 1, 2, 3, 4, 5, 6, 7 ]);
countUniqueValues([ 1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13 ]);

// SLIDING WINDOW

// maxSubarraySum, params are an array of ints and a number n, find the max sum of n consecutive elements of the array

function maxSubarraySum(arr, num) {
	let maxSum = 0;
	let tempSum = 0;
	if (arr.length < num) return null;
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}
	tempSum = maxSum;
	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i];
		maxSum = Math.max(maxSum, tempSum);
	}
	return maxSum;
}

maxSubarraySum([ 2, 6, 9, 2, 1, 8, 5, 6, 3 ], 3);

// Divide and Conquer

// search, given sorted arr and num, find its index, else -1

function search(arr, val) {
	let min = 0;
	let max = arr.length - 1;

	while (min <= max) {
		let middle = Math.floor((min + max) / 2);
		if (arr[middle] < val) {
			min = middle + 1;
		} else if (arr[middle] > val) {
			max = middle - 1;
		} else {
			return middle;
		}
	}

	return -1;
}

search([ 1, 2, 3, 4, 5, 6 ], 4);

// Recursion

function factorial(num) {
	if (num === 1) {
		return 1;
	}
	return num * factorial(num - 1);
}

// Recursion helper way

function collectOddValues(arr) {
	let result = [];

	function helper(helperInput) {
		if (helperInput.length === 0) {
			return;
		}

		if (helperInput[0] % 2 !== 0) {
			result.push(helperInput[0]);
		}

		helper(helperInput.slice(1));
	}

	helper(arr);

	return result;
}

collectOddValues([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);

// Linear Search

function linearSearch(arr, val) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === val) return i;
	}
	return -1;
}

linearSearch([ 34, 51, 1, 2, 3, 45, 56, 687 ], 100);

// Binary Search

function binarySearch(arr, elem) {
	var start = 0;
	var end = arr.length - 1;
	var middle = Math.floor((start + end) / 2);
	while (arr[middle] !== elem && start <= end) {
		if (elem < arr[middle]) {
			end = middle - 1;
		} else {
			start = middle + 1;
		}
		middle = Math.floor((start + end) / 2);
	}
	return arr[middle] === elem ? middle : -1;
}

// Binary Naive Search in strings

function naiveSearch(long, short) {
	var count = 0;
	for (var i = 0; i < long.length; i++) {
		for (var j = 0; j < short.length; j++) {
			if (short[j] !== long[i + j]) break;
			if (j === short.length - 1) count++;
		}
	}
	return count;
}

naiveSearch('lorie loled', 'lol');
