var changeIt = function() {
	document.getElementById("content").innerHTML = "changed.";
};

var threesAndFives = function (limit) {
	var sums = 0;
	for (var i = 0; i < limit; i += 3) {
		sums += i;
	};
	for (var j =0; j < limit; j += 5) {
		if (j % 3 !== 0) {
			sums += j;
		};
	};
	document.getElementById("tf").innerHTML = sums;
};

var evenFibs = function (limit) {
	var i = 0;
	var j = 1;
	var fib = i + j;
	var sum = 0;
	while (fib < limit) {
		i = j;
		j = fib;
		fib = i + j;
		if (fib % 2 === 0) {
			sum += fib;
		};
	};
	document.getElementById("evenFibs").innerHTML = sum;
};

var pm = function (limit) {
	var multiples = [];
	var square = Math.floor(Math.sqrt(limit));
	console.log(square);
	
	var isPrime = function (max) {
		for (var i = 2; i < max; i++){
			if (max % i === 0) {
				return false;
			};
		};
		return true;
	};
	
	var findMultiples = function (number) {
		for (var j = 2; j < square; j++) {
			if (number % j === 0) {
				console.log("checking to see if " + j + " is a prime number");
				if (isPrime(j)) {
					multiples.push(j);
				};
			};
		};
	};
	
	findMultiples(limit);
	console.log(multiples);
	document.getElementById("pm").innerHTML = multiples;
}