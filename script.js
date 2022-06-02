 num = 266219;
var arr = [],
    numString = num.toString(),
    array=[];

for (let i = 0, len = numString.length; i < len; i++) {
    arr.push(+numString.charAt(i));
}
var  multiplication = console.info(eval((arr).join('*')));
let degree = multiplication**3;
// var degree = Math.pow (multiplication, 3);

var degreeString = degree.toString();

for (let i = 0; i < 2; i++) {
    array.push(+numString.charAt(i));
}
console.log(array);
