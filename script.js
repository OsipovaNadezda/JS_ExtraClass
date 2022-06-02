let num = 266219;
let arr = [],
    numString = num.toString(),
    array=[];

for (let i = 0, len = numString.length; i < len; i++) {
    arr.push(+numString.charAt(i));
}
let  multiplication = console.info(eval((arr).join('*')));
let degree = multiplication**3;
// var degree = Math.pow (multiplication, 3);
let degreeString = degree.toString();

for (let i = 0; i < 2; i++) {
    array.push(+numString.charAt(i));
}
console.log(array);
