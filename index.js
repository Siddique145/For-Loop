//1.Basic For loop
console.log("1.Basic For Loop");
for (var i = 1; i <= 5; i++){
console.log(i);
}
//2.Summation with For Loop:
console.log("2.Summation with For Loop:");
var sum = 0;
for (var i = 1; i <= 0; i++){
    sum += i;
}
console.log("Sum of numbers from 1 to 10:",sum);

//3.Reverse Counting with For Loop;
console.log("3.Reverse Counting with For Loop;");
for (var i = 10; i >= 1; i--) {
    console.log(i);
}

// 4. Multiplication Table with For Loop:
console.log("4. Multiplication Table with For Loop:");
var number = 5; 
for (var i = 1; i <= 10; i++) {
    console.log({number} * {i} == {number} * {i});
}
// 5. Conclusion:
console.log("5. Conclusion:");
// 6. Pattern Printing with For Loop:
console.log("6. Pattern Printing with For Loop:");
for (var a = 1; a <= 5; a++) {
    var row = '';
    for (var k = 1; k <= a; k++) {
        row += '* ';
    }
    console.log(row);
}

for (var a = 1; a <= 5; a++){
    var line = '';
    for( var k = 1; k <= a; k++){
        line += '* '
    }
    console.log(line);
}


