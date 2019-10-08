// Selection Sort

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let lowest = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) {
				lowest = j;
			}
		}
		if (i !== lowest) {
			[ arr[i], arr[lowest] ] = [ arr[lowest], arr[i] ];
		}
	}
	return arr;
}

selectionSort([ 1, 3, 5, 4, 2, 6, 78, 9, 2, 1, 2 ]);
