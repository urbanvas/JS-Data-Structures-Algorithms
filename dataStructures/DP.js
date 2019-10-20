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
