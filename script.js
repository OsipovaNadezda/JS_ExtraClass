// let num = 266219;
// let arr = [],
//     numString = num.toString(),
//     array=[];

// for (let i = 0, len = numString.length; i < len; i++) {
//     arr.push(+numString.charAt(i));
// }
// let  multiplication = console.info(eval((arr).join('*')));
// let degree = multiplication**3;
// // var degree = Math.pow (multiplication, 3);
// let degreeString = degree.toString();

// for (let i = 0; i < 2; i++) {
//     array.push(+numString.charAt(i));
// }
// console.log(array);


// let lang = ['ru', 'en'];
let lang = prompt("Введите язык", "ru, en" );

if (lang == "ru") {
    console.log("Дни недели на русском языке");
} else {
    console.log("Дни недели на английском языке");
}

switch (true){
    case lang == "ru":
        console.log("Дни недели на русском языке");
        break;
    case lang == "en":
        console.log("Дни недели на английском  языке");
        break;   
}


//task 2
let namePerson = prompt("Введите имя", "Артем, Александр или другое имя" );
let result = namePerson == "Артем" ? "Директор" : namePerson == "Александр" ? "преподаватель" : "студент";
console.log(result);