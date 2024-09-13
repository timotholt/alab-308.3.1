console.log("Hello from javascript land.")

//============================================
// Fizz Buzz
//============================================

console.log(`==================== Fizz Buzz ====================`);

// Test numbers 1-100
for (let n = 1; n <= 100; n++) {

    // Divisible by 3?
    let divis3 = (n % 3 === 0);

    // Divisible by 5?
    let divis5 = (n % 5 === 0);

    // Divisible by both 3 and 5?
    let divis3and5 = divis3 && divis5;

    // Output the appropriate message
    if (divis3and5)
        console.log(`(n=${n}) Fizz Buzz`);
    else if (divis3)
        console.log(`(n=${n}) Fizz`);
    else if (divis5)
        console.log(`(n=${n}) Buzz`);
    else
        console.log(`(n=${n}) No fizz or buzz`);
}

//=========================================
// Prime number check
//=========================================

console.log(`==================== Prime Number Check ====================`);

// Fact: Next prime after 105 is 107
n = 105;

// Start looking for prime numbers upwards from n
let nextNumToCheckIfPrime = n + 1;
let searchingForNextPrime = true;

console.log(`Searching for a prime number higher than ${n}, starting with ${nextNumToCheckIfPrime}`);

/* keep looking until we find a prime number */
while (searchingForNextPrime) {

    // Assumption here, not fact
    // let currentTestNumberIsPrime = true;

    // Start looking for a divisor less than current number
    let testDivisor = nextNumToCheckIfPrime - 1;

    // output debug message
    console.log(`Testing divisor ${testDivisor} to see if ${nextNumToCheckIfPrime} is prime`);
    
    // Only need to test divisors 2 and higher
    while ((testDivisor > 1) && (nextNumToCheckIfPrime % testDivisor !== 0)) {
        testDivisor--;

        // output debug message
        console.log(`Testing divisor ${testDivisor} to see if ${nextNumToCheckIfPrime} is prime`);
    }

    // If we found a prime number
    if (testDivisor == 1) {
        searchingForNextPrime = false;
        console.log(`Next prime number after ${n} is ${nextNumToCheckIfPrime}`);
        break;
    } else {
        console.log (`${nextNumToCheckIfPrime} is not prime.  Checking ${nextNumToCheckIfPrime+1}`);
        
        // Keep looking upwards
        nextNumToCheckIfPrime++;
    }
}


