// why it is important to know the type of data?
// because when data comes from frontent in backend we dont know int what type the frontend developer has stored the data
// hence for backend developer it becomes important to know what is the type of data before doing any kind of operations on it
let score=33;
// console.log(typeof score); //output : number
// console.log(typeof(score)); //output : number

// what if score is of type string and you want to convert this to string data type
// score="33";
// let valueInNumber= Number(score); // output : number
// console.log(typeof valueInNumber); // output : number

//Note - what if score="33abc" ab kya type converion ho jayega?
// answer of this is type conversion ho jayega lekin jo value hogi wo NaN aayegi


// // undefined ka convert karenge number me to uski kya value banegi
// score=undefined;
// console.log(typeof score);// output : undefined
// valueInNumber =Number(score);
// console.log(valueInNumber); // output : NaN


//null ko convert karenge to uski kya value banegi
score=null;
// console.log(typeof score); // output : object
// console.log(Number(score)); // output : 0

//conversion into boolean data type
// 1 => true; 0 => false
// "" => false; (string to boolen)
// "hitesh" => true

// string to number conversion
let someNumber=33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);