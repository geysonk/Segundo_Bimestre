// 1 (false)
console.log (!(true));
// 2 (true)
console.log (!(false));
// 3 (false)
console.log (!(!(false)));
// 4 (true)
console.log (!(!(true)));
// 5 (false)
console.log (!(1));
// 6 (true)
console.log (!(!(1)));
// 7 (true)
console.log (!(0));
// 8 (false)
console.log (!(!(0)));
// 9 (false)
console.log (!(!(""))); 

// 10 
let x = 5;
let y = 9;

// a) (false)
console.log (x < 10 && x!==5);
// b) (true)
console.log (x>9 || x===5);
// c) (true)
console.log (!(x===y));

// 1 (true)
let x1 = 10;
let y1 = "a";

console.log(y1==="b" || x1 >= 10);

// 2 (false)
let x2 = 3;
let y2 = 8;

console.log(!(x2 == "3" || x2 === y2) && !(y2 !== 8 && x2 <= y2));

// 3 (false)
let str = "";
let msg = "haha!";
let eBonito = "false";

console.log(!((str || msg) && eBonito));

// .