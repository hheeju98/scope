'use strict';
// // console.log(this);
// const calcAge = function (birthYear) {
//     console.log(2037 - birthYear);
//     // console.log(this); // undefined
// }
// calcAge(1991);


// const calcAgeArrow = (birthYear) => {
//     console.log(2037 - birthYear);
//     console.log(this); // window 화살표 함수는 this를 가지지 못한다.
// }
// calcAgeArrow(1980);

// const jonas = {
//     year: 1991,
//     calcAge: function () {
//         console.log(this); //객체
//         console.log(2037 - this.year);
//     }
// }
// jonas.calcAge();

// const matilda = {
//     year: 2017,
// }
// matilda.calAge = jonas.calcAge;
// matilda.calAge(); // 결과 :20   this는 매서드를 호출하는 객체를 가르킨다

// const f = jonas.calcAge;
// f(); // regular function call이기 때문에 this->undefined
// // object 에 attach되어야 한다

var firstName = 'Matilda';
const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
        // console.log(this);
        console.log(2037 - this.year);

        //Solution1
        // const self = this;
        // const isMillenial = function () {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        //     // console.log(this.year >= 1981 && this.year <= 1996);
        // }

        //Solution2 Es6이후의 해결법
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
            // console.log(this.year >= 1981 && this.year <= 1996);
        }
        isMillenial(); // regular functuin call이기 때문에 undefined
    },
    greet: function () {
        console.log(this); //window arrow function이기 때문 
        console.log(`Hey ${this.firstName}`)
    } //Hey undefined 화살표 한수이기 때문에 부모 스코프인 global스코프를 가르켰기 때문 
};

jonas.greet(); //선언문으로 바꿀 경우 jonas
jonas.calcAge();
console.log(this.firstName); //Hey Matilada  var은 클로벌 스코프에 property를 생성하기 때문

//arguments keyword
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b
};
addArrow(2, 5, 8); // error  argument는 함수 선언문에서만 존재한다