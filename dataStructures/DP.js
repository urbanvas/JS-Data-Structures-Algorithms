// overlapping subproblems
// optimal substructure

const fib = (n, memo = [ undefined, 1, 1 ]) => {
	if (memo[n] !== undefined) {
		return memo[n];
	}
	const result = fib(n - 1, memo) + fib(n - 2, memo);
	memo[n] = result;
	return result;
};

// Tabulated Version

const fib = (n) => {
	if (n <= 2) {
		return 1;
	}
	const fibNums = [ 0, 1, 1 ];
	for (let i = 3; i <= n; i++) {
		fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
	}
	return fibNums[n];
};
