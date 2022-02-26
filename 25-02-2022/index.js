// alert("1234");
// document.write("Document write");
// console.log("It will write in console");

// function check_Odd_Or_Even(n) {
//     if(n%2 == 0) {
//         document.write("Even number");
//     } else {
//         document.write("Odd number");
    
//     }
// } 

// check_Odd_Or_Even(9);

// function square(n) {
//     // var sqr=n*n;
//     document.write(n*n);
// }

// square(12);

// function square(num) {
//     var sqr=num*num;
//     return sqr;
// }

// var input = prompt("Enter the number");
// input=parseInt(input);
// var output = square(input);
// document.write(output);

function add(a,b) {
    var sum = a+b;
    return sum;
    // return a+b;
}

var num1=prompt("Enter first number");
var num2=prompt("Enter second number");
num1=parseInt(num1);
num2=parseInt(num2);

var s = add(num1,num2);
document.write(s);