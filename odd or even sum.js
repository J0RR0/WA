function oddOrEven(array) {

	 return array.reduce((a,b) => a+b, 0) % 2 ? 'odd' : 'even';
}
console.log(oddOrEven([-1023, 1, -2]));

