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
        // console.log(`(n=${n}) No fizz or buzz`);
        console.log(n);
    ;
}

//=========================================
// Prime number check
//=========================================

console.log(`==================== Prime Number Check ====================`);

// Fact: Next prime after 105 is 107
n = 727;

// Start looking for prime numbers upwards from n
let nextNumToCheckIfPrime = n + 1;

console.log(`Searching for a prime number higher than ${n}, starting with ${nextNumToCheckIfPrime}`);

/* keep looking until we find a prime number */
primeNumSearch: while(true) {

    // Start looking for a divisor less than current number
    let testDivisor = nextNumToCheckIfPrime - 1;

    // output debug message
    // console.log(`Testing divisor ${testDivisor} to see if ${nextNumToCheckIfPrime} is prime`);
    
    // Only need to test divisors 2 and higher
    while ((testDivisor > 1) && (nextNumToCheckIfPrime % testDivisor !== 0)) {
        testDivisor--;

        // output debug message
        // console.log(`Testing divisor ${testDivisor} to see if ${nextNumToCheckIfPrime} is prime`);
    }

    // If we found a prime number
    if (testDivisor == 1) {
        console.log(`Next prime number after ${n} is ${nextNumToCheckIfPrime}`);
        break primeNumSearch;
    } else {
        // console.log (`${nextNumToCheckIfPrime} is not prime.  Checking ${nextNumToCheckIfPrime+1}`);
        
        // Keep looking upwards
        nextNumToCheckIfPrime++;
    }
}

//=========================================
// Feeling Loopy
//=========================================

console.log(`==================== Feeling Loopy Part 1 ====================`);
// debugger;

const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// let cellArray = [``,``,``,``];
let cellNum = 1;
let lastLineOutput = false;
let cell1 = ``;
let cell2 = ``;
let cell3 = ``;
let cell4 = ``;

/* Loop through every character */
for (const c of csvData) {

    /* Look for new line sequence */
    if (c === `\n`) {
        console.log(cell1, cell2, cell3, cell4);
        
        cell1 = ``;
        cell2 = ``;
        cell3 = ``;
        cell4 = ``;

        cellNum = 1;
        lastLineOutput = true;
        continue;
    }

    /* Look for comma, if so advance to next cell */
    if (c === `,`) {
        cellNum++;
        continue;
    }
    
    /* Add character to end of current cell */
    switch (cellNum) {
        case 1:
            cell1 += c;
            break;
        case 2:
            cell2 += c;
            break;
        case 3:
            cell3 += c;
            break;
        case 4:
            cell4 += c;
            break;
    }

    lastLineOutput = false;
}

if (!lastLineOutput)
    console.log(cell1, cell2, cell3, cell4);

console.log(`==================== Feeling Loopy Part 2 ====================`);
// debugger;

const csvData2 = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;

cellNum = 1;
lastLineOutput = false;
cell1 = ``;
cell2 = ``;
cell3 = ``;
cell4 = ``;

/* Loop through every character */
for (const c of csvData2) {

    /* Look for new line sequence */
    if (c === `\n`) {
        console.log(cell1, cell2, cell3, cell4);
        
        cell1 = ``;
        cell2 = ``;
        cell3 = ``;
        cell4 = ``;

        cellNum = 1;
        lastLineOutput = true;
        continue;
    }

    /* Look for comma, if so advance to next cell */
    if (c === `,`) {
        cellNum++;
        continue;
    }
    
    /* Add character to end of current cell */
    switch (cellNum) {
        case 1:
            cell1 += c;
            break;
        case 2:
            cell2 += c;
            break;
        case 3:
            cell3 += c;
            break;
        case 4:
            cell4 += c;
            break;
    }

    lastLineOutput = false;
}

if (!lastLineOutput)
    console.log(cell1, cell2, cell3, cell4);

