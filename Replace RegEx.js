/**
 * Clean the string
 *
 * Leave only alpha characters, space characters and exclamation marks, remove numbers and
these characters: %$&/£?@/. * Return all in capital letters */

function cleanString(input) {
	return input.replace(/[^a-z !]/gi, '')
				.toUpperCase();
	/**
		symbols to remove: [\d%$&/£?@.]/gi;
	*/

	//2:c
	let replaced = (input) => {
		return input.replace(/[\d%$&/£?@.]/gi, '')
					.toUpperCase();
	};
	console.log(replaced(input));
}
cleanString('We% place$ some& string/ here£ with? these@ 6/symbols.?!');
