

// Exercise 1 Min Number
function printOdds(count) {

    if (count < 0) {

    
    for (let i = -1; i >= count; i--) {
       if (i % 2 != 0) {
        console.log(i);
       } 
    }
} else {

    for (let i = 1; i <= count; i++) {
        if (i % 2 != 0) {
         console.log(i);
        } 
     }

}

}

console.log(printOdds(-100));
console.log();
console.log(printOdds(100));


// Exercise 2 Old Enough To Drive
function checkAge(name, age){
    let oldEnough = `Congratulations ${name}, you're old enough to drive!`;
    let tooYoung = `Sorry ${name}, but you need to wait until you're 16. Want to ride shotgun?`;

    if (age < 16){
        console.log(tooYoung);
    } else {
        console.log(oldEnough);
    }

}

console.log(checkAge("Joe", 6));
console.log(checkAge("Jack", 61));
console.log(checkAge("Jane", 16));



// Exercise 3 Quadrant
function checkQuadrant(x,y){
    if (x > 0 && y > 0) {
        return "Quad 1";
    } else if (x < 0 && y > 0) {
        return "Quad 2";
    } else if (x < 0 && y < 0) {
        return "Quad 3";
    }   else if (x > 0 && y < 0) {
        return "Quad 4";
    }   else if (x == 0 && y != 0) {
        return "X Axis";
    }   else if (x != 0 && y == 0){
        return "Y Axis";
    }   else {
        return "Origin";
    }
}

console.log(checkQuadrant (0, 2));
console.log(checkQuadrant (1, 2));
console.log(checkQuadrant (-6, 18));



// Exercise 4 Triangle

function isValidTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a
} 

function checkTriangle(a, b, c) {
    let isValid = isValidTriangle(a, b, c);
    if (isValid) {
        if (a == b && b == c) {
            return `Equilateral Triangle`;
        }   else if ( a == b || b == c || a == c) {
            return `Isoscoles Triangle`;
        }   else {
            return `Scalene Triangle`;
        }
    } else {
        return `Invalid triangle.`;
    }
}

console.log(checkTriangle(2, 2, 2)); //should be Eqilateral
console.log(checkTriangle(1, 2, 2)); //should be Isoscoles
console.log(checkTriangle(1, 2, 3)); //should be Scalene
console.log(checkTriangle(1, 1, 2)); //should be Invalid



// Exercise 5 Data Plan

function dataUsage(planLimit, day, usage){
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingData = planLimit - usage;
    let remainingDays = periodLength - day;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;

    if (currentAvg > projectedAvg) {
        statusMsg = "EXCEEDING";
    } else if (currentAvg < projectedAvg) {
        statusMsg = "UNDERUTILIZING";
    }   else {
        statusMsg = "AT";
    }

    console.log(`${day} days used, ${remainingDays} day(s) remaining`);
    console.log(`Projected use: ${projectedAvg.toFixed(2)} GB per day `);
    console.log();
    console.log();
    console.log(`You're ${statusMsg} your average daily use by (${currentAvg.toFixed(2)} GB per day).`);
    console.log(`Continuing this usage, you'll end up using ${planLimit - (usage + projectedUsage)} GB from your data limit.`);
    console.log(`To remain below your limit, use no more than ${(remainingData / remainingDays).toFixed(2)} of GB per day.`);
}

dataUsageFeedback(100, 15, 56);
dataUsageFeedback(50, 15, 25);
dataUsageFeedback(100, 15, 22);




