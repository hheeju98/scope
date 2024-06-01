
console.log(me);
// console.log(job);
// console.log(year);
var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b;
} // 선언전에 사용할 수 있는 유일한 함수 형태
const addExpr = function (a, b) {
    return a + b;
} //호이스팅x const로 선언되어 있기 때문(TDZ적용)
var addArrow = (a, b) => a + b; // 호이스팅x 

//Example

if (!numProducts) deleteShoppingCart(); //이 시점에 numProducts는 undefined다

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted');
}

var x = 1; // window object에 값 생성
let y = 2; // window object에 값 생성x
const z = 3; // window object에 값 생성x

console.log(x === window.x); //true
console.log(y === window.y); //false
console.log(z === window.z); // false

