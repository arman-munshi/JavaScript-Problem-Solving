let a = 5;
let b = 7;
console.log(a, b);
// a = b;
// b = a;

const temp = a;
a = b;
b = temp;
console.log(a, b);

//------------------------

let x = 7;
let y = 5;
console.log(x, y);
[x, y] = [y, x];
console.log(x, y);


for (var i = 0; i < 5; i++) {
 	 setTimeout(function () {
 	console.log(i);
  }, 100);
}

