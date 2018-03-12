// Doing FizzBuzz

// Do the loop to count up to one hundred
for (var i = 1; i <= 100; i++) {

// First check for a number that is divisable
// by five and also three with no reminder.  
// If yes, then print FizzBuzz and then continue.
	if (i % 5 === 0 && i % 3 === 0) { 
			console.log("FizzBuzz")
				continue;
	}
	
// Test for a number divisable by five
// with no reminder.  If yes, print Buzz
// and then continue.
 	if (i % 5 === 0) { 
			console.log("Buzz")
				continue;
 	}
 	
// Test for a number divisable by three
// with no reminder.  If yes, print Fizz
// and then continue.
 	if (i % 3 === 0) { 
		console.log("Fizz")
				continue;
 	}
 	
//  Print out the current iteration and number. 	
 		console.log("We are on iteration number: " + i);
}
